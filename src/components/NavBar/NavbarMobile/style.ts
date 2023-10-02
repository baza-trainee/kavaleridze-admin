import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  minWidth: 240,
  minHeight: '100vh',
  padding: '16px',
  position: 'absolute',
  right: 0,
  left: 0,
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
export const MobileHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  padding: '16px',
  position:'fixed',
  display:'flex',
  justifyContent:"flex-start",
  top:0,
  right:0,
  left:0,
}));
