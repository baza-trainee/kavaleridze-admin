import SvgSpriteIcon from '@/components/ButtonWithIcon/SvgSpriteIcon';
import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ButtonWithIconNavProps extends ButtonProps {
  title: string;
  svgSpriteId: string;
  variant?: 'primary' | 'secondary' | 'text' | 'tertiary'|'link';
  to?: string;
}

const ButtonWithIconNav: FC<ButtonWithIconNavProps> = ({ title, svgSpriteId, ...props }) => {
  return (
    <Button variant="link" sx={{margin:0}}   component={Link} startIcon={<SvgSpriteIcon sx={{margin:0}} svgSpriteId={svgSpriteId} />} {...props}>
      {title}
    </Button>
  );
};

export default ButtonWithIconNav;
