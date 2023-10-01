import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

interface ButtonWithIconProps extends ButtonProps {
  title: string;
  svgSpriteId: string;
  variant?: 'primary' | 'secondary' | 'text' | 'tertiary';
  to?: string;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ title, svgSpriteId, ...props }) => {
  return (
    <Button variant="primary" endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} />} {...props}>
      {title}
    </Button>
  );
};

export default ButtonWithIcon;
