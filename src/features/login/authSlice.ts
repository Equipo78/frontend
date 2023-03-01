import { createSlice } from '@reduxjs/toolkit';

interface AuthInterface {
  email: string | null;
  token: string | null;
}

const initialState: AuthInterface = { email: null, token: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, token } = action.payload;

      state.email = email;
      state.token = token;
    },
    logOut: (state) => {
      state.email = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentEmail = (state: { auth: { email: string | null } }) => state.auth.email;
export const selectCurrentToken = (state: { auth: { token: string | null } }) => state.auth.token;
