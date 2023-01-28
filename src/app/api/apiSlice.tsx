import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>;

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
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
