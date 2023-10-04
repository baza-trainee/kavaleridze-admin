import PassIcon from '@/components/Login/parts/PassIcon'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import { ChangeEvent, FC, MouseEventHandler, useState } from 'react'

interface InputWithLabelProps {
  label: string
  type: string
  placeholder?: string
  name: string
  value: string
  onChange: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  onChange,
  name,
  placeholder,
  type,
  value,
}) => {
  const [showPass, setShowPass] = useState(false)
  const isPassType = type === 'password'

  const managePassInput: MouseEventHandler = e => {
    e.preventDefault()
    setShowPass(!showPass)
  }

  return (
    <Box>
      {isPassType ? (
        <>
          <Typography variant="body1" fontWeight={600} marginBottom={1}>
            {label}
          </Typography>
          <TextField
            fullWidth
            autoComplete="off"
            placeholder={placeholder}
            type={showPass ? 'text' : 'password'}
            sx={{ '.MuiInputBase-root': { height: '52px' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PassIcon onClick={managePassInput} showPassword={showPass} />
                </InputAdornment>
              ),
            }}
            value={value}
            onChange={onChange(name)}
          />
        </>
      ) : (
        <>
          <Typography variant="body1" fontWeight={600} marginBottom={1}>
            {label}
          </Typography>
          <TextField
            fullWidth
            autoComplete="off"
            placeholder={placeholder}
            sx={{ '.MuiInputBase-root': { height: '52px' } }}
            value={value}
            onChange={onChange(name)}
          />
        </>
      )}
    </Box>
  )
}

export default InputWithLabel
