import { Box, Button } from '@mui/material'
import { ChangeEvent, FC, FormEventHandler, useState } from 'react'
import { ErrorText, InputsBox } from '../styles'
import InputWithLabel from './InputWithLabel'

const ChangePassword: FC = () => {
  const [error, setError] = useState(false)
  const [values, setValues] = useState({
    oldPass: '',
    newPass: '',
    repeatPass: '',
  })
  const { oldPass, newPass, repeatPass } = values

  interface InputsData {
    oldPass: string
    newPass: string
    repeatPass: string
  }
  const isValid = (inputsData: InputsData): boolean => {
    const areMatch = inputsData.newPass === inputsData.repeatPass
    return Object.values(values).every(el => el.length) && areMatch
  }

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [key]: event.target.value })
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log(values)
    setError(!isValid(values))
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
        <Button type="submit" variant="adminPrimaryBtn" disabled={!isValid(values)}>
          Зберегти зміни
        </Button>
        {error && <ErrorText>Паролі не співпадають. Спробуйте ще раз.</ErrorText>}
      </InputsBox>
    </Box>
  )
}

export default ChangePassword
