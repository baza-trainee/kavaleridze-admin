import { FC } from 'react';
import PageTemplate from '../Common/PageTemplate';
import EventForm from '../EventForm/EventForm';

const AddEvent: FC = () => {
  const defaultValues = {
    type: '',
    title: '',
    begin: '2023-10-17',
    shortDesc: '',
    description: '',
    image: '',
  };

  return (
    <PageTemplate title="Додати подію">
      <EventForm defaultValues={defaultValues} />
    </PageTemplate>
  );
};

export default AddEvent;
