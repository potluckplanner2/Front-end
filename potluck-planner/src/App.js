import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Meal from './components/meal';


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/potlucks' component={Dashboard} />
        <Route exact path="/api/auth/register" component={Register} />
        <Route exact path="/api/login" component={Login} />
      </Switch>
      <Route path="/auth/register" component={Register}/>
      <Route path="/auth/login" component={Login}/>
      <Route path="/api/potlucks/:id" render={props => <Meal {...props} />} />
    </div>
  );
}

export default App;
