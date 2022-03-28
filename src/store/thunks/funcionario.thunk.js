import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setFuncionarios } from '../slice/funcionario.slice';

const fetchFuncionario = createAsyncThunk(
  'funcionario/fetchFunc',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/funcionario');
    dispatch(
      setFuncionarios(data),
    );
  },
);

export const deleteFunc = createAsyncThunk(
  'funcionario/delete',
  async (id, { dispatch }) => {
    console.log(id);
    const { data } = await instance.delete(`/funcionario/${id}`);
  },
);

export default fetchFuncionario;
