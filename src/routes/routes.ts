import { lazy, LazyExoticComponent } from 'react';

import { Login } from '../pages';

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  name: string;
}

export const routes: Route[] = [
  {
    to: '/login',
    path: '/login',
    Component: Login,
    name: 'Login',
  },
  {
    to: '/',
    path: '/',
    Component: lazy(() => import('../pages/Home')),
    name: 'Home',
  },
];
