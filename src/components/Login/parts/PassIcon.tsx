import SvgSpriteIcon from '@/components/Common/SvgSprite'
import { FC } from 'react'

interface PassIconProps {
  showPassword: boolean
}

const PassIcon: FC<PassIconProps> = ({ showPassword, ...props }) => {
  const currentIconId = showPassword ? 'eye-close' : 'eye-open'

  return <SvgSpriteIcon iconId={currentIconId} {...props} />
}

export default PassIcon
