import React, { useState } from 'react';
import styled, { css } from "styled-components";
import ParticleEffectButton from 'react-particle-effect-button';


const baseFlex = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
`
const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledContainer = styled.div`
height: 92vh;
width: 100vw;
position: relative;
background-color: #E5E9F8;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding-top: 0px;
` 
const StyledTitle = styled.div`
height: 10%;
width: 80%;
border-radius: 25px;
background-color: #fff;
${baseFlex}
box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);
`
const StyledFriendsList = styled.div`
height:25%;
width: 80%;
border-radius: 25px;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y:auto;
box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);
p:first-child {
    font-weight:bold;
}
p{
    margin: 1px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 0;
    width:100%;
    text-align:center;
}
`
const StyledMovieList = styled.div`
height:35%;
width: 80%;
border-radius: 25px;
background-color: #fff;
${baseFlex}
overflow-y:auto;
box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);
display:flex;
flex-direction:column;
justify-content:  flex-start;
align-items: center;

p:first-child {
    font-weight:bold;
}
p{
    margin: 1px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 0;
    width:100%;
    text-align:center;
}
`
const StyledButtonWrapper = styled.div`
height:20%;
width: 100%;
position: fixed;
display: flex;
justify-content:space-between;
align-items:center;
bottom: 100px;
`
const StyledButton = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items:center;

button {
    padding: 4px;
    font-size: 0.7em;
    font-weight: bold;
    border-radius: 5px;
    color: #000;
    background-color: rgba(106, 97, 171, 0.5);
    box-shadow: none;
    border: none;
    padding: 25px;

}
button:hover {
    background-color: rgba(106, 97, 171, 0.7);
}
button:active {
    background-color: rgba(106, 97, 171, 1);
}
`


export const Profile = ({user}) => {
    const [userBtn, setUserBtn] = useState(false);
    const [movieBtn, setMovieBtn] = useState(false);
    console.log(user.acceptedMovies)
    const userClickHandler = () => {
        setUserBtn(true);
    };
    const movieClickHandler = () => {
        setMovieBtn(true);
    };
    
    return (
       <StyledWrapper>
        <StyledContainer>
            <StyledTitle>
                User Name<span style={{fontWeight:"bold"}}>{user.user}</span>
            </StyledTitle>
            <StyledFriendsList>
                <p>Friends</p>
                {user.friends.map((friend, i)=>{return <p key={i}>{friend}</p>})}
            </StyledFriendsList>
            <StyledMovieList>
                <p>Movies in Watch List</p>
                {user.acceptedMovies.map((m, i)=>{return <p key={i}>{m.original_title}</p> })}
            </StyledMovieList>

        </StyledContainer>
            <StyledButtonWrapper>  
                <StyledButton>
                    <ParticleEffectButton hidden={userBtn} color="rgb(106, 97, 171)" direction="right" >
                        <button onClick={userClickHandler}>UPDATE USER</button>
                    </ParticleEffectButton>
                </StyledButton>
                <StyledButton>
                    <ParticleEffectButton hidden={movieBtn} color="rgb(106, 97, 171)" >
                        <button onClick={movieClickHandler}>UPDATE MOVIES</button>
                    </ParticleEffectButton>
                </StyledButton>
            </StyledButtonWrapper>
        </StyledWrapper>
      );
};