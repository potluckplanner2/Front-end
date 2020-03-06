import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import '../../src/register.scss';

function Register({values, errors, touched, status}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(status);
        status && setData(data => [...data, status])
    }, [status])

    return(
        <div>
            <Form
             className="registerForm">
                 <h1>Get Started!</h1>
                
                <label htmlFor="username">
                    Username:
                    <Field className="field"
                     type="text"
                     id="username"
                     name="username"
                     placeholder="Username"
                    />
                    {touched.username && ErrorMessage.name &&(
                        <p>{errors.username}</p>
                    )}
                </label>
                <label htmlFor="password">
                    Password:
                    <Field className="field"
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Password"
                    />
                    {touched.password && ErrorMessage.name &&(
                        <p>{errors.password}</p>
                    )}
                </label>
                {/* <label htmlFor="email">
                    Email:
                    <Field className="field"
                     type="text"
                     id="email"
                     name="email"
                     placeholder="Email"
                    />
                    {touched.email && ErrorMessage.name &&(
                        <p>{errors.email}</p>
                    )}
                </label> */}
                {/* <label htmlFor="firstName">
                    First Name: 
                    <Field className="field"
                     type="text"
                     id="firstName"
                     name="firstName"
                     placeholder="First Name"
                    />
                    {touched.firstName && ErrorMessage.name &&(
                        <p>{errors.firstName}</p>
                    )}
                </label>
                <label htmlFor="lastName">
                    Last Name:
                    <Field className="field"
                     type="text"
                     id="lastName"
                     name="lastName"
                     placeholder="Last Name"
                    />
                    {touched.lastName && ErrorMessage.name &&(
                        <p>{errors.lastName}</p>
                    )}
                </label> */}
                <button type="submit">Register</button>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''

            // firstName: firstName || '', 
            // lastName: lastName || '',
            // email: email || '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('*'),
        password: Yup.string().required('*').min(6)

        // firstName: Yup.string().required('*'),
        // lastName: Yup.string().required('*'),
         // email: Yup.string().required('*'),
    }),
    handleSubmit(values, { setStatus }) {
        console.log('submitting', values);
        axiosWithAuth()
            .post('/api/auth/register', values)
            .then(res => {
                console.log('response:', res)
                setStatus(res)
                this.props.history.push('/Login');
            })
            .catch(err => {
                console.log('woops...', err.response)
            })
    }
})(Register)
export default withRouter(FormikForm); 