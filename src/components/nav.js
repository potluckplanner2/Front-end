import React from "react";
import { Link } from "react-router-dom";
import '../../src/nav.scss';

export default function Nav() {

    const signOut = () => {
        window.localStorage.removeItem('token');
    }

    return (
        <div className='navigation'>
            <Link to='/Dashboard' className='title'>Potluck Planner</Link>
            <nav className='nav-links'>
                <Link className='nav-link' to='/Login'>Login</Link>
                <Link className='nav-link' to='/Login' onClick={signOut}>Sign Out</Link>
                <Link className='nav-link' to='/Create'>Create A Potluck</Link> 
                <Link className='nav-link' to='/Profile'>Profile</Link>
            </nav>
        </div>
    )
};
