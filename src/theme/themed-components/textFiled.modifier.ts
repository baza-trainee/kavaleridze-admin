import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Components, Theme } from '@mui/material/styles';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&:placeholder': {
        opacity: 1,
        color: theme.palette.text.secondary,
        fontWeight: 400,
      },
      [`& .${inputBaseClasses.input}`]: {
        outline: 'none',
        padding: 0,
        lineHeight: 1.5,
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
      '--TextFiled-brandErrorBorderColor': theme.palette.error.main,
    }),
  },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: ({ error }) => ({
      borderColor: error
        ? 'var(--TextFiled-brandErrorBorderColor)'
        : 'var(--TextField-brandBorderColor)',
      borderRadius: 8,
    }),
    root: ({ theme, error }) => ({
      color: theme.palette.common.black,
      padding: '12px 16px',
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: error
          ? 'var(--TextFiled-brandErrorBorderColor)'
          : 'var(--TextField-brandBorderHoverColor)',
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        border: '1px solid',
        borderColor: error
          ? 'var(--TextFiled-brandErrorBorderColor)'
          : 'var(--TextField-brandBorderFocusedColor)',
      },
    }),
  },
};
