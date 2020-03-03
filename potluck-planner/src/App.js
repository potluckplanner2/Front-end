import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/potlucks' component={Dashboard} />
        <Route exact path="/api/auth/register" component={Register} />
      </Switch>
      <Route path="/Register" component={Register}/>
      <Route path="/Login" component={Login}/>
    </div>
  );
}

export default App;
