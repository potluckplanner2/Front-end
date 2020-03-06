import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import MealCard from './mealCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const MealList = () => {
    const [data, setData] = useState([]);

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/potlucks`)
        .then(res => {
            console.log('res:', res);
            setData(res.data);
        }) 
        .catch(err => {
            console.log('err:', err);
        })
        
    }, [id])

    return (
        <div className='card-container'>
            {
                data.map(potluck => (
                    <Link key={potluck.id} to={`/Potluck/${potluck.id}`}>
                        <MealCard {...potluck} />
                    </Link> 
                ))
            }
        </div>
    );
}

export default MealList;
