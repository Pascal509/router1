import React from 'react'
import {useAuth} from "./UseAuth"
import { useNavigate } from 'react-router-dom';

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.LogOut()
        navigate('/')
    }

    return (
        <div>
        <h2>MY PROFILE PAGE</h2>
        <p>Welcome:{auth.user} </p>

        <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Profile;
