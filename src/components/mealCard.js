import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const MainDiv = styled.div`
  border: 5px solid #fff5d1;
  background-color: #ce6c47;
  width: 50%;
  margin: 10% auto;
  border-radius: 5px;
`;

const APH3 = styled.h3`
  font-family: "Lobster";
  font-size: 2.5rem;
  color: #fff5d1;
  text-decoration: underline #960200;
`;
const APH4 = styled.h4`
  font-family: "Kalam";
  font-size: 2rem;
  color: #ffd046;
  text-decoration: none;
`;
const APH5 = styled.h5`
  font-family: "Kalam";
  font-size: 2rem;
  color: #fff5d1;
  text-decoration: none;
`;
const APP = styled.p`
  font-family: "Kalam";
  font-size: 2rem;
  color: #fff5d1;
  text-decoration: none;
`;
// pair programmed by Aldair Balanzar and Adrian Nasaruk


const MealCard = props => {
 

  return (
    <MainDiv className="card">
      <APH3>{props.title}</APH3>
      <APH5>{props.date} at </APH5>
      <APH4>{props.location}</APH4>
      <div className="card-description">
        <APP>{props.description}</APP>
      </div>
    </MainDiv>
  );
};

export default MealCard;


