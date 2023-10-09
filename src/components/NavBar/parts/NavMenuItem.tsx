import useActiveLink from '@/hooks/useActiveLink';
import { ListItem } from '@mui/material';
import { FC } from 'react';
import ButtonWithIcon from '@/components/Common/ButtonWithIcon';
import { Link } from 'react-router-dom';

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
      <ButtonWithIcon
        sx={{
          backgroundColor: (theme) =>
            isActiveLink
              ? theme.palette.primary.main
              : theme.palette.text.primary,
          color: (theme) =>
            isActiveLink
              ? theme.palette.common.black
              : theme.palette.common.white,
        }}
        title={title}
        svgSpriteId={icon}
        variant="link"
        iconPlace="startIcon"
        component={Link}
        to={href}
      ></ButtonWithIcon>
    </ListItem>
  );
};

export default NavMenuItem;
