import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// pair programmed by Aldair Balanzar and Adrian Nasaruk

const MealCard = () => {
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
        data.map(item => {
            return(
                <div className='card'>
                    <h3>{item.title}</h3>
                    <h5>{item.date} at </h5>
                    {/* <h4>Hosted at {item.location}</h4> */}
                    <div className='card-description'>
                    <p>{item.description}</p>
                </div>
                    <div className='card-dishes'>
                    {item.items}
                 </div>
        </div>
            )
        })
    )
}

export default MealCard;