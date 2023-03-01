import { lazy, LazyExoticComponent } from 'react';

import { Login, Register } from '../pages';

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  name: string;
}

export const authRoutes: Route[] = [
  {
    Component: Login,
    name: 'Login',
    path: '/login',
  },
  {
    Component: Register,
    name: 'Register',
    path: '/register',
  },
];

export const commonRoutes: Route[] = [
  {
    Component: lazy(() => import('../pages/Home')),
    name: 'Inicio',
    path: '/',
  },
  {
    Component: lazy(() => import('../pages/Balances')),
    name: 'Saldos',
    path: '/balances',
  },
  {
    Component: lazy(() => import('../pages/Cards')),
    name: 'Tarjetas',
    path: '/cards',
  },
  {
    Component: lazy(() => import('../pages/Receipts')),
    name: 'Comprobantes',
    path: '/receipts',
  },
  {
    Component: lazy(() => import('../pages/Transfers')),
    name: 'Transferencias',
    path: '/transfers',
  },
  {
    Component: lazy(() => import('../pages/Movements')),
    name: 'Movimientos',
    path: '/movements',
  },
  {
    Component: lazy(() => import('../pages/Contacts')),
    name: 'Contactos',
    path: '/contacts',
  },
];
