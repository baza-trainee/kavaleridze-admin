import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getContactInfo = () => {
  console.log('BASE-URL from environment', BASE_URL);
  console.log('axios base url', instance.getUri());

  return instance.get('/museum_data');
};
