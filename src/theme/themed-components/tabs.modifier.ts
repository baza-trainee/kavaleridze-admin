import { Components, Theme } from '@mui/material'

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: '0',
      [theme.breakpoints.up('xs')]: {
        paddingLeft: '16px',
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '24px',
      },
    }),

    indicator: ({ theme }) => ({
      height: '1px',
      backgroundColor: theme.palette.common.black,
    }),

    flexContainer: ({ theme }) => ({
      [theme.breakpoints.up('xs')]: {
        columnGap: '24px',
      },
      [theme.breakpoints.up('md')]: {
        columnGap: '56px',
      },
    }),
  },
}
