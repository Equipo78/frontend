import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { setCredentials, logOut } from '../../features/login/authSlice';
import { RootState } from '../store';

interface CustomError {
  data: {
    message: string;
    stack: string;
  };
  status: number;
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // const { state } = getState() as { state: { auth: { token: string | null } } };
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>;

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);

  // originalStatus vs status
  if (result?.error?.status === 403) {
    console.log('Sending refresh token');

    const refreshResult = await baseQuery('/refresh', api, extraOptions);

    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      api.dispatch(setCredentials({ ...refreshResult.data, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }) as BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     CustomError,
//     {}
//   >,
//   tagTypes: ['Tasks'],
//   endpoints: (builder) => ({}),
// });

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
