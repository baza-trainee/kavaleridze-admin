import {
  Box,
  BoxProps,
  Dialog,
  DialogProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'

// =========  Header  =========

export const HeaderBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  textAlign: 'center',
  minWidth: '320px',
}))

export const HeaderLogoBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '32px 0 16px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '24px 0 8px 0',
  },
}))

// =========  Footer  =========

export const FooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  padding: '20px 0',
  minWidth: '320px',
}))

export const FooterText = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.gray.dark,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  fontWeight: 500,
  lineHeight: 'normal',
}))

// =========  Content  =========

export const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.up('xs')]: {
    padding: '60px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },

  width: '358px',
  [theme.breakpoints.only('md')]: {
    width: '332px',
  },
  [theme.breakpoints.down('md')]: {
    width: '288px',
  },
}))

// =========  Form  =========

export const FormBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '32px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '24px 0',
  },
}))

export const RecoveryPassTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: '1.125rem',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
    fontWeight: 500,
    lineHeight: 'normal',
    textDecoration: 'underline',
    cursor: 'pointer',
    width: 'fit-content',

    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}))

export const ButtonBox = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: '32px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '24px',
  },
}))

export const ErrorBox = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: '16px',
  padding: '8px',
  textAlign: 'center',
  border: `1px solid ${theme.palette.error.main}`,
  borderRadius: '8px',
  backgroundColor: theme.palette.error.light,
}))

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: '0px auto',
  '&.MuiTypography-root': {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
  },
}))

export const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  '.MuiDialog-paper': {
    padding: '16px',
    borderRadius: '8px',
    maxWidth: 'none',
    margin: 0,

    [theme.breakpoints.up('xs')]: {
      width: '280px',
      height: '168px',
    },
    [theme.breakpoints.up('md')]: {
      width: '400px',
      height: '184px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '440px',
      height: '184px',
    },
  },
}))

export const DialogText = styled(Typography)<TypographyProps>(({ theme }) => ({
  '.MuiTypography-root': {
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      lineHeight: 1.55,
    },
  },
  [theme.breakpoints.up('xs')]: {
    maxWidth: '196px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '268px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '284px',
  },
  margin: 'auto auto',
  textAlign: 'center',
}))
