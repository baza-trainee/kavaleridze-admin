import { Box, Button } from '@mui/material'
import { ChangeEvent, FC, FormEventHandler, useState } from 'react'

import InputWithLabel from './InputWithLabel'
import { ErrorText, InputsBox } from '../styles'
import { validationSchema } from '../validationSchema/email'

interface ChangeLoginProps {
  openModal: () => void
}

const ChangeLogin: FC<ChangeLoginProps> = ({ openModal }) => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [data, setData] = useState({
    oldLogin: '',
    newLogin: '',
    repeatLogin: '',
  })
  const { oldLogin, newLogin, repeatLogin } = data

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [key]: event.target.value })
  }

  interface isBtnDisabled {
    oldLogin: string
    newLogin: string
    repeatLogin: string
  }
  const isBtnDisabled = (inputsData: isBtnDisabled): boolean => {
    return Object.values(inputsData).every(el => el.length)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    const isValid = await validationSchema.isValid(data)
    if (!isValid) {
      setErrorMsg('Логін може бути тільки електронною адресою!')
      return setError(!isValid)
    }
    if (data.newLogin !== data.repeatLogin) {
      setErrorMsg('Логіни не співпадають. Спробуйте ще раз.')
      return setError(true)
    }
    openModal()
    console.log(data)
  }
  return (
    <Box component={'form'} onSubmit={onSubmit} position={'relative'}>
      <InputsBox>
        <InputWithLabel
          label="Старий логін"
          type="text"
          placeholder="Введіть Ваш логін"
          value={oldLogin}
          onChange={handleChange('oldLogin')}
          error={error}
          onClick={() => setError(false)}
        />
      </InputsBox>
      <InputsBox>
        <InputWithLabel
          label="Новий логін"
          type="text"
          placeholder="Введіть Ваш логін"
          value={newLogin}
          onChange={handleChange('newLogin')}
          error={error}
          onClick={() => setError(false)}
        />
      </InputsBox>
      <InputsBox>
        <InputWithLabel
          label="Повторіть новий логін"
          type="text"
          placeholder="Введіть Ваш логін"
          value={repeatLogin}
          onChange={handleChange('repeatLogin')}
          error={error}
          onClick={() => setError(false)}
        />
        <Button type="submit" variant="adminPrimaryBtn" disabled={!isBtnDisabled(data)}>
          Зберегти зміни
        </Button>

        {error && <ErrorText>{errorMsg}</ErrorText>}
      </InputsBox>
    </Box>
  )
}

export default ChangeLogin
