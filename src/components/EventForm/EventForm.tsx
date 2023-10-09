import { FC, FormEventHandler } from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Control } from 'react-hook-form';
import TypeSelect from './parts/TypeSelect';
import EventField from './parts/EventField';
import CalendarField from './parts/CalendarField';
import ImageField from './parts/ImageField';
import { IEventValues } from '@/types/events';

interface EventFormProps {
  control: Control<IEventValues>;
  onPublish: FormEventHandler<HTMLFormElement>;
  onCancel: () => void;
}

const EventForm: FC<EventFormProps> = ({ control, onPublish, onCancel }) => {
  return (
    <Box component="form" onSubmit={onPublish}>
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
          <TypeSelect
            label="Тип події"
            control={control}
            required={true}
            name="type"
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
            label="Додати фотографію події*"
            required={true}
            name="banner"
            placeholder="Введіть Ваш текст"
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Button
              sx={{ marginRight: 4, width: { xs: 288, md: 248 } }}
              type="submit"
            >
              Опублікувати
            </Button>
            <Button
              sx={{ width: { xs: 288, md: 248 } }}
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
