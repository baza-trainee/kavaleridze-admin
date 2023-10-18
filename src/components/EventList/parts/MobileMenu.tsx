import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import SvgSpriteIcon from '@/components/Common/SvgSprite';
import { MobileMenuItem, MobilePopover, MobileItemButton } from './styles';

interface MobileMenuProps {
  onOpenDeleteModal: () => void;
  onEditEvent: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
  onOpenDeleteModal,
  onEditEvent,
}) => {
  const [mobileMenuEl, setMobileMenuEl] = useState<null | HTMLElement>(null);
  const openMobileMenu = Boolean(mobileMenuEl);

  const onOpenMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuEl(event.currentTarget);
  };

  const onCloseMobileMenu = () => {
    setMobileMenuEl(null);
  };

  return (
    <>
      <IconButton
        aria-describedby="mobile-menu"
        id="mobile-menu-open-button"
        color="inherit"
        sx={{ padding: 0 }}
        onClick={onOpenMobileMenu}
      >
        <SvgSpriteIcon iconId="menu-dots" />
      </IconButton>
      <MobilePopover
        id="mobile-menu"
        anchorEl={mobileMenuEl}
        open={openMobileMenu}
        onClose={onCloseMobileMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ sx: { padding: '24px 16px' } }}
      >
        <MobileMenuItem
          onClick={onCloseMobileMenu}
          disableRipple
          disableTouchRipple
        >
          <MobileItemButton
            startIcon={<SvgSpriteIcon iconId="edit" />}
            onClick={onEditEvent}
          >
            Редагувати подію
          </MobileItemButton>
        </MobileMenuItem>
        <MobileMenuItem
          onClick={onCloseMobileMenu}
          disableRipple
          disableTouchRipple
        >
          <MobileItemButton
            startIcon={<SvgSpriteIcon iconId="delete" />}
            sx={{ color: (theme) => theme.palette.error.main }}
            onClick={onOpenDeleteModal}
          >
            Видалити подію
          </MobileItemButton>
        </MobileMenuItem>
      </MobilePopover>
    </>
  );
};

export default MobileMenu;
