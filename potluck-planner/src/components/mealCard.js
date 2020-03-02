import React from 'react';

const MealCard = ({potluck}) => {

    return (
        <div className='card'>
            <h3>{potluck.title}</h3>
            <h5>{potluck.date} at {potluck.time}</h5>
            <h4>Hosted at {potluck.location}</h4>
            <div className='card-description'>
                <p>{potluck.description}</p>
            </div>
            <div className='card-dishes'>
                {potluck.dishes}
            </div>
        </div>
    )
}

export default MealCard;