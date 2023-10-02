import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';
import sprite from '@/assets/images/iconSprite.svg';

interface SvgSpriteIconProps extends SvgIconProps {
  iconId: string;
  fontSize?: 'small' | 'medium' | 'large';
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({
  iconId,
  fontSize = 'small',

  ...props
}) => {
  return (
    <SvgIcon fontSize={fontSize} {...props}>
      <use href={`${sprite}#${iconId}`}></use>
    </SvgIcon>
  );
};

export default SvgSpriteIcon;
