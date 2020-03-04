import React from 'react';
import axios from "axios";
import styled from "styled-components";
import * as Yup  from "yup";
import { withFormik, Field, Form } from "formik"

import {axiosWithAuth} from '../utils/axiosWithAuth';

const NewDiv = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
background: #960200;
color: #FFF5D1;
border-radius: 4px;
border: 2px dotted white;
justify-content: center;
align-items: center;
`
const User = ({ values, errors, status, touched }) => {
    
    
    
return (
    
      <div>
    <NewDiv className="login">
        <h2>LogIn</h2>
      <Form>

        <label>
          <Field
            type="text"
            name="username"
            placeholder = "Username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )} 
        </label>
        <label>
          <Field
            type="password"
            name="password"
            placeholder = "Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )} 
        </label>
        <br></br>
        <input type = "submit"/>

      </Form>   
    
      </NewDiv>
     </div>
  );
}


const Login = withFormik({
  
    mapPropsToValues(props) {
     
      return {
        username: props.name || "",
        password: props.password || "",
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup 
      .string()
      .required("You need a username")
      .min(5),
      password: Yup 
      .string()
      .required("You need a password")
      .min(6),
    }),

    handleSubmit(values, { resetForm }) {
        console.log("submitting", values);
        axiosWithAuth()
          .post("/api/auth/login", values)
          .then(res => {
            console.log("success", res);
            resetForm();
          })
          .catch(err => console.log(err.response));
      }
})(User)
export default Login;

