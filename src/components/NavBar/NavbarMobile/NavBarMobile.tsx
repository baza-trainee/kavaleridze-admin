import { FC } from 'react';
import useAuth from '@/hooks/useAuth';
import { MobileHeader, Wrapper } from './style';
import { useState } from 'react';
import ButtonWithIcon from '@/components/ButtonWithIcon/ButtonWithIcon';
import Navigation from '../parts/Navigation';
const NavBarMobile: FC = () => {
  const { signOut } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <Wrapper>
          <Navigation />
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
