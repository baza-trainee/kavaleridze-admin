import { Box, BoxProps, Divider, Tab, Tabs } from '@mui/material'
import { FC, ReactNode, SyntheticEvent, useState } from 'react'
import PageTemplate from '../Common/PageTemplate'
import SvgSpriteIcon from '../Common/SvgSprite'

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
          <Tab sx={{ padding: 0 }} label="Змінити пароль" />
          <Tab sx={{ padding: 0 }} label="Змінити логін" />
        </Tabs>
        <Divider />
        <TabPanel index={0} value={value}>
          <SvgSpriteIcon iconId="eye-close" />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <SvgSpriteIcon iconId="eye-open" />
        </TabPanel>
      </Box>
    </PageTemplate>
  )
}

export default Settings
