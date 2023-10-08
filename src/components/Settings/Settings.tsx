import { Tab, Tabs } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'

import PageTemplate from '../Common/PageTemplate'
import ChangeLogin from './parts/ChangeLogin'
import ChangePassword from './parts/ChangePassword'
import ModalWind from './parts/ModalWind'
import TabPanel from './parts/TabPanel'

import { ContentBox, CustomDivider } from './styles'

const Settings: FC = () => {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.stopPropagation()
    setValue(newValue)
  }

  return (
    <PageTemplate title="Налаштування">
      <Tabs value={value} onChange={handleChange}>
        <Tab disableRipple label="Змінити пароль" />
        <Tab disableRipple label="Змінити логін" />
      </Tabs>
      <CustomDivider />
      <ContentBox>
        <TabPanel index={0} value={value}>
          <ChangePassword openModal={openModal} />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <ChangeLogin openModal={openModal} />
        </TabPanel>
        <ModalWind {...{ closeModal, open }} />
      </ContentBox>
    </PageTemplate>
  )
}

export default Settings
