import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import NavBar from '../NavBar/NavbarDekstop/NavBar';
import NavBarMobile from '../NavBar/NavbarMobile/NavBarMobile';
const SharedLayout = () => {
  //ToDo: when Login form will be done, uncomment code below (8-14 line)
  const { user } = useAuth()
  const location = useLocation()
  console.log(user)

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  //ToDo: add components for left bar below:
  return (
    <Stack direction="row">
      {isDesktop ? <NavBar  /> : <NavBarMobile />}
      <Outlet />
    </Stack>
  )
}

export default SharedLayout
