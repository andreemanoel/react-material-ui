import {configureStore} from '@reduxjs/toolkit';
import funcionario from './slice/funcionario.slice';

export default configureStore({
  reducer: {
    funcionario,
  }
})