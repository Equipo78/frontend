import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CommonRoutes } from './CommonRoutes';
import { authRoutes } from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes.map(({ path, Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
        <Route element={<CommonRoutes />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
};
