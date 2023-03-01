import { AnyAction, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';

import authReducer from '../features/login/authSlice';

import { apiSlice } from './api/apiSlice';
import { sessionMiddleware } from './api/middlewares/sessionListenerMiddleware';

const KEY = 'token';

function loadState() {
  try {
    const serializedState = sessionStorage.getItem(KEY);

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

//
export const store = configureStore({
  preloadedState: {
    auth: loadState(),
  },
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(sessionMiddleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Action = AnyAction;

export const useDispatch: () => AppDispatch = _useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export default store;
