import { FC, useState } from 'react';
import { useTheme, useMediaQuery, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SvgSpriteIcon from '@/components/Common/SvgSprite';
import MobileMenu from './MobileMenu';
import ConfirmDelete from './ConfirmDelete';

interface TableItemActivityProps {
  id: string;
  title: string;
  onDeleteEventState: (id: string) => void;
}

const TableItemActivity: FC<TableItemActivityProps> = ({
  id,
  title,
  onDeleteEventState,
}) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const [confirmModal, setConfirmModal] = useState(false);

  const onOpenConfirmModal = () => {
    setConfirmModal(true);
  };

  const onCloseConfirmModal = () => {
    setConfirmModal(false);
  };

  const onDeleteItem = async () => {
    console.log(`delete item with id: ${id}`);
    await onDeleteEventState(id);
  };

  const onEditItem = () => {
    navigate(`/events/${id}`);
  };

  return (
    <>
      {isNotMobile ? (
        <>
          <IconButton
            color="inherit"
            sx={{ padding: 0, mr: { md: 3, lg: 5 } }}
            onClick={onEditItem}
          >
            <SvgSpriteIcon iconId="edit" />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ padding: 0 }}
            onClick={onOpenConfirmModal}
          >
            <SvgSpriteIcon iconId="delete" />
          </IconButton>
        </>
      ) : (
        <MobileMenu
          onOpenDeleteModal={onOpenConfirmModal}
          onEditEvent={onEditItem}
        />
      )}
      <ConfirmDelete
        open={confirmModal}
        onCloseModal={onCloseConfirmModal}
        onDeleteItem={onDeleteItem}
        title={title}
      />
    </>
  );
};

export default TableItemActivity;
