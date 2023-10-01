import { Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import LoginFooter from './parts/LoginFooter'
import LoginHeader from './parts/LoginHeader'

const AuthLayout: FC = () => {
  return (
    <Stack minHeight={'100vh'}>
      <LoginHeader />
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}
      >
        <Outlet />
      </Stack>
      <LoginFooter />
    </Stack>
  )
}

export default AuthLayout
