import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';



export const MealForm = ({handleSubmit, initialPotluck}) => {
   const [meal, setMeal] = useState(initialPotluck);

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;

        setMeal({
            ...meal,
            [e.target.name]: value
        });
    };

    const formSubmit = e => {
        e.preventDefault();
        
        return (    
            handleSubmit(meal)
        );
        
    } ;
  
        // console.log('meal', meal);
    return (
        <form onSubmit={formSubmit}>
            <input 
                type='text'
                name='title'
                onChange={handleChanges}
                placeholder='Title'
                value={meal.title}
            />

            <input 
                type='date'
                name='date'
                onChange={handleChanges}
                placeholder='YYYY/MM/DD'
                value={meal.date}
            />

            <textarea 
                type='text'
                name='description'
                onChange={handleChanges}
                placeholder='Description'
                value={meal.description}
            />

            {/* <textarea 
                type='text'
                name='items'
                onChange={handleChanges}
                placeholder="Separate dishes with a ',' "
                value={meal.items}
            />

            <textarea 
                type='text'
                name='guests'
                onChange={handleChanges}
                placeholder="Separate guests with a ',' "
                value={meal.guests}
            /> */}
            <button>Submit!</button>
        </form>    

        // const items = potluck.items;
        // const guest = potluck.guests;
        // const title = potluck.title;
        // const description = potluck.description;
        // const date = potluck.date;

    );
    

};