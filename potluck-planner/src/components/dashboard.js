import React, { useState, useEffect } from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';
import MealList from '../components/mealList';



const Dashboard = () => {

    const [ potlucks, setPotlucks ] = useState([]);

    useEffect(() => {
        // axiosWithAuth()
        //     .get('/api/potlucks')
        //     .then(res => {
        //         console.log(res.data);
        //         setPotlucks(res.data);
        //     })
        //     .catch(err => {
        //         console.log('There was an error', err.response);
        //     })
        const dummyData = [
            {
            title: "Jim's Birthday",
            date: "April, 1, 2020",
            time: '7:00 p.m.',
            location: '123 Main St. New York, NY 12345',
            description: "Jim is turning 30! Let's make his favorite foods!",
            dishes: ['Buffalo Wings', 'Cheeseburgers', 'Apple Pie', 'Beef Tacos', 'Chocolate Cake'],
            guests: ['adam4', 'jenny16', 'bob123', 'tony40', 'rachel36']
            }
        ]
    })

    return (
        <div className='dashboard'>
            <MealList potlucks={potlucks} setPotlucks={setPotlucks}/>
            <h1>Meal List will render!</h1>
        </div>
    )
}

export default Dashboard;
