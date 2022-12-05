import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';

import { commonRoutes } from './routes';

export const CommonRoutes = () => {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Layout>
        <Routes>
          {commonRoutes.map(({ path, Component }) => (
            <Route key={path} element={<Component />} path={path} />
          ))}

          <Route element={<Navigate replace to={'/login'} />} path="/*" />
        </Routes>
      </Layout>
    </Suspense>
  );
};
