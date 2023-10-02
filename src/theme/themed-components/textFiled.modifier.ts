import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { inputBaseClasses } from '@mui/material/InputBase'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { Components, Theme } from '@mui/material/styles'

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${inputBaseClasses.input}`]: {
        outline: 'none',
        padding: 0,
        lineHeight: 1.5,

        '&:placeholder': {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },

      [`& .${inputAdornmentClasses.root}`]: {
        color: 'inherit',
      },
    }),
  },
}

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '--TextField-brandBorderColor': theme.palette.common.black,
      '--TextField-brandBorderHoverColor': theme.palette.primary.main,
      '--TextField-brandBorderFocusedColor': theme.palette.primary.main,
    }),
  },
}
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: ({ error, theme }) => ({
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.common.black,
      borderRadius: 8,
    }),
    root: ({ theme, error }) => ({
      color: theme.palette.common.black,
      padding: '12px 16px',
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        border: '1px solid',
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },
    }),
  },
}
