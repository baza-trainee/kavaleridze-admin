import ButtonWithIcon from '@/components/Common/ButtonWithIcon';
import useAuth from '@/hooks/useAuth';
import { Box, Toolbar, styled, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import Navigation from '../parts/Navigation';
import { navigation } from '../parts/data';
import { MobileHeader, Wrapper } from './style';

import { Link } from 'react-router-dom';
const NavBarMobile: FC = () => {
  const { signOut } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const  Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <Wrapper fullScreen open={open} onClose={handleClose}>
        <ButtonWithIcon
          sx={{
            color: 'white',
            p: 0,
            mb: '24px',
            justifyContent: 'flex-end',
          }}
          svgSpriteId="close"
          title=""
          variant="text"
          onClick={handleClose}
        />
        <Navigation handleClose={handleClose} navigation={navigation} />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonWithIcon
            sx={{
              borderRadius: '8px',
              border: (theme) => `1px solid ${theme.palette.common.white}`,
              color: (theme) => theme.palette.common.white,
              minWidth: '238px',
              p: '16px',
              '&:hover': {
                border: (theme) => `1px solid ${theme.palette.primary.dark}`,
              },
            }}
            svgSpriteId="log-out"
            title="Вийти"
            variant="text"
            iconPlace="startIcon"
            component={Link}
            onClick={() => signOut()}
          />
        </Box>
      </Wrapper>

      <MobileHeader position="fixed">
        <Toolbar>
          <ButtonWithIcon
            sx={{ color: 'white', p: 0 }}
            svgSpriteId="burger-menu"
            title=""
            variant="text"
            iconPlace="startIcon"
            onClick={handleClickOpen}
          />
        </Toolbar>
      </MobileHeader>
      <Offset />
    </>
  );
};

export default NavBarMobile;
