import { IEventValues, IContactInfo } from '@/types/events';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_URL;
// console.log(BASE_URL);

export const instance = axios.create({
  baseURL: BASE_URL,
});

interface LoginResponse {
  roles: string[];
}

export const login = (username: string, password: string) => {
  return instance.post<LoginResponse>(
    '/admin/login',
    {},
    { auth: { username, password } }
  );
};

export const logout = () => {
  return instance.post('/admin/logout');
};

export const getContactInfo = () => {
  console.log('BASE-URL from environment', BASE_URL);
  console.log('axios base url', instance.getUri());

  return instance.get('/museum_data');
};

export const updateContactInfo = (data: IContactInfo) => {
  return instance.put('/admin/museum_data', data);
};

interface AddImageResponse {
  imageId: string;
}

export const addNewImage = (file: File | Blob) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  const formData = new FormData();
  formData.append('file', file);
  return instance.post<AddImageResponse>('/admin/images', formData, {
    headers,
  });
};

export const addEvent = (data: IEventValues) => {
  return instance.post('/admin/events', data);
};
