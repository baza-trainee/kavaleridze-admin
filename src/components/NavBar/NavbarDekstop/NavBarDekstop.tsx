import { FC, useState } from 'react';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import useAuth from '@/hooks/useAuth';

import { CloseButton, ExitButton, ExitWrapper, Wrapper } from './style';
import Navigation from '../parts/Navigation';

import { Link } from 'react-router-dom';
import { makeConstantsVie } from './helper';

const NavBarDekstop: FC = () => {
  const { signOut } = useAuth();
  const theme = useTheme();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const [isShort, setIsShort] = useState(isLaptop);

  const { rotate, title, navItems, insertLogo, width } = makeConstantsVie(isShort, isLaptop);
  const Offset = styled('div')({
    height: '100vh',
    width,
  });
  return (
    <Box>
      <Wrapper sx={{ position: 'fixed', zIndex: 1 }}>
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
          <ExitButton svgSpriteId="log-out" title={title} variant="text" iconPlace="startIcon" onClick={() => signOut()} />
        </ExitWrapper>
      </Wrapper>
      <Offset />
    </Box>
  );
};

export default NavBarDekstop;
