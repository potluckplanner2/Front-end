import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth';

// pair programmed by Aldair Balanzar and Adrian Nasaruk

const MealCard = (props) => {
    // const [data, setData] = useState([]);

    // const {id} = useParams();
    // console.log(id);

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`https://potluck-planner2.herokuapp.com/api/potluck/${id}`)
    //     .then(res => {
    //         console.log('res:', res);
    //         setData(res);
    //     }) 
    //     .catch(err => {
    //         console.log('err:', err);
    //     })
    //     console.log(setData());
    // }, [id])


    
        
    return(
        <div className='card'>
            <h3>{props.title}</h3>
            <h5>{props.date} at </h5>
            <h4>{props.location}</h4>
            <div className='card-description'>
                <p>{props.description}</p>
            </div>
        </div>
    )
        
    
}

export default MealCard;