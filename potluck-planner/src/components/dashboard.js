import React, { useState, useEffect } from 'react';


import {axiosWithAuth} from '../utils/axiosWithAuth';
import MealList from '../components/mealList';

const Dashboard = () => {

    const [ potlucks, setPotlucks ] = useState();

    useEffect(() => {
        axiosWithAuth()
            .get('/api/potlucks')
            .then(res => {
                console.log(res.data);
                setPotlucks(res.data);
            })
            .catch(err => {
                console.log('There was an error', err.response);
            })
    })

    return (
        <div className='dashboard'>
            <MealList potlucks={potlucks} setPotlucks={setPotlucks}/>
        </div>
        
        
    )
}

export default Dashboard;