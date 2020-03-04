import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

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