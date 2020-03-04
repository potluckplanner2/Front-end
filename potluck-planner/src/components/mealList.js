import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import MealCard from './mealCard';

const MealList = () => {
    const [data, setData] = useState([]);

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`https://potluck-planner2.herokuapp.com/api/potluck/${id}`)
        .then(res => {
            console.log('res:', res);
            setData(res);
        }) 
        .catch(err => {
            console.log('err:', err);
        })
        console.log(setData());
    }, [id])

    return (
        <div className='card-container'>
            {
                data.map(potluck => (
                    <Link key={potluck.id} to={`/api/potlucks/${potluck.id}`}>
                        <MealCard potluck={potluck} />
                    </Link> 
                ))
            }
        </div>
    );
}

export default MealList;
