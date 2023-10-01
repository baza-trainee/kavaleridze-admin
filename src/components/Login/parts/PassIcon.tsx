import { Box, BoxProps } from '@mui/material'
import { FC } from 'react'

import hiddenIcon from '../../../assets/images/showPassIcom.svg'
import visibleIcon from '../../../assets/images/visiblePassIcon.svg'

interface PassIconProps extends BoxProps {
  showPassword: boolean
}

const PassIcon: FC<PassIconProps> = ({ showPassword, ...props }) => {
  const currentIcon = showPassword ? visibleIcon : hiddenIcon
  return (
    <Box component={'img'} alt="icon" src={currentIcon} sx={{ cursor: 'pointer' }} {...props} />
  )
}

export default PassIcon
