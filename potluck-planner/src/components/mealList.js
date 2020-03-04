import React from 'react';
import { Link } from "react-router-dom";
import MealCard from './mealCard';

function MealList({potlucks}) {

    return (
        <div className='card-container'>
            {
                potlucks.map(potluck => (
                    <Link key={potluck.id} to={`/api/potlucks/${potluck.id}`}>
                        <MealCard potluck={potluck} />
                    </Link> 
                ))
            }
        </div>
    );
}

export default MealList;
