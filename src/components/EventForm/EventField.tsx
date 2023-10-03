import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputLabel, TextField, Typography } from '@mui/material';
import { InputFormProps } from '@/types/events';

const EventField: FC<InputFormProps> = ({
  control,
  label,
  name,
  required,
  maxLength,
  placeholder,
  row,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <InputLabel shrink={false} htmlFor={field.name} required={required}>
            {label}
            {!required && (
              <Typography variant="body2" component="span" ml={1}>
                (не обовʼязково)
              </Typography>
            )}
          </InputLabel>

          <TextField
            {...field}
            id={field.name}
            required={required}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: maxLength || 'auto' }}
            fullWidth
            placeholder={placeholder}
            multiline={!!row}
            rows={row}
          />
          {maxLength && (
            <Typography textAlign="end" variant="body2" mt={1}>
              {field.value.length}/{maxLength}
            </Typography>
          )}
        </>
      )}
    />
  );
};

export default EventField;
