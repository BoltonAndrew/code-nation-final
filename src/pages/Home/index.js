import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { addUser, login } from '../../utils';

export const Home = ({setUser}) => {
    const [loginBool, setLoginBool] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();
    const [email, setEmail] = useState();
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName) {
            const fetchObj = {email: email, password: pass};
            login(fetchObj, setUser);
        } else if (userName) {
            const fetchObj = {name: userName, password: pass, email: email, fName: fName, lName: lName};
            addUser(fetchObj, setUser)
        }
    }

    return(
        <div id='homepage'>
            <div id='navbar'>
                {!loginBool && !signUp && <><button onClick={() => setLoginBool(true)}>Login</button>
                <button onClick={() => setSignUp(true)}>Sign Up</button></>}
                {loginBool && <>
                    <form onSubmit={handleSubmit}>
                        <input id='emailInput' type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                        <input id='passwordInput' type='text' placeholder='Password' onChange={(event) => setPass(event.target.value)}/>
                        <button type='submit'>Login</button>
                    </form>
                </>}
                {signUp && <>
                    <form onSubmit={handleSubmit}>
                        <input id='emailInput' type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                        <input id='userNameInput' type='text' placeholder='Username' onChange={(event) => setUserName(event.target.value)}/>
                        <input id='fNameInput' type='text' placeholder='First Name' onChange={(event) => setFName(event.target.value)}/>
                        <input id='lNameInput' type='text' placeholder='Last Name' onChange={(event) => setLName(event.target.value)}/>
                        <input id='passwordInput' type='text' placeholder='Password' onChange={(event) => setPass(event.target.value)}/>
                        <button type='submit'>Sign-up</button>
                    </form>
                </>}
            </div>
            <div id='mainBody'>
                <h1 id='title'>Moo-V-Find</h1>
                <p id='introText'>Do you spend more time looking for a movie than actually watching one? 
                Sick of not being able to find a movie that everyone enjoys?
                Moo-V-Find will help you and your fellow movide watchers find a film that you'll all enjoy instead of spending hours choosing one.
                </p>
            </div>
        </div>
    )
}