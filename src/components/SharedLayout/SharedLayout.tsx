import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import NavBar from '../NavBar/NavBar';
import NavBarMobile from '../NavBar/NavbarMobile/NavBarMobile';

const SharedLayout = () => {
  //ToDo: when Login form will be done, uncomment code below (8-14 line)
  const { user } = useAuth();
  const location = useLocation();
  console.log(user);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //ToDo: add components for left bar below:
  return (
    <Stack direction="row">
      <NavBarMobile />
      <Outlet />
    </Stack>
  );
};

export default SharedLayout;
