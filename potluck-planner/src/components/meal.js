import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import MealCard from './mealCard';
import {MealForm} from './mealForm';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import '../../src/meal.scss';

function Meal(props) {

    const [meal, setMeal] = useState(null);
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

    if(meal === null) {
        return(
            <p>meal loading...</p>
        )
    }

    let renderedComponent;
    if(isUpdating === true) {
        renderedComponent = <MealForm handleSubmit={handleUpdate} initialPotluck={meal.potluck} />;
    } else {
        renderedComponent = <MealCard {...meal.potluck} />
    }

    const renderedGuests = () => {
        if(meal.guests.length === 0) {
            return(
                <p>no guests have been added</p>
            )
        }else {
            // meal.guests.map(guest => {
            //     return( 
            //     <p>{guest.guest_name}</p>
            //     )
            // })

            const mapGuest = guest => {
                return( 
                <p>{guest.guest_name}</p>
                )
            }
           return meal.guests.map(mapGuest);
        }
    }
    return (
        <div className='edit-container'>
            <div className='rendered-component'>
                {renderedComponent}
            </div>
            <div className='guests-container'>
                {/* use an array method to display the guests here. Inspect the console.log above to get the path for the guests array */}
                {renderedGuests()}
            </div>
            <div className='items-container'>
                {/* use an array method to display the items here. Inspect the console.log above to get the path for the items array */}
            </div>
            
            <div className='buttons-container'>
                <div className='update-button-container'>
                    <button className='update-button' onClick={() => setIsUpdating(true)}>
                        Edit
                    </button>
                </div>
                <div className='delete-button-container'>
                    <button className='delete-button' onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
    
};

export default Meal;