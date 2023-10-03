import { FC } from 'react';
import { MenuItem, Box, Select, InputLabel } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import SvgSpriteIcon from '../Common/SvgSprite';
import { IEventValues } from '@/types/events';

enum TypeEvent {
  EXHIBITION = 'Виставка',
  TOUR = 'Екскурсія',
  PRESENTATION = 'Презентація',
  COMPETITION = 'Конкурс',
  LECTURE = 'Лекція',
  WORKSHOP = 'Майстер-клас',
  RECITAL = 'Творчій вечір',
  OTHER = 'Інше',
}

const typeEventArray = Object.values(TypeEvent);

interface SelectFormProps {
  label: string;
  control: Control<IEventValues>;
  required: boolean;
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
            displayEmpty
            fullWidth
            required
            renderValue={() =>
              field.value === '' ? (
                <Box
                  component="span"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Оберіть з переліку подій
                </Box>
              ) : (
                field.value
              )
            }
            IconComponent={(props) => (
              <SvgSpriteIcon {...props} iconId="select-arrow" />
            )}
          >
            {typeEventArray.map((item) => (
              <MenuItem
                key={item}
                value={item}
                disableRipple
                disableTouchRipple
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    />
  );
};

export default TypeSelect;
