import { FC } from 'react';
import { Box, Button } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import logo from '@/assets/images/Logo.svg';
import { Wrapper } from './style';

const NavBar: FC = () => {
  const { signOut } = useAuth();
  return (
    <Wrapper>
      <Box component="img" src={logo} alt="logo" mb={2} />
      <Button onClick={() => signOut()}>Logout</Button>
    </Wrapper>
  );
};

export default NavBar;
