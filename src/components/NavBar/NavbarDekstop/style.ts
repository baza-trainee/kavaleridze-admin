import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: '40px 16px 40px 80px',
  minHeight: '100vh',
display: 'flex',
flexDirection: 'column',
}));
