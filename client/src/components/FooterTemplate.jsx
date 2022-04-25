import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Footer from './Footer';

const RequireAuth = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default RequireAuth;
