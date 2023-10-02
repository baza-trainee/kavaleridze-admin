import { List, ListItem, styled } from '@mui/material';

export const MenuList = styled(List)(({ theme }) => ({


}));

export const ListMenuItem = styled(ListItem)(({ theme }) => ({
  padding: '16px',
  gap: ' 16px',
  display: 'flex',
  width: '100%',
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.primary.main},
}));
