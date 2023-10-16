import { Divider, Stack, Tab, Tabs, Typography } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'

import ChangeLogin from './parts/ChangeLogin'
import ChangePassword from './parts/ChangePassword'
import ModalWind from './parts/ModalWind'
import TabPanel from './parts/TabPanel'

import { ContentBox, CustomDivider, SettingsContainer, TabsContainer } from './styles'

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
    <Stack sx={{ width: '100%' }}>
      <SettingsContainer>
        <Typography variant="h3" component="h1">
          Налаштування
        </Typography>
      </SettingsContainer>

      <Divider flexItem />

      <TabsContainer>
        <Tabs value={value} onChange={handleChange}>
          <Tab disableRipple label="Змінити пароль" />
          <Tab disableRipple label="Змінити логін" />
        </Tabs>
      </TabsContainer>

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
    </Stack>
  )
}

export default Settings
