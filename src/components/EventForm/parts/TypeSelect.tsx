import { FC } from 'react';
import { MenuItem, Box, Select, InputLabel } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import SvgSpriteIcon from '../../Common/SvgSprite';
import { IEventValues } from '@/types/events';
import { typeEventArray } from '@/assets/constants/eventType';

interface SelectFormProps {
  label: string;
  control: Control<IEventValues>;
  required: boolean;
  name: string;
}

const TypeSelect: FC<SelectFormProps> = ({ control, label, required }) => {
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => (
        <>
          <InputLabel shrink={false} htmlFor={field.name} required={required}>
            {label}
          </InputLabel>
          <Select
            {...field}
            variant="outlined"
            displayEmpty
            fullWidth
            required
            renderValue={() => {
              const valueForRender = typeEventArray.find(
                (item) => item[0] === field.value
              );
              return field.value === '' ? (
                <Box
                  component="span"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Оберіть з переліку подій
                </Box>
              ) : valueForRender ? (
                valueForRender[1]
              ) : (
                ''
              );
            }}
            IconComponent={(props) => (
              <SvgSpriteIcon {...props} iconId="select-arrow" />
            )}
          >
            {typeEventArray.map((item) => (
              <MenuItem
                key={item[0]}
                value={item[0]}
                disableRipple
                disableTouchRipple
              >
                {item[1]}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    />
  );
};

export default TypeSelect;
