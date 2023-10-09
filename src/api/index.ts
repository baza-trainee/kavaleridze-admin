import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: 'root',
    password: 'password',
  },
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
