import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import { addUser, login } from '../../utils';
import styled, { css } from "styled-components";
import { ThemeProvider } from 'styled-components';
import { ligthTheme, darkTheme, GlobalStyles } from '../../components/styleComp/theme';
import logo from '../../images/cowLogo.png';

 
const formStyle = css`
height: 100%;
width: 200px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
flex-flow: column nowrap;

position: fixed;
top:0;
right: 0;
padding: 10px;
background-color: rgb(229,233,248);
transition: all 0.5s ease-in-out;
z-index: 20;
input {
    margin-top: 10px;
    border-radius: 5px;
    border: none;
}
.form-btn {
    margin-top: 10px;
    padding: 10px;
    font-size: 0.7em;
    font-weight: bold;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #000;
    background-color: rgba(106, 97, 171, 0.5);
    box-shadow: none;
    border: none;
}
.login {
    margin-top: 10px;
    display: flex;
    align-items:center;
    font-size: 0.7em;
    p {
        margin: 0;
    }
    button {
        padding: 5px;
        font-size: 0.7em;
        font-weight: bold;
        border-radius: 5px;
        display: flex;
        justify-content:center;
        align-items: center;
        color: #000;
        background-color: rgba(106, 97, 171, 0.2);
        box-shadow: none;
        border: none;
    }
}
`
const StyledSign = styled.form`
${formStyle}
transform: ${({ signUp }) => signUp ? 'translateX(0)' : 'translateX(100%)'};
`
const StyledLogin = styled.form`
${formStyle}
transform: ${({ loginBool }) => loginBool ? 'translateX(0)' : 'translateX(100%)'};
`
const StyledNavbar = styled.div`
    height: 5vh;
    background-color: rgba(106, 97, 171, 0.2);
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    button {
        margin: 2px 5px 2px 5px;
        padding: 5px;
        font-size: 0.7em;
        font-weight: bold;
        border-radius: 5px;
        display: flex;
        justify-content:center;
        align-items: center;
        color: #000;
        background-color: rgba(106, 97, 171, 0.5);
        box-shadow: none;
        border: none;
    }
`

export const Home = ({user, setUser, setIsAuth}) => {
    const [loginBool, setLoginBool] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [theme, setTheme] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name === 'log') {
            const fetchObj = {email: email, password: pass};
            login(fetchObj, setUser, setIsAuth);
            setEmail('');
            setPass('');
        } else if (e.target.name === 'sign') {
            const fetchObj = {name: userName, password: pass, email: email, fName: fName, lName: lName};
            addUser(fetchObj, setUser, setIsAuth);
            setEmail('');
            setPass('');
            setFName('');
            setLName('');
        }
    }

    const themeToggler = () => {
        theme === false ? setTheme(true) : setTheme(false)
    }

    return(
        <ThemeProvider theme={theme === false ? ligthTheme : darkTheme}>
            <GlobalStyles />
        <div className='stuff'>
        <div id='homepage'>
            
            <StyledNavbar>
            <button onClick={() => themeToggler()}>Change Theme</button>

                <button onClick={() => setLoginBool(!loginBool) 
                }>Login</button>
                <button onClick={() => setSignUp(!signUp) }>Sign Up</button>
                <StyledLogin name='log' onSubmit={handleSubmit} loginBool={loginBool}>
                    <input id='emailInput' type='text' placeholder='Email' required value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input id='passwordInput' type='password' placeholder='Password' required value={pass}onChange={(event) => setPass(event.target.value)}/>
                    <button type='submit' className="form-btn">Login</button>
                    <div className="login"><p>Do you need an account?</p><button onClick={()=> {setSignUp(!signUp); setLoginBool(!loginBool);}}>Sign In</button></div>
                    <button onClick={()=> {setSignUp(false); setLoginBool(false);}}>Close</button>
                </StyledLogin>
                
                <StyledSign name='sign' onSubmit={handleSubmit} signUp={signUp} loginBool={loginBool}>
                    <input id='emailInput' type='text' placeholder='Email' required onChange={(event) => setEmail(event.target.value)}/>
                    <input id='userNameInput' type='text' placeholder='Username' required onChange={(event) => setUserName(event.target.value)}/>
                    <input id='fNameInput' type='text' placeholder='First Name' required onChange={(event) => setFName(event.target.value)}/>
                    <input id='lNameInput' type='text' placeholder='Last Name' required onChange={(event) => setLName(event.target.value)}/>
                    <input id='passwordInput' type='password' placeholder='Password' required onChange={(event) => setPass(event.target.value)}/>
                    <button type='submit' className="form-btn">Sign-up</button>
                    <div className="login"><p>Do you have account?</p><button onClick={()=> {setSignUp(!signUp); setLoginBool(!loginBool);}}>Login</button></div>
                    <button onClick={()=> {setSignUp(false); setLoginBool(false);}}>Close</button>

                </StyledSign>
                
            </StyledNavbar>
            <div id='mainBody'>
                <img className='logo' src={logo} alt='Cow Logo'/>
                <h1 data-text='Moo-V-find' id='title'>Moo-V-Find</h1>
                <p id='introText'>Do you spend more time looking for a movie than actually watching one? 
                Sick of not being able to find a movie that everyone enjoys?
                Moo-V-Find will help you and your fellow movie watchers find a film that you'll all enjoy instead of spending hours choosing one.
                </p>
                
            </div>
            {user.user && <Redirect to='/swipe'/>}
        </div>
        </div>
        </ThemeProvider>
    )
}