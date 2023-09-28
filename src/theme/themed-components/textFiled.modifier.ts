import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Components, Theme } from '@mui/material/styles';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${inputBaseClasses.input}`]: {
        outline: 'none',
        padding: 0,

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
};

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '--TextField-brandBorderColor': theme.palette.common.black,
      '--TextField-brandBorderHoverColor': theme.palette.primary.main,
      '--TextField-brandBorderFocusedColor': theme.palette.primary.main,
    }),
  },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: 'var(--TextField-brandBorderColor)',
      borderRadius: 24,
    },
    root: ({ theme }) => ({
      color: theme.palette.common.black,

      maxHeight: 200,
      padding: 16,
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'var(--TextField-brandBorderHoverColor)',
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        border: '1px solid',
        borderColor: 'var(--TextField-brandBorderFocusedColor)',
      },
    }),
  },
};
