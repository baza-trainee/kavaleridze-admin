import { FC } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import TypeSelect from './TypeSelect';
import EventField from './EventField';
import CalendarField from './CalendarField';
import ImageField from './ImageField';
import { IEventValues } from '@/types/events';

interface EventFormProps {
  defaultValues: IEventValues;
}

const EventForm: FC<EventFormProps> = ({ defaultValues }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (data: IEventValues) => console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing="30px" rowSpacing={4}>
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
          <TypeSelect label="Тип події" control={control} required={true} />
        </Grid>
        <Grid item container columnSpacing="30px" rowSpacing={1}>
          <Grid item xs={12} lg={6}>
            <CalendarField
              control={control}
              label="Дата початку події"
              required={false}
              name="begin"
              placeholder="дд/мм/рррр"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CalendarField
              control={control}
              label="Дата закічення події"
              required={false}
              name="end"
              placeholder="дд/мм/рррр"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Дата початку повинна бути раніше за дату закінчення
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <EventField
            control={control}
            label="Короткий опис події"
            required={true}
            name="shortDesc"
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
            label="Додати фотографію події*"
            required={true}
            name="image"
            placeholder="Введіть Ваш текст"
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button disabled sx={{ marginRight: 4 }}>
            Опублікувати
          </Button>
          <Button disabled>Скасувати</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
