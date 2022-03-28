import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialog: {
    visible: false,
    title: '',
    id: null
  }
}

export const application = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setDialog(state, {payload}){
      state.dialog = payload;
    },
  }
});

export const {setDialog} = application.actions;

export default application.reducer;