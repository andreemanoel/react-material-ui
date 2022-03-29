import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  funcionarios: [],
  getFuncionario: {
    id: '',
    nome: '',
    data_nascimento: '',
    contato: {
      email: '',
      telefone: '',
    }
  },
}

export const funcionario = createSlice({
  name: 'funcionario',
  initialState,
  reducers: {
    setLoading(state, {payload}){
      state.loading = payload;
    },
    setFuncionarios(state, {payload}){
      state.funcionarios = payload;
    },
    setGetFuncionario(state, {payload}){
      state.getFuncionario = payload;
    },
    setId(state, {payload}){
      state.getFuncionario.id = payload;
    },
    setNome(state, {payload}){
      state.getFuncionario.nome = payload;
    },
    setDataNascimento(state, {payload}){
      state.getFuncionario.data_nascimento = payload;
    },
    setEmail(state, {payload}){
      state.getFuncionario.contato.email = payload;
    },
    setTelefone(state, {payload}){
      state.getFuncionario.contato.telefone = payload;
    },
    setReset(state){
      state.getFuncionario = initialState.getFuncionario;
    },
  }
});

export const {
  setLoading,
  setFuncionarios, 
  setGetFuncionario, 
  setId, 
  setNome, 
  setEmail, 
  setTelefone, 
  setDataNascimento,
  setReset
} = funcionario.actions;

export default funcionario.reducer;