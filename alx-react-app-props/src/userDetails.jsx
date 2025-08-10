import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

function UserDetails() {
    const userData = useContext(UserContext);
    if (!userData) {
        return <p>No user data found.</p>;
    }
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;