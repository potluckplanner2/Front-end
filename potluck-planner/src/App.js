import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Register from './components/register'
import './App.css';
import Login from "./components/login"
import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute exact path='/potlucks' component={Dashboard} />
        <Route exact path="/api/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
