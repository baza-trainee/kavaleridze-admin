import { FC, useState } from 'react';
import { Box } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import logo from '@/assets/images/Logo.svg';
import logoShort from '@/assets/images/smallLogo.svg';
import { Wrapper } from './style';
import Navigation from '../parts/Navigation';
import ButtonWithIconNav from '../parts/ButtonWithIcon';

const NavBar: FC = () => {
  const { signOut } = useAuth();
  const [isShort, setIsShort] = useState(false);

  let rotate = '';
  let navigation = [
    { href: '/', title: 'Додати подію', icon: 'app-plus' },
    { href: '/events/:slug', title: 'Редагувати події', icon: 'edit' },
    { href: '/contacts', title: 'Контакти', icon: 'contacts' },
    { href: '/settings', title: 'Налаштування ', icon: 'settings' },
  ];
  let insertLogo = logo;
  if (isShort) {
    rotate = 'rotate(180deg)';
    navigation = navigation.map((item) => ({ ...item, title: '' }));
    insertLogo = logoShort;
  }

  return (
    <Wrapper>
      <Box component="img" sx={{ maxWidth: '240px', alignSelf: 'end' }} src={insertLogo} alt="logo" mb={2} />
      <Navigation navigation={navigation} />
      <ButtonWithIconNav
        sx={{
          background: 'white',
          width: 'max-content',
          color: 'black',
          marginTop: '8px',
          transform: rotate,
        }}
        svgSpriteId={'close-nav'}
        title=""
        onClick={() => setIsShort((prev) => !prev)}
      />
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'end' }}>
        <ButtonWithIconNav
          sx={{
            borderRadius: '8px',
            border: (theme) => `1px solid ${theme.palette.common.white}`,
            color: (theme) => theme.palette.common.white,
            width: '100%',
            maxWidth: '238px',
            p: '16px',
            '&:hover': {
              border: (theme) => `1px solid ${theme.palette.primary.dark}`,
            },
          }}
          svgSpriteId="log-out"
          title={isShort ? '' : 'Вийти'}
          variant="text"
          onClick={() => signOut()}
        />
      </Box>
    </Wrapper>
  );
};

export default NavBar;
