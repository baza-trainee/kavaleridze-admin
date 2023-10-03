import { Components, Theme } from '@mui/material/styles';

export const MuiSelect: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    MenuProps: {
      autoFocus: false,
      PaperProps: {
        sx: {
          marginTop: 1,
          border: '1px solid',
          borderColor: (theme) => theme.palette.primary.main,
          boxShadow:
            '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px 0px rgba(0, 0, 0, 0.03), 0px 10px 6px 0px rgba(0, 0, 0, 0.02), 0px 17px 7px 0px rgba(0, 0, 0, 0.01), 0px 27px 7px 0px rgba(0, 0, 0, 0.00)',
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
    },
    root: ({ theme }) => ({
      padding: 0,
      '& .MuiSelect-select[aria-expanded=true] ~ .MuiOutlinedInput-notchedOutline':
        {
          borderColor: theme.palette.primary.main,
        },
    }),
    outlined: {
      padding: '12px 16px',
    },

    icon: ({ theme }) => ({
      color: theme.palette.common.black,
      right: 16,
    }),
  },
};
