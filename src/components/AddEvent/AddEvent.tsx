import { FC } from 'react';
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
  };

  const onAddEventSubmit = async (data: IEventValues) => {
    const { data: responseData } = await addEvent(data);
    console.log(responseData);
  };

  return (
    <PageTemplate title="Додати подію">
      <EventForm
        onPublish={onAddEventSubmit}
        defaultValues={defaultValues}
        type="add"
      />
    </PageTemplate>
  );
};

export default AddEvent;
