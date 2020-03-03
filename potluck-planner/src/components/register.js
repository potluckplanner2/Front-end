import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 88%;
    display: flex;
    justify-content: center;
    border: 2px solid red;
`;

function Register({values, errors, touched, status}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('waddup', status);
        status && setData(data => [...data, status])
    }, [status])

    return(
        <FormContainer>
            <Form>
                <label>
                    First Name:
                    <Field
                     type="text"
                     id="firstName"
                     name="firstName"
                    />
                    {touched.firstName && ErrorMessage.name &&(
                        <p>{errors.firstName}</p>
                    )}
                </label>
                <label>
                    Last Name:
                    <Field
                     type="text"
                     id="lastName"
                     name="lastName"
                    />
                    {touched.lastName && ErrorMessage.name &&(
                        <p>{errors.lastName}</p>
                    )}
                </label>
                <label>
                    Username:
                    <Field
                     type="text"
                     id="username"
                     name="username"
                    />
                    {touched.username && ErrorMessage.name &&(
                        <p>{errors.username}</p>
                    )}
                </label>
                <label>
                    Email:
                    <Field
                     type="text"
                     id="email"
                     name="email"
                    />
                    {touched.email && ErrorMessage.name &&(
                        <p>{errors.email}</p>
                    )}
                </label>
                <label>
                    Password:
                    <Field
                     type="text"
                     id="password"
                     name="password"
                    />
                    {touched.password && ErrorMessage.name &&(
                        <p>{errors.password}</p>
                    )}
                </label>
                <label>
                    Confirm Password
                    <Field
                     type="text"
                     id="confirmPassword"
                     name="confirmPassword"
                    />
                    {touched.confirmPassword && ErrorMessage.name &&(
                        <p>{errors.confirmPassword}</p>
                    )}
                </label>
                <button type="submit">Register</button>
            </Form>
        </FormContainer>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ firstName, lastName, username, email, password, confirmPassword }){
        return {
            firstName: firstName || '', 
            lastName: lastName || '',
            username: username || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
        }
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        console.log('submitting', values);
        axios.post('/api/auth/register', values)
        .then(res => {
            console.log('response:', res)
            setStatus(res)
        })
        .catch(err => {
            console.log('woops...', err.response)
        })
    }
})(Register)
export default FormikForm; 