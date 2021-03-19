import React, { useState, useEffect } from 'react';
import { Swipeable, direction } from 'react-deck-swiper';
import cowLogo from '../../images/cowLogo.png';
import { swipeFetch, updateUser } from '../../utils';
import styled from "styled-components";

const StyledContainer = styled.div`
height: 92vh;
background-color:rgb(229,233,248);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
#cowLogo {
    height: 15vh;
    animation: rotation 5s infinite linear;
    position: absolute;
    top: 40%;
    right: 40%;
}
.desktop-btn{
    width:100%;
    height:8vh;
    display: flex;
    justify-content:center;
    align-items:center;
    position:relative;
    button{
        padding: 0.8em 2em;
        margin: 20px;
        background: transparent;
        border:none;
        border-radius: 10px;
        img:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
        img:active{
            transform: scale(0.9);
        }
    }
    button:focus {
    border: none;
    outline: none;
}
@media(max-width:1024px){
    display:none;
}
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

#movieImage {
    margin-top:10px;
    width: 95vw;
    max-height: 92vh;
    border: 1px solid rgba(0,0,0, 0.2);
    border-radius: 5px;
    box-shadow: 15px 15px 10px  rgba(0,0,0, 0.4);
    @media(min-width: 768px) {
        width: 70vw;
        max-height: 70vh;
    }
    @media(min-width: 1440px) {
        width: 40vw;
        max-height: 60vh;
    }

}

.swipePage {
    
    display: flex;
    justify-content: center;
}
`

const StyledOverview = styled.div`
transform: ${({ overview }) => overview ? 'translateY(-100%)' : 'translateY(0)'};
transition: all 0.5s ease-in-out;
width: 95%;
height: 60%;
background-color:rgb(229,233,248);
position: absolute;
top: 600px;
border: 1px solid rgba(0,0,0, 0.2);
border-radius: 5px;
box-shadow: 2px 2px 10px  rgba(0,0,0, 0.4);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media(min-width: 768px) {
    width: 65%;
    height: 50%;
}
@media(min-width: 1440px) {
    width: 40%;
    height: 50%;
}
h2 {
    margin-top:10px;
    text-shadow: 1px 1px 5px  rgba(0,0,0, 0.2);
    border-bottom: 1px solid black;
}
.row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding: 0px 10px 0 10px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    transform: all 2s linear;
    p {
        font-size: 0.7em;
        margin-left: 10px;
    }
    #genre {
    }
}
.row:hover {
    box-shadow: 10px 10px 5px  rgba(0,0,0, 0.4);
    transform: translateY(-5px);
    background-color: rgba(120,114,182, 0.2);
}

`


export const Swipe = ({user, setUser}) => {
    const [movies, setMovies] = useState([]);
    const [overview, setOverview] = useState(false)

    useEffect(() => {
        if(movies < 1) {
            swipeFetch(setMovies, user);
        }
    }, [movies]);
    const left = () =>{
        const userObj = user;
        userObj.rejectedMovies.push(movies[0]);
        setUser(userObj);
        updateUser(user, setUser);
        const movieArr = [...movies];
        movieArr.shift();
        setMovies(movieArr);
    }
    const right = () =>{
        const userObj = user;
        userObj.acceptedMovies.push(movies[0]);
        setUser(userObj);
        updateUser(user, setUser);
        const movieArr = [...movies];
        movieArr.shift();
        setMovies([...movieArr]);
    }
    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            right();
        }

        if (swipeDirection === direction.LEFT) {
            left();
        }
    }
    let genres =  {
        "28" : "Action", "12" : "Adventure ", "16" : "Animation", "35" : "Comedy", "80" : "Crime", "99" : "Documentary", "18" : "Drama", "10751" : "Family", "14" : "Fantasy", "36" : "History", "27" : "Horror", "10402" : "Music", "9648" : "Mystery", "10749" : "Romance", "878" : "Science Fiction", "10770" : "TV Movie", "10752" : "War", "37" : "Western"
    }
    const handleClick = () => {
        setOverview(!overview)
    }

    return(
        <StyledContainer>
            <div className="desktop-btn">
                <button onClick={left}><img src="https://img.icons8.com/ios/50/000000/xbox-x.png"/></button>
                <button onClick={right}><img src="https://img.icons8.com/office/50/000000/like--v2.png"/></button>
            </div>

            {movies.length < 1 && <img id='cowLogo' src={cowLogo} alt='loading'/>}
            <Swipeable onSwipe={handleOnSwipe}>
                <div>
                    {movies.length >= 1 && 
                        <div className='swipePage'>
                            <img id='movieImage' src={process.env.REACT_APP_MDB_IMG + movies[0].poster_path} alt='movie'/>
                        </div>}
                </div>
            </Swipeable>
            {movies.length >= 1 && <StyledOverview onClick={handleClick} overview={overview}>
                <h2>OVERVIEW</h2>
                <div className="row">
                    <h5>Release Date: </h5>
                    <h5>{movies[0].release_date}</h5>
                </div>
                <div className="row">
                    <h5>Overview: </h5>
                    <p>{movies[0].overview}</p>
                </div>
                <div className="row">
                    <h5>Genre: </h5>
                    {movies[0].genre_ids.map((genre, i) => <p key= {i} id="genre">{genres[genre]}</p>)}
                </div>
                <div className="row">
                    <h5>Rating: </h5>
                    <h5>{movies[0].vote_average}</h5>
                </div>
                <div className="row">
                    <h5>Popularity: </h5>
                    <h5>{movies[0].popularity}</h5>
                </div>
            </StyledOverview>}

        </StyledContainer>
    )
}

