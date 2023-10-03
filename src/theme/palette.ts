import { PaletteOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    gray: {
      main: string
      dark: string
      light: string
    }
  }
  interface PaletteOptions {
    gray: {
      main: string
      dark: string
      light: string
    }
  }
}

export const palette: PaletteOptions = {
  common: {
    black: '#151514',
    white: '#F9F8F4',
  },
  primary: {
    main: '#F0B92D',
    dark: '#D8A629',
    contrastText: '#151514',
  },

  secondary: {
    main: '#F9F7F2',
    dark: '#F4F1E5',
    contrastText: '#151514',
  },

  text: {
    primary: '#151514',
    secondary: '#878684',
    disabled: '#D0D0D0',
  },
  background: {
    default: '#F9F8F4',
    paper: '#F9F8F4',
  },
  divider: '#878684',
  error: { main: '#DA1414', light: '#FFF9F9' },
  action: { disabledBackground: '#D0D0D0' },
  gray: {
    main: '#D0D0D0',
    dark: '#878684',
    light: '#EEEEEE',
  },
}
