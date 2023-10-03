import Section from '@/components/Common/Section'
import { Button, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBox, ContentBox, Description } from '../styles'

const SuccessMessage: FC = () => {
  const navigate = useNavigate()
  return (
    <Section variant="light">
      <Container>
        <ContentBox
          sx={{
            width: {
              lg: '300px',
              md: '300px',
              sm: '289px',
              xs: '289px',
            },
          }}
        >
          <Typography variant="h3" textAlign={'center'}>
            Дякуємо!
          </Typography>
          <Description sx={{ marginTop: '16px' }}>
            На вашу пошту було відправлено лист з інструкцією для відновлення паролю.
          </Description>
          <ButtonBox>
            <Button fullWidth variant="adminPrimaryBtn" onClick={() => navigate('/login')}>
              Повернутись до входу
            </Button>
          </ButtonBox>
        </ContentBox>
      </Container>
    </Section>
  )
}

export default SuccessMessage
