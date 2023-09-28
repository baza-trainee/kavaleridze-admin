import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MuiButton } from './themed-components/button.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiTypography } from './themed-components/typography.modifier';

export const components: Components<Theme> = {
  MuiTypography,
  MuiContainer,
  MuiButton,
};
