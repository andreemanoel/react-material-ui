import {configureStore} from '@reduxjs/toolkit';
import funcionario from './slice/funcionario.slice';
import application from './slice/application.slice';

export default configureStore({
  reducer: {
    funcionario,
    application
  }
})