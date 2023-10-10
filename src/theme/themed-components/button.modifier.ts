import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    adminPrimaryBtn: true;
    adminSecondaryBtn: true;
    tertiary: true;
    link: true;
  }
}
export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      color: theme.palette.common.black,
    }),
    startIcon: {
      '& > *:first-of-type': {
        fontSize: '1.5rem',
      },
    },
    endIcon: {
      marginRight: 0,
      marginLeft: 8,
      '& > *:first-of-type': {
        fontSize: '1.5rem',
      },
    },
  },
  variants: [
    {
      props: { variant: 'primary' },
      style: ({ theme }) => ({
        fontSize: '1.125rem',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1rem',
        },
        fontWeight: 500,
        lineHeight: 'normal',
        borderRadius: '8px',
        backgroundColor: theme.palette.primary.main,
        padding: '8px',
        height: '48px',
        minWidth: '169px',
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        // focus-visible - для того, щоб фокус був тільки при навігації клавішами
        '&:focus-visible': {
          backgroundColor: theme.palette.primary.dark,
          border: `1.5px solid ${theme.palette.common.black}`,
        },
        '&:active': {
          backgroundColor: theme.palette.primary.main,
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',
        },
        '&:disabled': {
          backgroundColor: theme.palette.gray.light,
          color: theme.palette.gray.dark,
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        fontSize: '1.125rem',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1rem',
        },
        fontWeight: 500,
        lineHeight: 'normal',
        borderRadius: '8px',
        backgroundColor: theme.palette.gray.light,
        padding: '8px',
        height: '48px',
        minWidth: '169px',
        '&:hover': {
          backgroundColor: theme.palette.gray.main,
        },
        // focus-visible - для того, щоб фокус був тільки при навігації клавішами
        '&:focus-visible': {
          backgroundColor: theme.palette.gray.main,
          border: `1.5px solid ${theme.palette.common.black}`,
        },
        '&:active': {
          backgroundColor: theme.palette.gray.main,
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',
        },
        '&:disabled': {
          backgroundColor: theme.palette.gray.light,
          color: theme.palette.gray.dark,
        },
      }),
    },
    {
      props: { variant: 'text' },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.dark,
          backgroundColor: 'transparent',
        },
      }),
    },
    {
      props: { variant: 'adminPrimaryBtn' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontSize: '1.125rem',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1rem',
        },
        fontWeight: 500,
        lineHeight: 'normal',
        borderRadius: '8px',
        backgroundColor: theme.palette.primary.main,
        padding: '8px',
        height: '48px',
        minWidth: '169px',
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        // focus-visible - для того, щоб фокус був тільки при навігації клавішами
        '&:focus-visible': {
          backgroundColor: theme.palette.primary.dark,
          border: `1.5px solid ${theme.palette.common.black}`,
        },
        '&:active': {
          backgroundColor: theme.palette.primary.main,
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',
        },
        '&:disabled': {
          backgroundColor: theme.palette.gray.light,
          color: theme.palette.gray.dark,
        },
      }),
    },
    {
      props: { variant: 'tertiary' },
      style: ({ theme }) => ({
        padding: 0,
        borderBottom: '1px solid',
        borderColor: 'transparent',
        fontFamily: 'Raleway',
        lineHeight: 'normal',
        fontWeight: 600,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,

        '& .MuiButton-endIcon': {
          marginLeft: 4,
        },

        borderRadius: 0,
        '&:hover': {
          color: theme.palette.primary.dark,
        },

        '&:focus': {
          borderBottom: '1px solid',
          color: theme.palette.primary.dark,
          borderColor: 'theme.palette.primary.dark',
        },

        '&:active': {},

        '&:disabled': {
          color: theme.palette.text.disabled,
        },
      }),
    },
    {
      props: { variant: 'link' },
      style: ({ theme }) => ({
        color: theme.palette.common.white,
        lineHeight: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& .MuiButton-startIcon': {
          marginLeft: 4,
        },
        padding: '16px',
        gap: ' 16px',
        display: 'flex',
        width: '100%',
        transition: theme.transitions.create('color'),
        '&:hover': { color: theme.palette.primary.dark },
        borderRadius: 0,

        '&:disabled': {
          color: theme.palette.text.disabled,
        },
      }),
    },
    {
      props: { variant: 'adminSecondaryBtn' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontSize: '1.125rem',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1rem',
        },
        fontWeight: 500,
        lineHeight: 'normal',
        borderRadius: '8px',
        backgroundColor: theme.palette.gray.light,
        padding: '8px',
        height: '48px',
        minWidth: '169px',
        '&:hover': {
          backgroundColor: theme.palette.gray.main,
        },
        // focus-visible - для того, щоб фокус був тільки при навігації клавішами
        '&:focus-visible': {
          backgroundColor: theme.palette.gray.main,
          border: `1.5px solid ${theme.palette.common.black}`,
        },
        '&:active': {
          backgroundColor: theme.palette.gray.main,
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',
        },
        '&:disabled': {
          backgroundColor: theme.palette.gray.light,
          color: theme.palette.gray.dark,
        },
      }),
    },
  ],
};
