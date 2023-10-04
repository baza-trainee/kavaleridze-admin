import { Box, Button } from '@mui/material'
import { ChangeEvent, FC, FormEventHandler, useState } from 'react'
import { InputsBox } from '../styles'
import InputWithLabel from './InputWithLabel'

const ChangePassword: FC = () => {
  const [values, setValues] = useState({
    oldPass: '',
    newPass: '',
    repeatPass: '',
  })
  const { oldPass, newPass, repeatPass } = values

  const isValid = Object.values(values).every(el => el.length)

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [key]: event.target.value })
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Box component={'form'} onSubmit={onSubmit}>
      <InputsBox>
        <InputWithLabel
          label="Старий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          name="oldPass"
          value={oldPass}
          onChange={handleChange}
        />
        <InputWithLabel
          label="Новий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          name="newPass"
          value={newPass}
          onChange={handleChange}
        />
        <InputWithLabel
          label="Повторіть новий пароль"
          type="password"
          placeholder="Введіть Ваш пароль"
          name="repeatPass"
          value={repeatPass}
          onChange={handleChange}
        />
        <Button type="submit" variant="adminPrimaryBtn" disabled={!isValid}>
          Зберегти зміни
        </Button>
      </InputsBox>
    </Box>
  )
}

export default ChangePassword
