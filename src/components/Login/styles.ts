import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { LinkProps } from 'react-router-dom'

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

export const ResetPasswordTitle = styled(Typography)<
  TypographyProps<ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>>
>(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: '1.125rem',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
    fontWeight: 500,
    lineHeight: 'normal',
    textDecoration: 'underline',
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
