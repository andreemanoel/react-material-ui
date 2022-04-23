import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MDialog from '../components/MDialog';
import NavBar from '../components/NavBar';
import Formulario from '../screens/Formulario';
import Funcionario from '../screens/Funcionario';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { isAuthenticated } from '../services/auth';
import RoutesPrivate from './routesPrivate';

const Routes = () => {
  return (
    <>
      <Router >
        <Switch>
          {!isAuthenticated() && 
            <Route path='/login' exact component={Login} />}
            <NavBar>
                <RoutesPrivate path='/' exact component={Home} />
                <RoutesPrivate path='/funcionarios' exact component={Funcionario} />
                <RoutesPrivate path='/adicionar' exact component={Formulario} />
                <RoutesPrivate path='/adicionar/:id' exact component={Formulario} />
            </NavBar>
        </Switch>
      </Router >
      <MDialog />
    </>
  );
}

export default Routes;
