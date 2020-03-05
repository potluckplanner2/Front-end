import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

import MealCard from './mealCard';
import {MealForm} from './mealForm';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function Meal(props) {

    const [meal, setMeal] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const match = useRouteMatch();

    const fetchMeal = id => {
        axiosWithAuth()
            .get(`/api/potluck/${id} `)
            .then(res => setMeal(res.data))
            .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchMeal(match.params.id);
    }, [match.params.id]);

    const handleUpdate = e => {
        e.preventDefault();
        props.history.push(`/api/potluck/${meal.potluck.id}`);
    };
    
    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/api/potluck/${meal.potluck.id}`)
            .then(res=> {
                props.history.push('/potlucks')
            })
            .catch(err => console.log(err))
    
    };
        console.log('Meal: inspect this to find the guests array and items array', meal);

    let renderedComponent;
    if(isUpdating === true) {
        renderedComponent = <MealForm handleSubmit={handleUpdate} initialPotluck={meal.potluck} />;
    } else {
        renderedComponent = <MealCard {...meal.potluck} />
    }

    return (
        <div className='edit-container'>
            {renderedComponent}
            <div className='guests-container'>
                {/* use an array method to display the guests here. Inspect the console.log above to get the path for the guests array */}
                 
            </div>
            <div className='items-container'>
                {/* use an array method to display the items here. Inspect the console.log above to get the path for the items array */}
            </div>
            <button className='update-button' onClick={() => setIsUpdating(true)}>
                Edit
            </button>
            <button className='delete-button' onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
    
}

export default Meal;