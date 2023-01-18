import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from './authSlice';

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate replace state={{ from: location }} to="/login" />;
};

export default RequireAuth;
