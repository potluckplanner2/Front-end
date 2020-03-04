import React from 'react';
import axios from 'axios';
import React, {useState, useEffect } from "react"

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
            {data.map(item => {
                console.log(item);
                return(
                    <ProfileCard data={data}/>
                )
            })}
        </div>
    )
}

export default Profile;