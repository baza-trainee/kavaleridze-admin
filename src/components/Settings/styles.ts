import {
  Box,
  BoxProps,
  Divider,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material'
import { detectConflictingPaths } from 'next/dist/build/utils'

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
