import React from 'react';

function ProfileCard({data}) {
    return(
        <div>
            <h1>Profile</h1>
            <h2>{data.firstName} {data.lastName}</h2>
            <h3>{data.username}</h3>
            <h4>{data.email}</h4>
        </div>
    )
}

export default ProfileCard;