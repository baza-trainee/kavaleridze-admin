import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputLabel, Typography } from '@mui/material';

import { InputFormProps } from '@/types/events';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DateTime } from 'luxon';
import SvgSpriteIcon from '../../Common/SvgSprite';

const CalendarIcon = () => {
  return <SvgSpriteIcon iconId="calendar" />;
};

interface CalendarFieldProps extends InputFormProps {
  error: boolean;
  disabled?: boolean;
}

const CalendarField: FC<CalendarFieldProps> = ({
  control,
  label,
  name,
  error,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <InputLabel shrink={false} disabled={disabled}>
            {label}
            <Typography variant="body2" component="span" ml={1}>
              (не обовʼязково)
            </Typography>
          </InputLabel>
          <DesktopDatePicker
            sx={{
              width: '100%',
              fontVariantNumeric: 'lining-nums proportional-nums',
            }}
            format="dd/MM/yyyy"
            {...field}
            value={field.value ? DateTime.fromISO(field.value) : null}
            onChange={(date) => {
              field.onChange(date?.toISODate());
            }}
            slots={{
              openPickerIcon: CalendarIcon,
            }}
            disabled={disabled}
            slotProps={{
              textField: {
                error: error,
              },
              openPickerButton: {
                disableFocusRipple: true,
                disableTouchRipple: true,
                disableRipple: true,
                color: 'inherit',

                sx: {
                  marginRight: '3px',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                },
              },

              day: { sx: { fontSize: 16 } },
            }}
          />
        </>
      )}
    />
  );
};

export default CalendarField;
