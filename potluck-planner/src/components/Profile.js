import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import React, {useState, useEffect } from "react"
=======
import ProfileCard from './ProfileCard';
>>>>>>> e9f8f7cc00576def8bf35ebec5aa0af4576f44ba

function Profile() {
   const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(``)
        .then(res => {
            console.log('res:', res);
            setData(res);
        }) 
        .catch(err => {
            console.log('err:', err);
        })
    }, [])
    return(
        <div>
            <h1>Profile Component</h1>
            {data.map(item => {
                console.log(item);
                return(
                    <ProfileCard
                     firstName={item.firstName}
                     lastName={item.lastName}
                     username={item.username}
                     email={item.email}
                    />
                )
            })}
        </div>
    )
}

export default Profile;