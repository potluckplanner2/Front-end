import React, { useState, useEffect } from 'react';
import '../login.scss';
import styled from "styled-components"

import { axiosWithAuth } from '../utils/axiosWithAuth';

const MainDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;
align-items: center;
`
const Button1 = styled.button`
width: 15%;
border: 2px solid #FFF5D1;

`



export const MealForm = ({handleSubmit, initialPotluck}) => {
   const formPotluck = {...initialPotluck};
   console.log("formPotluck", formPotluck);

   if (formPotluck.items != null) {
       formPotluck.items = formPotluck.items.toString();
   }
   
   if (formPotluck.guests != null) {
       formPotluck.guests = formPotluck.guests.toString();
   }
   

   const [meal, setMeal] = useState(formPotluck);

    const handleChanges = e => {
        e.persist();
        let value = e.target.value;

        setMeal({
            ...meal,
            [e.target.name]: value
        });
    };

    const formSubmit = e => {
        e.preventDefault();
        

        if (meal.items != null) {
            meal.items = meal.items.split(',');
            meal.guests = meal.guests.split(',');
        }

        return (    
            handleSubmit(meal)
        );
        
    } ;
  
    console.log('meal', meal);
    return (
        
        <form onSubmit={formSubmit}>
            <MainDiv>
                <h1>Create a Potluck:</h1>
            <input className = "fieldcreate"
                type='text'
                name='title'
                onChange={handleChanges}
                placeholder='Title'
                value={meal.title}
            />


            <input className = "fieldcreate"
                type='text'
                name='date'
                onChange={handleChanges}
                placeholder='YYYY/MM/DD'
                value={meal.date}
            />

            <textarea className = "fieldcreate"
                type='text'
                name='description'
                onChange={handleChanges}
                placeholder='Description'
                value={meal.description}
            />

           {meal.items != null ? (
               <textarea 
                type='text'
                name='items'
                onChange={handleChanges}
                placeholder="Separate dishes with a ',' "
                value={meal.items}
            />) : (
                null
            )}

            {meal.guests != null ? (
                <textarea 
                type='text'
                name='guests'
                onChange={handleChanges}
                placeholder="Separate guests with a ',' "
                value={meal.guests}
            />) : (
                null
            )}
            
            <Button1>Submit!</Button1>
            </MainDiv>
        </form>   
         
    );
    

};