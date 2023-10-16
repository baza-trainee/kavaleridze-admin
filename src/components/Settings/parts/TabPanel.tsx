import { Box, BoxProps } from '@mui/material'
import { FC, ReactNode } from 'react'

interface TabPanelProps extends BoxProps {
  children?: ReactNode
  index: number
  value: number
}
const TabPanel: FC<TabPanelProps> = ({ index, value, children, ...props }) => {
  return <Box {...props}>{value === index && <Box>{children}</Box>}</Box>
}

export default TabPanel
