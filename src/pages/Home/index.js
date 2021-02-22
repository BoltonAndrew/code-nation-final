import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Home = () => {
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            const fetchObj = {name: userName, password: pass};
            // Call login fetch function from utils folder and send fetchObj as an argument //
            
        } else if (email) {
            const fetchObj = {name: userName, password: pass, email: email};
            // Call signup fetch function from utils folder and send fetchObj as an argument //
        }
    }

    return(
        <div id='homepage'>
            <div id='navbar'>
                {!login && !signUp && <><button onClick={() => setLogin(true)}>Login</button>
                <button onClick={() => setSignUp(true)}>Sign Up</button></>}
                {login && <>
                    <form onSubmit={handleSubmit}>
                        <input id='userNameInput' type='text' placeholder='Username' onChange={(event) => setUserName(event.target.value)}/>
                        <input id='passwordInput' type='text' placeholder='Password' onChange={(event) => setPass(event.target.value)}/>
                        <button type='submit'>Login</button>
                    </form>
                </>}
                {signUp && <>
                    <form onSubmit={handleSubmit}>
                        <input id='emailInput' type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                        <input id='userNameInput' type='text' placeholder='Username' onChange={(event) => setUserName(event.target.value)}/>
                        <input id='passwordInput' type='text' placeholder='Password' onChange={(event) => setPass(event.target.value)}/>
                        <button type='submit'>Login</button>
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