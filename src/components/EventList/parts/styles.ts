import { styled, Box, Button, MenuItem, Popover } from '@mui/material';

export const ListContainer = styled(Box)(({ theme }) => ({
  paddingTop: 32,
  paddingBottom: 60,

  [`${theme.breakpoints.up('md')}`]: {
    paddingBottom: 80,
    paddingLeft: 24,
    paddingRight: 40,
    width: '100%',
  },

  [`${theme.breakpoints.up('lg')}`]: {
    paddingTop: 40,
    paddingBottom: 120,
    paddingRight: 80,
    maxWidth: 1129,
    margin: '0 auto',
  },
}));

export const ShowMoreBtn = styled(Button)({
  width: 288,
  marginTop: 32,
});

export const MobilePopover = styled(Popover)({
  marginTop: 8,
  boxShadow:
    '0px 2px 5px 0px rgba(0, 0, 0, 0.04), 0px 10px 10px 0px rgba(0, 0, 0, 0.03), 0px 22px 13px 0px rgba(0, 0, 0, 0.02), 0px 40px 16px 0px rgba(0, 0, 0, 0.01), 0px 62px 17px 0px rgba(0, 0, 0, 0.00)',
});

export const MobileMenuItem = styled(MenuItem)({
  padding: 0,

  '&:first-of-type': {
    marginBottom: 16,
  },
});

export const MobileItemButton = styled(Button)(({ theme }) => ({
  padding: 8,
  width: '100%',
  backgroundColor: theme.palette.common.white,
  justifyContent: 'flex-start',

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.dark,
  },

  '&:active': {
    backgroundColor: theme.palette.common.white,
  },

  '&:focus-visible': {
    backgroundColor: theme.palette.common.white,
  },
}));
