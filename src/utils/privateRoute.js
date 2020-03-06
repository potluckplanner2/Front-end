import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, render, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => 
                localStorage.getItem('token') ? (
                    Component ? (
                     <Component {...props}/>   
                    ) : (
                      render(props)  
                    )
                    
                ) : (
                    <Redirect to = '/Login'/>
                )
            } 
        />    
    )
}

export default PrivateRoute;