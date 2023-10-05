import { FC, useEffect } from 'react';
import PageTemplate from '../Common/PageTemplate';
import EventForm from '../EventForm/EventForm';
import { getContactInfo } from '@/api';

const AddEvent: FC = () => {
  const defaultValues = {
    type: '',
    title: '',
    begin: '2023-10-17',
    shortDesc: '',
    description: '',
    image: '',
  };

  useEffect(() => {
    const asyncRequest = async () => {
      const data = await getContactInfo();
      console.log('data in useEffect', data);
    };
    asyncRequest();
  }, []);

  return (
    <PageTemplate title="Додати подію">
      <EventForm defaultValues={defaultValues} />
    </PageTemplate>
  );
};

export default AddEvent;
