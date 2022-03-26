import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setFuncionarios } from '../slice/funcionario.slice';

const fetchFuncionario = createAsyncThunk(
  'user/fetchUser',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/funcionario');
    dispatch(
      setFuncionarios(data),
    );
  },
);

export default fetchFuncionario;
