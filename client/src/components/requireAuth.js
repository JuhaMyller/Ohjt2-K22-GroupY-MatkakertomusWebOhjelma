import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const location = useLocation();
  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/kirjaudu" state={{ from: location }} replace />
  );
};

export default RequireAuth;
