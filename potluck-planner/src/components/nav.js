import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    const signOut = () => {
        window.localStorage.removeItem('token');
    }

    return (
        <div className='navigation'>
            <Link to='/' className='title'>Potluck Planner</Link>
            <nav className='nav-links'>
                <Link className='nav-link' to='/api/login'>Login</Link>
                <Link className='nav-link' to='/api/login' onClick={signOut}>Sign Out</Link>

            </nav>
        </div>
    )

}