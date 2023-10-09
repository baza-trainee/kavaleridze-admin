import { FC } from 'react';
import PageTemplate from '../Common/PageTemplate';
import EventForm from '../EventForm/EventForm';
import { IEventValues } from '@/types/events';
// import { addEvent } from '@/api';
import { useForm } from 'react-hook-form';

const AddEvent: FC = () => {
  const defaultValues: IEventValues = {
    type: '',
    title: '',
    begin: '',
    summary: '',
    description: '',
    banner: '',
  };

  const { control, handleSubmit, reset } = useForm<IEventValues>({
    values: defaultValues,
  });

  const onAddEventSubmit = async (data: IEventValues) => {
    // const event = await addEvent(data);
    console.log(data);
  };

  const onCancelClick = () => {
    reset();
  };

  return (
    <PageTemplate title="Додати подію">
      <EventForm
        onPublish={handleSubmit(onAddEventSubmit)}
        control={control}
        onCancel={onCancelClick}
      />
    </PageTemplate>
  );
};

export default AddEvent;
