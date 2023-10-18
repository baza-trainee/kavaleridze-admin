import { Components, Theme } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material';

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: 40,
      paddingLeft: 0,
      paddingBottom: 24,
      fontWeight: 500,
      lineHeight: 1.429,
      borderBottomColor: theme.palette.gray.main,
      verticalAlign: 'baseline',
      fontVariantNumeric: 'lining-nums proportional-nums',

      '&:first-of-type, &:last-child': {
        paddingLeft: 16,
      },

      [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.gray.light,
        padding: '16px 16px 16px 0',
        fontWeight: 600,

        '&:first-of-type, &:last-child': {
          paddingLeft: 16,
        },
      },

      [`${theme.breakpoints.up('md')}`]: {
        padding: '24px 16px',
        verticalAlign: 'middle',
        fontSize: 18,
        lineHeight: 1.556,

        [`&.${tableCellClasses.head}`]: {
          padding: '24px 16px',
        },
      },
    }),
  },
};

export const MuiTableRow: Components<Theme>['MuiTableRow'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      //   padding: 16,

      [`${theme.breakpoints.up('md')}`]: {
        // padding: 0,
      },
    }),
  },
};
