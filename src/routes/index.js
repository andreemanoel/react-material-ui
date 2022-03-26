import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DrawerNavigation from '../navigations/drawer';
import Formulario from '../screens/Formulario';
import Funcionario from '../screens/Funcionario';
import { useAppDispatch } from '../store/hooks';
import fetchFuncionario from '../store/thunks/funcionario.thunk';
// import Home from '../screens/Home';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function Routes() {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchFuncionario());
  });

  return (
      <Router >
        <NavBar>
          <Switch>
            <Route path='/funcionarios' exact component={Funcionario} />
            <Route path='/adicionar' component={Formulario} />
          </Switch>
        </NavBar>
      </Router >
  );
}

export default Routes;
