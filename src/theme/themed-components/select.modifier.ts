import { Components, Theme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const MuiSelect: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    MenuProps: {
      autoFocus: false,
      PaperProps: {
        sx: {
          marginTop: 1,
          border: '1px solid',
          borderColor: (theme) => theme.palette.common.black,
        },
      },
      MenuListProps: {
        disablePadding: true,
        sx: {
          '& .MuiMenuItem-root:hover': {
            backgroundColor: 'inherit',
            color: (theme) => theme.palette.primary.dark,
          },

          '& .MuiMenuItem-root.Mui-selected': {
            color: (theme) => theme.palette.primary.main,
            backgroundColor: (theme) => theme.palette.common.white,
          },
          '& .MuiMenuItem-root:hover.Mui-selected': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
  },

  styleOverrides: {
    select: {
      borderRadius: '8px',
      [`&.${outlinedInputClasses.notchedOutline}`]: {
        '&.Mui-focused fieldset': {
          borderColor: 'red',
        },
      },
    },
  },
};
