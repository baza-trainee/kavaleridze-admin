import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';
import spriteSvg from '@/assets/images/sprite.svg';
interface SvgSpriteIconProps extends SvgIconProps {
  svgSpriteId: string;
  fontSize?: 'small' | 'medium' | 'large';
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({ svgSpriteId, fontSize = 'small', ...props }) => {
  return (
    <SvgIcon fontSize={fontSize} {...props}>
      <use href={`${spriteSvg}#${svgSpriteId}`}></use>
    </SvgIcon>
  );
};

export default SvgSpriteIcon;
