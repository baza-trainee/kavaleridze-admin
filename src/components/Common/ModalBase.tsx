import { FC, PropsWithChildren } from 'react';
import { Dialog, Stack, IconButton } from '@mui/material';
import SvgSpriteIcon from './SvgSprite';

interface ModalBaseProps {
  open: boolean;
  onClose: () => void;
}

const ModalBase: FC<PropsWithChildren<ModalBaseProps>> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { maxWidth: '100%' } }}
    >
      <Stack gap={2} sx={{ width: { xs: 280, md: 440, lg: 500 } }}>
        <Stack padding={2} alignItems="flex-end">
          <IconButton sx={{ padding: 0, color: 'inherit' }} onClick={onClose}>
            <SvgSpriteIcon iconId="close" />
          </IconButton>
        </Stack>
        {children}
      </Stack>
    </Dialog>
  );
};

export default ModalBase;
