import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form } from 'formik';

const initialPotluck = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    dishes: [],
    guests: []
}

const MealForm = props => {
   const [meal, setMeal] = useState(initialPotluck);

    useEffect(() => {
        
    })

    return (
        <Form>
            <input 
                type='text'
                name='title'
                onChange={changeHandler}
                placeholder='Title'
                value={movie.title}
            />

            <input 
                type='text'
                name='date'
                onChange={changeHandler}
                placeholder='Date'
                value={movie.director}
            />


            <input 
                type='textfield'
                name='description'
                onChange={changeHandler}
                placeholder='Summary'
                value={movie.stars}
            />

        </Form>    

// const items = potluck.items;
// const guest = potluck.guests;
// const title = potluck.title;
// const description = potluck.description;
// const date = potluck.date;

    )
    

}