import ButtonWithIcon from '@/components/ButtonWithIcon/ButtonWithIcon';
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import ButtonWithIconNav from '../parts/ButtonWithIcon';
import Navigation from '../parts/Navigation';
import { MobileHeader, Wrapper } from './style';
import useAuth from '@/hooks/useAuth';
import { navigation } from '../parts/data';
const NavBarMobile: FC = () => {
  const { signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <Wrapper>
          <ButtonWithIcon
            sx={{ color: 'white', p: 0, mb: '24px', justifyContent: 'flex-end' }}
            svgSpriteId="close"
            title=""
            variant="text"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Navigation navigation={navigation} />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonWithIconNav
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
              onClick={() => signOut()}
            />
          </Box>
        </Wrapper>
      ) : (
        <MobileHeader>
          <ButtonWithIcon sx={{ color: 'white', p: 0 }} svgSpriteId="burger-menu" title="" variant="text" onClick={() => setOpen(true)} />
        </MobileHeader>
      )}
    </>
  );
};

export default NavBarMobile;
