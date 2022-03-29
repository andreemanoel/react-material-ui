import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setFuncionarios, setGetFuncionario } from '../slice/funcionario.slice';
import moment from 'moment';

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

export const searchFuncionario = createAsyncThunk(
  'funcionario/fetchFunc',
  async (id, { dispatch }) => {
    try {
      const { data } = await instance.get(`/funcionario/${id}`);
      console.log('console',data);
      if(data){
        data.data_nascimento = moment(data.data_nascimento).format('YYYY-MM-DD')
        dispatch(
          setGetFuncionario(data)
        );
      }
    } catch (e) {
      console.log('erro', e.response)
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
  'funcionario/create',
  async ({nome, email, telefone, data_nascimento}, { dispatch }) => {
    console.log(nome, email, telefone, data_nascimento);
    const { data } = await instance.post(`/funcionario`, {nome, email, telefone, data_nascimento, status: true});
  },
);

export const updateFunc = createAsyncThunk(
  'funcionario/update',
  async ({id, nome, email, telefone, data_nascimento}, { dispatch }) => {
    console.log('UPDATE', id, nome, email, telefone, data_nascimento);
    const { data } = await instance.put(`/funcionario/${id}`, {nome, email, telefone, data_nascimento, status: true});
  },
);
export default fetchFuncionario;
