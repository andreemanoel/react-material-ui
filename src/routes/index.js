import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MDialog from '../components/MDialog';
import NavBar from '../components/NavBar';
import Formulario from '../screens/Formulario';
import Funcionario from '../screens/Funcionario';
import { useAppDispatch } from '../store/hooks';
import fetchFuncionario from '../store/thunks/funcionario.thunk'
import Home from '../screens/Home';

const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFuncionario());
  });

  return (
    <>
      <Router >
        <NavBar>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/funcionarios' exact component={Funcionario} />
            <Route path='/adicionar' exact component={Formulario} />
            <Route path='/adicionar/:id' exact component={Formulario} />
          </Switch>
        </NavBar>
      </Router >
      <MDialog />
    </>
  );
}

export default Routes;
