import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Nav from './components/nav';
import PrivateRoute from './utils/privateRoute';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Meal from './components/meal';
import { MealForm } from './components/mealForm';
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {
  // const [mealList, setMealList] = useState([]);

  // const getMealList = () => {
  //   axiosWithAuth()
  //     .get('/api/potlucks')
  //     .then(res => console.log('this is res', res))
  //     .catch(err => console.log(err.response));
  // };

  // useEffect(() => {
  //   getMealList();
  // }, []);

  // console.log('mealList', mealList);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/potlucks' component={Dashboard} />
        <Route exact path="/api/auth/register" component={Register} />
        <Route exact path="/api/login" component={Login} />
      </Switch>
      <Route path="/api/auth/register" component={Register}/>
      <Route path="/api/auth/login" component={Login}/>
      <Route path="/api/potlucks/:id" render={props => <Meal {...props} />} />
      <Route path="/api/potluck" render={props => <MealForm {...props} />} />
    </div>
  );
}

export default App;
