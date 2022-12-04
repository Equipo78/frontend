import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} element={<Component />} path={path} />
          ))}

          <Route element={<Navigate replace to={routes[0].to} />} path="/*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
