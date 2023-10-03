import { FC } from 'react';
import useActiveLink from '@/hooks/useActiveLink';
import ButtonWithIconNav from './ButtonWithIcon';
import {  ListItem } from '@mui/material';

interface NavMenuItemProp {
  href: string;
  title: string;
  icon: string;
  click?: () => void;
}

const NavMenuItem: FC<NavMenuItemProp> = ({ href, title, icon, click }) => {
  const isActiveLink = useActiveLink(href);
  return (
    <ListItem disablePadding onClick={click}>
      <ButtonWithIconNav
        sx={{
          backgroundColor: (theme) => (isActiveLink ? theme.palette.primary.main : theme.palette.text.primary),
          color: (theme) => (isActiveLink ? theme.palette.common.black : theme.palette.common.white),
        }}
        title={title}
        svgSpriteId={icon}
        to={href}></ButtonWithIconNav>
    </ListItem>
  );
};

export default NavMenuItem;
