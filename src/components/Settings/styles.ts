import {
  Box,
  BoxProps,
  Dialog,
  DialogProps,
  Divider,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'

export const CustomDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.gray.light,
}))

// ==== ChangePassword ====

export const InputsBox = styled(Stack)<StackProps>(({ theme }) => ({
  margin: '0px auto',
  [theme.breakpoints.up('xs')]: {
    paddingTop: '32px',
    width: '288px',
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '40px',
    width: '440px',
    rowGap: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '460px',
  },
}))

export const ErrorText = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.error.light,
  border: `1px solid ${theme.palette.error.main}`,
  borderRadius: '8px',
  padding: '8px 0',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    paddingRight: '35px',
    paddingLeft: '35px',
  },
  '&.MuiTypography-root': {
    lineHeight: 1.42,
  },
}))

export const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  '.MuiDialog-paper': {
    padding: '16px',
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    maxWidth: 'none',
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      width: '280px',
      height: '148px',
    },
    [theme.breakpoints.up('md')]: {
      width: '440px',
      height: '156px',
    },
  },
}))

export const ModalText = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'center',
  margin: 'auto auto',
  lineHeight: 1.43,
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}))
