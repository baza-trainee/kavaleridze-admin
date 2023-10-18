import { FC } from 'react';
import { Container } from '@mui/material';
import PageTemplate from '../Common/PageTemplate';
import EventForm from '../EventForm/EventForm';
import { IEventValues } from '@/types/events';
import { addEvent } from '@/api';

const AddEvent: FC = () => {
  const defaultValues: IEventValues = {
    type: '',
    title: '',
    summary: '',
    description: '',
    banner: '',
    begin: null,
    end: null,
  };

  const onAddEventSubmit = async (data: IEventValues) => {
    const { data: responseData } = await addEvent(data);
    console.log(responseData);
  };

  return (
    <PageTemplate title="Додати подію">
      <Container
        sx={{
          pt: { xs: 4, md: 4, lg: 5 },
          pb: { xs: '60px', md: 10, lg: 15 },
        }}
      >
        <EventForm
          onPublish={onAddEventSubmit}
          defaultValues={defaultValues}
          type="add"
        />
      </Container>
    </PageTemplate>
  );
};

export default AddEvent;
