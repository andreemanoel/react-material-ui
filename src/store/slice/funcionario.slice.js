import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  funcionarios: []
}

export const funcionario = createSlice({
  name: 'funcionario',
  initialState,
  reducers: {
    setFuncionarios(state, {payload}){
      state.funcionarios = payload;
    },
  }
});

export const {setFuncionarios} = funcionario.actions;

export default funcionario.reducer;