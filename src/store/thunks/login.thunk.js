import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import {setNomeUsuario, login} from '../../services/auth';
import { setAuthenticated } from '../slice/application.slice';

const loginWithPassword = createAsyncThunk(
  'user/login',
  async ({email, password}, { dispatch }) => {
    const { data } = await instance.post('/auth/login', {email, password});
    
    if(data){
      login(data.token);
      setNomeUsuario('andre');

      setAuthenticated(true);

      window.location.href = '/';
    }
    return;
  },
);
export default loginWithPassword;
