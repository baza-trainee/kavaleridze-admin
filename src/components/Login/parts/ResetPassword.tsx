import Section from '@/components/Common/Section'
import { Button, Container, FormControl, Stack, Typography } from '@mui/material'
import { FC, FormEventHandler, MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminTextField from '../../Common/AdminTextField'
import { ContentBox, Description, FormBox } from '../styles'

const ResetPassword: FC = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const goToLoginPage: MouseEventHandler = e => {
    e.preventDefault()
    navigate('/login')
  }

  const onSubmit: FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault()
    if (value.length) navigate('/login/success-message')
  }

  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <Typography variant="h3" textAlign={'center'}>
            Вхід
          </Typography>
          <Description sx={{ maxWidth: '300px', marginTop: '16px' }}>
            Будь ласка, вкажіть Вашу електронну адресу для відновлення паролю
          </Description>
          <form onSubmit={onSubmit}>
            <FormBox>
              <FormControl fullWidth>
                <Typography variant="body1" fontWeight={600} marginBottom={1}>
                  Електронна адреса
                </Typography>
                <AdminTextField
                  placeholder="olenapetrova@gmail.com"
                  type="mail"
                  autoComplete="off"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </FormControl>
            </FormBox>
            <Stack spacing={2}>
              <Button variant="adminPrimaryBtn" fullWidth type="submit">
                Відновити пароль
              </Button>
              <Button variant="adminSecondaryBtn" fullWidth onClick={goToLoginPage}>
                Скасувати
              </Button>
            </Stack>
          </form>
        </ContentBox>
      </Container>
    </Section>
  )
}

export default ResetPassword
