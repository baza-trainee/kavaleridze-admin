import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MuiAlert } from './themed-components/alert.modifier';
import { MuiButton } from './themed-components/button.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiIconButton } from './themed-components/iconButton.modifier';
import { MuiInputLabel } from './themed-components/inputLabel.modifier';
import { MuiSelect } from './themed-components/select.modifier';
import { MuiSvgIcon } from './themed-components/svgIcon.modifier';
import { MuiTab } from './themed-components/tab.modifier';
import { MuiTabs } from './themed-components/tabs.modifier';
import {
  MuiInputBase,
  MuiOutlinedInput,
  MuiTextField,
} from './themed-components/textFiled.modifier';
import { MuiTypography } from './themed-components/typography.modifier';
import { MuiTableCell, MuiTableRow } from './themed-components/table.modifier';

export const components: Components<Theme> = {
  MuiTypography,
  MuiContainer,
  MuiButton,
  MuiSelect,
  MuiInputBase,
  MuiOutlinedInput,
  MuiSvgIcon,
  MuiTabs,
  MuiTab,
  MuiTextField,
  MuiInputLabel,
  MuiIconButton,
  MuiAlert,
  MuiTableCell,
  MuiTableRow,
};
