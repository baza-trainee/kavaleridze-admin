import { Components, Theme } from '@mui/material/styles';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.black,
      marginBottom: 8,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.43,

      [theme.breakpoints.up('md')]: {
        fontSize: 18,
        lineHeight: 1.56,
      },
    }),
  },
};
