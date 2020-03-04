import React from 'react';
import axios from "axios";
import styled from "styled-components";
import * as Yup  from "yup";
import { withFormik, Field, Form } from "formik"
import '../login.scss';


import {axiosWithAuth} from '../utils/axiosWithAuth';

const NewDiv = styled.div`
padding: 100px;
display: flex;
width: 300px;
margin: 0 auto;
margin-top: 100px;
flex-direction: column;
background: #960200;
color: #FFF5D1;
font-family: "Lobster";
border-radius: 4px;
border: 2px dotted white;
justify-content: center;
align-items: center;
`

const Div = styled.div`
display: flex;
font-size: 15px;
`

const TheBack = styled.div`
background: #241E4E;
`

const Label = styled.label`
display: flex;
flex-direction: column;
margin: 0;
`

const User = ({ values, errors, status, touched }) => {
    
    
    
return (
    
      <TheBack>
    <NewDiv className="login">
        <h2>LogIn</h2>
      <Form>

        <label>
            <Label>
          <Field className = "field"
            type="text"
            name="username"
            placeholder = "Username"
          />
          </Label>
          {touched.username && errors.username && (
            <Div className="errors">{errors.username}</Div>
          )} 
        </label>
      
        <label>
            <Label>
          <Field className = "field"
            type="password"
            name="password"
            placeholder = "Password"
          />
          </Label>          
          {touched.password && errors.password && (
            <Div className="errors">{errors.password}</Div>
          )} 
          
        </label>
        <br></br>
        <br></br>
        <button type = "submit">Submit</button>
        

      </Form>   
    
      </NewDiv>
     </TheBack>
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
      .required("You need a username"),
      password: Yup 
      .string()
      .required("You need a password")
      .min(6),
    }),

    handleSubmit(values, { resetForm, props}) {
        console.log("submitting", values);
        axios
          .post("https://potluck-planner2.herokuapp.com/api/auth/login", values)

          .then(res => {
            console.log("success", res);
            resetForm();
          })
          .catch(err => console.log(err.response));
      }
})(User)
export default Login;

