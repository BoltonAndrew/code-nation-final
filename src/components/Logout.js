import React from 'react';
import { logout } from '../utils';

export const LogoutButton = ({setUser, setIsAuth}) => {
    return(
        <button onClick={(event) => logout(event, setUser, setIsAuth)}>Logout</button>
    )
}