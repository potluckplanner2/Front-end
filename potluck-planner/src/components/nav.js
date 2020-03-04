import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    const signOut = () => {
        window.localStorage.removeItem('token');
    }

    return (
        <div className='navigation'>
            <Link to='/potlucks' className='title'>Potluck Planner</Link>
            <nav className='nav-links'>
                <Link className='nav-link' to='/api/auth/login'>Login</Link>
                <Link className='nav-link' to='/login' onClick={signOut}>Sign Out</Link>
                <Link className='nav-link' to='/api/potluck'>Create A Potluck</Link> 
            </nav>
        </div>
    )

};
