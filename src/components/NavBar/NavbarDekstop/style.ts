import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  minWidth: 240,
  minHeight: '100vh',
  pt: 10,
  pl: 3,
  // [theme.breakpoints.up('md')]: {
  //   fontSize: 18,
  //   order: 'initial',
  //   lineHeight: 1.555, //28px,
  //   alignSelf: 'end',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   fontSize: 18,
  // },
}));
