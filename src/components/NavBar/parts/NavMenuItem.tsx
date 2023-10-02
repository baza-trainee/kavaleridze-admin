import { FC } from 'react';
import { ListItem, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useActiveLink from '@/hooks/useActiveLink';
import { ListMenuItem } from './style';

interface NavMenuItemProp {
  href: string;
  title: string;
  click?: () => void;
}

const NavMenuItem: FC<NavMenuItemProp> = ({ href, title, click }) => {
  const isActiveLink = useActiveLink(href);
  return (
    <ListMenuItem
      disablePadding
      onClick={click}
      sx={{
        backgroundColor: (theme) => (isActiveLink ? theme.palette.primary.main : theme.palette.text.primary),
        color: (theme) => (isActiveLink ? theme.palette.common.black : theme.palette.common.white),
      }}>
      <Typography component="span">{title}</Typography>
    </ListMenuItem>
  );
};

export default NavMenuItem;
