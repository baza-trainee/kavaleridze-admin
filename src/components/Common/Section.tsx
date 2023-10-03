import { Box, styled } from '@mui/material'

interface SectionProps {
  variant: 'light' | 'dark'
}

const Section = styled(Box)<SectionProps>(({ theme, variant }) => ({
  backgroundColor: variant === 'light' ? theme.palette.common.white : theme.palette.common.black,
  color: variant === 'light' ? theme.palette.common.black : theme.palette.common.white,
}))

export default Section
