import SvgSpriteIcon from '@/components/Common/SvgSprite'
import { IconButton } from '@mui/material'
import { FC } from 'react'
import { CustomDialog, ModalText } from '../styles'

interface ModalWindProps {
  boxWidth?: number | undefined
  closeModal: () => void
  open: boolean
}

const ModalWind: FC<ModalWindProps> = ({ boxWidth, closeModal, open }) => {
  return (
    <CustomDialog sx={{ width: boxWidth, marginLeft: 'auto' }} onClose={closeModal} open={open}>
      <IconButton
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <SvgSpriteIcon iconId="close" />
      </IconButton>
      <ModalText>Зміни збережено.</ModalText>
    </CustomDialog>
  )
}

export default ModalWind
