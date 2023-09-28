import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { components } from './components';

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
});
