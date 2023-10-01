import { FC } from 'react';
import { Box, Button } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import logo from '@/assets/images/Logo.svg';
import { MobileHeader, Wrapper } from './style';
import { useState } from 'react';
import ButtonWithIcon from '@/components/ButtonWithIcon/ButtonWithIcon';
const NavBarMobile: FC = () => {
  const { signOut } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <Wrapper>
          <Box component="img" src={logo} alt="logo" mb={2} />
          <Button onClick={() => setOpen(false)}>X</Button>
        </Wrapper>
      ) : (
        <MobileHeader>
          <ButtonWithIcon sx={{ color: 'inherit' ,p:0}} svgSpriteId='menu' title='' variant='text' onClick={() => setOpen(true)} />
        </MobileHeader>
      )}
    </>
  );
};

export default NavBarMobile;
