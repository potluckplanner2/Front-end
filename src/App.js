import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Profile from './components/Profile';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Meal from './components/meal';
import { MealForm } from './components/mealForm';
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialPotluck = {
  title: '',
  date: '',
  description: '',
  items: ['hotdogs','cake'],
  guests: ['adam', 'adrian', 'aldair']
}

function App(props) {
  
  const handleSubmit = (meal) => {

    console.log('this is meal in app', meal);
    

    axiosWithAuth()
        .post('/api/potluck', meal)
        .then(res => {
            console.log('mealForm res', res);
            props.history.push('/Dashboard')
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/Profile' component={Profile}/>
        <PrivateRoute exact path='/Dashboard' component={Dashboard} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route path="/Potluck/:id" render={props => <Meal {...props}  />} />
      {/* /api/potluck/${meal.potluck.id} */}
      <PrivateRoute path="/Create" render={props => <MealForm {...props} initialPotluck={initialPotluck} handleSubmit={handleSubmit} />} />
      </Switch>
      
      
    </div>
  );
}

export default withRouter(App);
