import { FC, useMemo } from 'react';
import { Box, Grid, Typography, Button, Stack, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateTime } from 'luxon';
import TypeSelect from './parts/TypeSelect';
import EventField from './parts/EventField';
import CalendarField from './parts/CalendarField';
import ImageField from './parts/ImageField';
import { IEventValues } from '@/types/events';
import { validationSchemaEventForm } from './validation';

interface EventFormProps {
  defaultValues: IEventValues;
  onPublish: (data: IEventValues) => void;
  type: 'add' | 'edit';
}

const EventForm: FC<EventFormProps> = ({ defaultValues, onPublish, type }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<IEventValues>({
    values: defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(validationSchemaEventForm),
  });

  const begin = watch('begin');
  const end = watch('end');

  const onCancel = () => {
    if (type === 'add') {
      reset();
    } else {
      //logic in edit form
    }
  };

  const onSubmit = (data: IEventValues) => {
    onPublish(data);
    reset();
  };

  const requiredFieldsError = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    return Object.values(errors)
      .map((item) => item.message)
      .join(', ');
  }, [errors]);

  const dateError = useMemo(() => {
    if (begin && end) {
      return DateTime.fromISO(begin) >= DateTime.fromISO(end);
    }
    return false;
  }, [begin, end]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing="30px" rowSpacing={4}>
        {requiredFieldsError && (
          <Grid item xs={12}>
            <Alert variant="outlined" severity="error" icon={false}>
              Заповніть поля: {requiredFieldsError}
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <EventField
            control={control}
            label="Назва події"
            required={true}
            name="title"
            placeholder="Введіть назву події"
            maxLength={100}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TypeSelect
            label="Тип події"
            control={control}
            required={true}
            name="type"
            error={!!errors.type}
          />
        </Grid>
        <Grid item container columnSpacing="30px" rowSpacing={1}>
          <Grid item xs={12} lg={6}>
            <CalendarField
              control={control}
              label="Дата початку події"
              required={false}
              name="begin"
              placeholder="дд/мм/рррр"
              error={dateError}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CalendarField
              control={control}
              label="Дата закічення події"
              required={false}
              name="end"
              placeholder="дд/мм/рррр"
              error={dateError}
              disabled={!begin}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color={dateError ? 'error.main' : 'transparent'}
            >
              Дата початку повинна бути раніше за дату закінчення
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <EventField
            control={control}
            label="Короткий опис події"
            required={true}
            name="summary"
            placeholder="Введіть Ваш текст"
            row={3}
            maxLength={150}
          />
        </Grid>
        <Grid item xs={12}>
          <EventField
            control={control}
            label="Розгорнутий опис події"
            required={true}
            name="description"
            placeholder="Введіть Ваш текст"
            row={11}
            maxLength={2000}
          />
        </Grid>

        <Grid item xs={12}>
          <ImageField
            control={control}
            label="Додати зображення події*"
            required={true}
            name="banner"
            placeholder="Введіть Ваш текст"
            error={!!errors.banner}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 2, md: 3 }}
          >
            <Button sx={{ width: { xs: '100%', md: 248 } }} type="submit">
              Опублікувати
            </Button>
            <Button
              sx={{ width: { xs: '100%', md: 248 } }}
              variant="secondary"
              onClick={onCancel}
            >
              Скасувати
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
