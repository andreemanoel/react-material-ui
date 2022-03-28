import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setFuncionarios } from '../slice/funcionario.slice';

const fetchFuncionario = createAsyncThunk(
  'funcionario/fetchFunc',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/funcionario');
    
    if(data){
      dispatch(
        setFuncionarios(data),
      );
    }
  },
);

export const deleteFunc = createAsyncThunk(
  'funcionario/delete',
  async (id, { dispatch }) => {
    console.log(id);
    const { data } = await instance.delete(`/funcionario/${id}`);
  },
);

export const enviarFunc = createAsyncThunk(
  'funcionario/delete',
  async ({nome, email, telefone, data: data_nascimento}, { dispatch }) => {
    console.log(nome, email, telefone, data_nascimento);
    const { data } = await instance.post(`/funcionario`, {nome, email, telefone, data_nascimento, status: true});
  },
);
export default fetchFuncionario;
