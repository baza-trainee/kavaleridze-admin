import SvgSpriteIcon from '@/components/Common/SvgSprite'
import { SvgIconProps } from '@mui/material'
import { FC } from 'react'

interface PassIconProps extends SvgIconProps {
  showPassword: boolean
}

const PassIcon: FC<PassIconProps> = ({ showPassword, ...props }) => {
  const currentIconId = showPassword ? 'eye-close' : 'eye-open'
  const { onClick } = props

  return <SvgSpriteIcon iconId={currentIconId} onClick={onClick} />
}

export default PassIcon
