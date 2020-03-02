import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute exact path='/potlucks' component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
};

export default App;
