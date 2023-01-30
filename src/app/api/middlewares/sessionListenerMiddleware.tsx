import { createListenerMiddleware, Action } from '@reduxjs/toolkit';

import { setCredentials } from '../../../features/login/authSlice';
import { RootState } from '../../store';

const sessionListenerMiddleware = createListenerMiddleware();

sessionListenerMiddleware.startListening({
  actionCreator: setCredentials,
  effect: (action: Action, listenerApi) => {
    sessionStorage.setItem('auth', JSON.stringify((listenerApi.getState() as RootState).auth));
  },
});

export const sessionMiddleware = sessionListenerMiddleware.middleware;
