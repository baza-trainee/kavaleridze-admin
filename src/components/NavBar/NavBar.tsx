import { FC } from 'react';
import { Box, Button } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import logo from '@/assets/images/logo.svg';

const NavBar: FC = () => {
  const { signOut } = useAuth();
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.common.black,
        color: (theme) => theme.palette.common.white,
        minWidth: 240,
        minHeight: '100vh',
        pt: 10,
        pl: 3,
      }}
    >
      <Box component="img" src={logo} alt="logo" mb={2} />
      <Button onClick={() => signOut()}>Logout</Button>
    </Box>
  );
};

export default NavBar;
