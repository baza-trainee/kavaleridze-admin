import { Box, BoxProps, Container, Tab, Tabs } from '@mui/material'
import { FC, ReactNode, SyntheticEvent, useState } from 'react'
import PageTemplate from '../Common/PageTemplate'

import ChangePassword from './parts/ChangePassword'
import { CustomDivider } from './styles'

interface TabPanelProps extends BoxProps {
  children?: ReactNode
  index: number
  value: number
}
const TabPanel: FC<TabPanelProps> = ({ index, value, children, ...props }) => {
  return <Box {...props}>{value === index && <Box>{children}</Box>}</Box>
}

const Settings: FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <PageTemplate title="Налаштування">
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab disableRipple label="Змінити пароль" />
          <Tab disableRipple label="Змінити логін" />
        </Tabs>
        <CustomDivider />
        <TabPanel index={0} value={value}>
          <ChangePassword />
        </TabPanel>
        <TabPanel index={1} value={value}></TabPanel>
      </Box>
    </PageTemplate>
  )
}

export default Settings
