import Section from '@/components/Common/Section'
import { Container } from '@mui/material'
import { FC } from 'react'
import { FooterBox, FooterText } from '../styles'

const LoginFooter: FC = () => {
  return (
    <Section variant="dark">
      <FooterBox>
        <Container>
          <FooterText>Розробка Baza Trainee Ukraine 2023 © Всі права захищені</FooterText>
        </Container>
      </FooterBox>
    </Section>
  )
}

export default LoginFooter
