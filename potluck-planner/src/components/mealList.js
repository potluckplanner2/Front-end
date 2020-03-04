import React from 'react';

import MealCard from './mealCard';

const MealList = ({potlucks}) => {

    return (
        <div className='card-container'>
            {potlucks.map(potluck => (
                <MealCard key={potluck.id} potluck={potluck} />
            ))}
        </div>
    )
}

export default MealList;
