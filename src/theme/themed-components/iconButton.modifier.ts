import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      borderRadius: '4px',

      '&:hover': {
        color: theme.palette.primary.main,
      },
    }),
  },
};
