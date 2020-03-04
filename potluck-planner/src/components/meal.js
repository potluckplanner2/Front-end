import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

import MealCard from './mealCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function Meal(props) {

    const [meal, setMeal] = useState(null);
    const match = useRouteMatch();

    const fetchMeal = id => {

        axiosWithAuth()
            .get(`/api/potlucks/${id} `)
            .then(res => setMeal(res.data))
            .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchMeal(match.params.id);
    }, [match.params.id]);

    const handleUpdate = e => {
        e.preventDefault();
        props.history.push(`/api/potluck/${meal.id}`);
      };
    
      const handleDelete = e => {
        e.preventDefault();
        axios
          .delete(`/api/potluck/${meal.id}`)
          .then(res=> {
            props.refreshMovies();
            props.history.push('/potlucks')
          })
          .catch(err => console.log(err))
    
    }

    return (
        <div className='edit-container'>
            <MealCard meal={meal} />
            <button className='update-button' onClick={handleUpdate}>
                Edit
            </button>
            <button className='delete-button' onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
    
}

export default Meal;