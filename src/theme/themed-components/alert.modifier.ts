import { Components, Theme } from '@mui/material/styles';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      borderRadius: '8px',
      padding: '15px 16px',
      fontSize: 14,
      lineHeight: 1.429,

      [`${theme.breakpoints.up('md')}`]: {
        fontSize: 16,
        lineHeight: 1.5,
      },
    }),
    message: {
      padding: 0,
    },
  },
  variants: [
    {
      props: { variant: 'outlined', severity: 'error' },
      style: ({ theme }) => ({
        borderColor: theme.palette.error.main,
      }),
    },
  ],
};
