import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MuiButton } from './themed-components/button.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiTypography } from './themed-components/typography.modifier';
import { MuiSelect } from './themed-components/select.modifier';
import {
  MuiInputBase,
  MuiOutlinedInput,
} from './themed-components/textFiled.modifier';
import { MuiSvgIcon } from './themed-components/svgIcon.modifier';

export const components: Components<Theme> = {
  MuiTypography,
  MuiContainer,
  MuiButton,
  MuiSelect,
  MuiInputBase,
  MuiOutlinedInput,
  MuiSvgIcon,
};
