import { Box, Button } from '@mui/material'
import { ChangeEvent, FC, FormEventHandler, useState } from 'react'
import { ErrorText, InputsBox } from '../styles'
import InputWithLabel from './InputWithLabel'

interface ChangePasswordProps {
  openModal: () => void
}

const ChangePassword: FC<ChangePasswordProps> = ({ openModal }) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    oldPass: '',
    newPass: '',
    repeatPass: '',
  })
  const { oldPass, newPass, repeatPass } = data

  interface InputsData {
    oldPass: string
    newPass: string
    repeatPass: string
  }
  const isBtnDisabled = (inputsData: InputsData): boolean => {
    return Object.values(inputsData).every(el => el.length)
  }

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [key]: event.target.value })
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (data.newPass !== data.repeatPass) return setError(!error)
    console.log(data)
    openModal()
  }

  return (
    <Box component={'form'} onSubmit={onSubmit}>
      <InputsBox>
        <InputWithLabel
          label="Старий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          value={oldPass}
          onChange={handleChange('oldPass')}
          error={error}
          onClick={() => setError(false)}
        />
        <InputWithLabel
          label="Новий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          value={newPass}
          onChange={handleChange('newPass')}
          error={error}
          onClick={() => setError(false)}
        />
        <InputWithLabel
          label="Повторіть новий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          value={repeatPass}
          onChange={handleChange('repeatPass')}
          error={error}
          onClick={() => setError(false)}
        />
        <Button type="submit" variant="adminPrimaryBtn" disabled={!isBtnDisabled(data)}>
          Зберегти зміни
        </Button>
        {error && <ErrorText>Паролі не співпадають. Спробуйте ще раз.</ErrorText>}
      </InputsBox>
    </Box>
  )
}

export default ChangePassword
