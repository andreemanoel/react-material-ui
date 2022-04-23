import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
  baseURL: 'https://18.231.99.99:3333/'
});

instance.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
