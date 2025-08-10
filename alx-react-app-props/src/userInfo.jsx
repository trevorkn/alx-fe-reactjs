import React, { useContext } from 'react';
import UserContext from './context/userContext';

function UserInfo() {
    const userData = useContext(UserContext);

    if (!userData) {
        return <p>No answer found.</p>;
    }
    return(
        <div>
            <h2>{userData?.name}</h2>
            <p>{userData?.email}</p>
        </div>
    );
}

export default UserInfo;