import { FC, useState } from 'react';
import { Box, styled } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import logo from '@/assets/images/fullLogo.svg';
import logoShort from '@/assets/images/smallLogo.svg';
import { CloseButton, ExitButton, ExitWrapper, Wrapper } from './style';
import Navigation from '../parts/Navigation';
import { navigation } from '../parts/data';
import { Link } from 'react-router-dom';

const NavBarDekstop: FC = () => {
  const { signOut } = useAuth();
  const [isShort, setIsShort] = useState(false);

  let rotate = '';
  let navItems = [...navigation];
  let insertLogo = logo;
  let width = '336px';
  if (isShort) {
    rotate = 'rotate(180deg)';
    navItems = navigation.map((item) => ({ ...item, title: '' }));
    insertLogo = logoShort;
    width = '164px';
  }
  const Offset = styled('div')({
    height: '100vh',
    width,
  });
  return (
    <Box>
      <Wrapper sx={{ position: 'fixed' }}>
        <Box component="img" sx={{ maxWidth: '240px', alignSelf: 'end' }} src={insertLogo} alt="logo" mb={2} />
        <Navigation navigation={navItems} />
        <CloseButton
          sx={{
            transform: rotate,
          }}
          svgSpriteId={'close-nav'}
          title=""
          variant="link"
          iconPlace="startIcon"
          component={Link}
          onClick={() => setIsShort((prev) => !prev)}
        />
        <ExitWrapper>
          <ExitButton svgSpriteId="log-out" title={isShort ? '' : 'Вийти'} variant="text" iconPlace="startIcon" onClick={() => signOut()} />
        </ExitWrapper>
      </Wrapper>
      <Offset />
    </Box>
  );
};

export default NavBarDekstop;
