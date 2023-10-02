import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  minWidth: 240,
  minHeight: '100vh',
  
}));
