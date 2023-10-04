import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import SvgSprite from '../Common/SvgSprite';

interface ButtonWithIconProps extends ButtonProps {
  title: string;
  svgSpriteId: string;
  variant?: 'primary' | 'secondary' | 'text' | 'tertiary' | 'link';
  iconPlace?: 'startIcon' | 'endIcon';
  to?: string;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ title, svgSpriteId, iconPlace = 'endIcon', ...props }) => {
  const iconPLace = { [iconPlace]: <SvgSprite iconId={svgSpriteId} /> };
  return (
    <Button variant="primary" {...iconPLace} {...props}>
      {title}
    </Button>
  );
};

export default ButtonWithIcon;
