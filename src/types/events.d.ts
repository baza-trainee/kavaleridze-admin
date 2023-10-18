import { Control } from 'react-hook-form';

export interface IEventValues {
  title: string;
  type: string;
  begin?: string | null;
  end?: string | null;
  summary: string;
  description: string;
  banner: string;
}

export interface IEvent extends IEventValues {
  id: string;
}

interface IContactInfo {
  id?: string;
  phoneNumber: string;
  email: string;
  subwayRoute: string;
  funicularRoute: string;
  busRoute: string;
}

export interface InputFormProps {
  name: string;
  label: string;
  control: Control<EventValues>;
  required: boolean;
  maxLength?: number;
  placeholder: string;
}

export interface IImageState {
  id: string;
  url: string;
}
