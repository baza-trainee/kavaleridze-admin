import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { HeaderBox, HeaderLogoBox } from '../styles';
import logo from '@/assets/images/fullLogo.svg';

const LoginHeader: FC = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderLogoBox>
          <Box component={'img'} src={logo} alt="logo image" />
        </HeaderLogoBox>
      </Container>
    </HeaderBox>
  );
};

export default LoginHeader;
