import React from 'react';

function ProfileCard({firstName, lastName, username, email}) {
    return(
        <div>
            <h1>Profile</h1>
            <h2>{firstName} {lastName}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
        </div>
    )
}

export default ProfileCard;