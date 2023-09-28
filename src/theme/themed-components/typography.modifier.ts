import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navigationRale: true;
  }
}
export const MuiTypography: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variant: 'body1',
  },

  variants: [
    {
      props: { variant: 'h3' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.222, //22px,
        [theme.breakpoints.up('md')]: {
          fontSize: 20,
          lineHeight: 1.2, //24px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 24,
          lineHeight: 1.167, //28px,
        },
      }),
    },
    {
      props: { variant: 'body1' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 14,
        lineHeight: 1.429, //20px,
        [theme.breakpoints.up('md')]: {
          fontSize: 18,
          lineHeight: 1.555, //28px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
      }),
    },
    {
      props: { variant: 'body2' },
      style: {
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 1.5, //24px,
      },
    },

    {
      props: { variant: 'navigationRale' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 'normal',
        fontWeight: 500,

        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
      }),
    },
  ],
};
