import { Control } from 'react-hook-form';

export interface IEventValues {
  title: string;
  type: string;
  begin?: string;
  end?: string;
  shortDesc: string;
  description: string;
  image: string;
}

export interface InputFormProps {
  name: string;
  label: string;
  control: Control<EventValues>;
  required: boolean;
  maxLength?: number;
  placeholder: string;
  row?: number | undefined;
}
