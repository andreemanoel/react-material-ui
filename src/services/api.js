import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
  baseURL: 'http://18.231.99.99:3333/' //api rodando no servidor aws
  // baseURL: 'http://localhost:3333/' //api local
});

instance.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
