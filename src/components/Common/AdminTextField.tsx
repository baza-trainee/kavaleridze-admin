import { TextField, TextFieldProps, styled } from '@mui/material'

const AdminTextField = styled(TextField)<TextFieldProps>(({ theme, error }) => ({
  '.MuiOutlinedInput-root': {
    height: '52px',
    padding: '12px 16px',
    lineHeight: 1.5,

    fieldset: {
      border: '1px solid',
      borderColor: error ? theme.palette.error.main : theme.palette.common.black,
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  '.MuiOutlinedInput-input': {
    padding: 0,
  },
}))

export default AdminTextField
