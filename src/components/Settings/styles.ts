import { Box, BoxProps, Divider, Stack, StackProps, styled } from '@mui/material'

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
