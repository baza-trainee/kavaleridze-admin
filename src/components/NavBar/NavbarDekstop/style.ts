import ButtonWithIcon from '@/components/ButtonWithIcon/ButtonWithIcon';
import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: '40px 16px 40px 80px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));
export const CloseButton = styled(ButtonWithIcon)({
  background: 'white',
  width: 'max-content',
  color: 'black',
  marginTop: '8px',
});

export const ExitWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'end',
});
export const ExitButton = styled(ButtonWithIcon)(({ theme }) => ({
  borderRadius: '8px',
  border: `1px solid ${theme.palette.common.white}`,
  color: theme.palette.common.white,
  width: '100%',
  maxWidth: '238px',
  padding: '16px',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.dark}`,
  },
}));
