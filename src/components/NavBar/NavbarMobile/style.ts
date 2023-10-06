import { AppBar, Dialog, styled } from '@mui/material';

export const Wrapper = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.common.black,
    boxShadow: 'none',
  },
  '& .MuiBackdrop-root': {
    backgroundColor: theme.palette.common.black,

  },

  color: theme.palette.common.white,
  minWidth: 240,
  padding: '40px 16px',
  textAlign: 'right',
  display: 'flex',
  flexDirection: 'column',
}));
export const MobileHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  display: 'flex',
  justifyContent: 'flex-start',
}));
