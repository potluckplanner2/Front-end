import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialPotluck = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    dishes: [],
    guests: []
}

export const MealForm = props => {
   const [meal, setMeal] = useState(initialPotluck);

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;

        setMeal({
            ...meal,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/potluck', meal)
            .then(res => {
                console.log('mealForm res', res);
                props.history.push(`/api/potlucks/${res.data.potluckID}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='title'
                onChange={handleChanges}
                placeholder='Title'
                value={props.title}
            />

            <input 
                type='text'
                name='date'
                onChange={handleChanges}
                placeholder='Date'
                value={props.date}
            />

            <input 
                type='textfield'
                name='description'
                onChange={handleChanges}
                placeholder='Summary'
                value={props.description}
            />
            <button>Submit!</button>
        </form>    

        // const items = potluck.items;
        // const guest = potluck.guests;
        // const title = potluck.title;
        // const description = potluck.description;
        // const date = potluck.date;

    );
    

};