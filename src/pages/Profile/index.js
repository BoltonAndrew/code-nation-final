import React, { useState } from 'react';
import styled, { css } from "styled-components";
import ParticleEffectButton from 'react-particle-effect-button'


const baseFlex = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
`
const StyledContainer = styled.div`
height: 100vh;
width: 100%;
border-radius: 25px;
background-color: #E5E9F8;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding-top: 45px;
` 
const StyledTitle = styled.div`
height:10%;
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
height:25%;
width: 80%;
border-radius: 25px;
background-color: #fff;
${baseFlex}
overflow-y:auto;
box-shadow: 2px 2px 10px  rgba(0,0,0, 0.2);
padding-top:45px;
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
const StyledButtons = styled.div`
height:15%;
width: 80%;
display: flex;
justify-content:space-around;
align-items:center;
.styles_content__1Phom {
    box-shadow: 4px 4px 10px  black;
}
button {
    padding: 4px;
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
    padding: 25px;

}
button:hover {
    background-color: rgba(106, 97, 171, 0.7);
}
button:active {
    background-color: rgba(106, 97, 171, 1);
}
`
const Profile = ({user}) => {
    const [userBtn, setUserBtn] = useState(false)
    const [movieBtn, setMovieBtn] = useState(false)
    console.log(user)
     const userClickHandler = () => {
        setUserBtn(true)
     }
     const movieClickHandler = () => {
        setMovieBtn(true)
     }
    return (
        <StyledContainer>
            <StyledTitle>
                User Name<span style={{fontWeight:"bold"}}>{user.user}</span>
            </StyledTitle>
            <StyledFriendsList>
                <p>Friends</p>
                {user.friends.map((friend)=>{return <p>{friend}</p>})}
            </StyledFriendsList>
            <StyledMovieList>
                <p>Movies in Watch List</p>
                {user.acceptedMovies.map((m)=>{return <p>{m.original_title}</p> })}
            </StyledMovieList>
            <StyledButtons>
                <ParticleEffectButton hidden={userBtn} color="rgb(106, 97, 171)" direction="right" >
                    <button onClick={userClickHandler}>UPDATE USER</button>
                </ParticleEffectButton>
                <ParticleEffectButton hidden={movieBtn} color="rgb(106, 97, 171)" >
                    <button onClick={movieClickHandler}>UPDATE MOVIES</button>
                </ParticleEffectButton>
            </StyledButtons>
        </StyledContainer>
      )

}



export default Profile


