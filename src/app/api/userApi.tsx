import { apiSlice } from './apiSlice';

interface User {
  id: string;
  email: string;
  name: string;
  lastname: string;
  roles: string[];
}
interface Response {
  ok: boolean;
  user: User;
}
export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userData: builder.query<Response, void>({
      query: () => '/api/v1/auth/user',
    }),
  }),
});

export const { useUserDataQuery } = userApi;
