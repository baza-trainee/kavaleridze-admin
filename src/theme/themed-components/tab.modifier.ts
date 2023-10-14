import { Components, Theme } from '@mui/material'

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 0,
      padding: 0,
      textTransform: 'none',
      fontWeight: 600,
      lineHeight: 1.55,
      color: theme.palette.gray.dark,
      [theme.breakpoints.up('xs')]: {
        padding: '24px 0 16px',
        fontSize: '14px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '32px 0 16px',
        fontSize: '18px',
      },
      '&.Mui-selected': {
        color: theme.palette.common.black,
      },
    }),
  },
}
