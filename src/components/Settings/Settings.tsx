import { Box, Tab, Tabs } from '@mui/material'
import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react'

import PageTemplate from '../Common/PageTemplate'
import ChangeLogin from './parts/ChangeLogin'
import ChangePassword from './parts/ChangePassword'
import ModalWind from './parts/ModalWind'
import TabPanel from './parts/TabPanel'

import { CustomDivider } from './styles'

const Settings: FC = () => {
  const [value, setValue] = useState(0)
  // вираховую ширину компонента для правильного центрування модального вікна
  const [boxWidth, setBoxWidth] = useState<number | undefined>(0)
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  //оновлення ширини компонента
  const modalBox = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setBoxWidth(modalBox.current?.clientWidth)
  }, [boxWidth])

  return (
    <PageTemplate title="Налаштування">
      <Box ref={modalBox}>
        <Tabs value={value} onChange={handleChange}>
          <Tab disableRipple label="Змінити пароль" />
          <Tab disableRipple label="Змінити логін" />
        </Tabs>
        <CustomDivider />
        <TabPanel index={0} value={value}>
          <ChangePassword openModal={openModal} />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <ChangeLogin openModal={openModal} />
        </TabPanel>
        <ModalWind {...{ boxWidth, closeModal, open }} />
      </Box>
    </PageTemplate>
  )
}

export default Settings
