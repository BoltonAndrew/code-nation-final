import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../../components/MovieList';
import { findMovies } from '../../utils';
import styled from "styled-components";

const StyledContainer = styled.div`
    width:100%;
    height: 92vh;
    background-color: rgb(229,233,248);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    .suggestionsBox {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    button {
        margin: 10px 5px 2px 5px;
        padding: 5px;
        font-size: 0.9em;
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
    button:hover {
        background-color: rgba(106, 97, 171, 0.9);
    }
    button:active {
        background-color: rgba(106, 97, 171, 1);
    }
}
    
`

const StyledWatchers = styled.div`
* {
    margin: 0;
    padding: 0;
}
width: 100%;
height: 30vh;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

.friends {
    height: 45%;
    width: 95%;
    background-color: rgba(106, 97, 171, 0.1);
    margin: 5px;
    padding: 5px;
    flex-wrap: wrap;
    border-radius: 20px;
    overflow-y:auto;


    button {
        height: 2em;
        margin: 4px;
        padding: 4px;
        background-color: rgba(106, 97, 171, 0.7);
        border-radius: 10px;
        border: none;
    }
    button:hover {
        background-color: rgba(106, 97, 171, 0.9);
    }
    button:active {
        background-color: rgba(106, 97, 171, 1);
    }
}
.watchers {
    height: 35%;
    width: 95%;
    margin: 5px;
    padding: 5px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(106, 97, 171, 0.1);
    overflow-y:auto;


    p {
        height: 1.4em;
        margin: 4px;
        padding: 1px;
        background-color: rgba(106, 97, 171, 0.7);
        border-radius: 10px;
    }
    p:hover {
        background-color: rgba(106, 97, 171, 0.9);

    }

}

a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    padding: 5px;
    background-color: rgba(106, 97, 171, 0.5);
    border-radius: 10px;
}
a:hover {
    background-color: rgba(106, 97, 171, 0.7);
}
a:active {
    background-color: rgba(106, 97, 171, 1);

}
a:visited {
    text-decoration: none;
}
`

export const WatchParty = ({ user }) => {
    const [watchers, setWatchers] = useState([]);
    const [movieList, setMovieList] = useState({});

    const addWatcher = (e, index) => {
        e.preventDefault();
        let tempArr = [...watchers];
        if(!tempArr.includes(user.friends[index])) {
            tempArr.push(user.friends[index]);
        } 
        
        setWatchers(tempArr);
    };

    const suggestHandler = (e) => {
        e.preventDefault();
        findMovies(watchers, setMovieList);
    }

    return (

        <StyledContainer>
            <StyledWatchers>
                <h3>Choose a friend!</h3>
                <div className="friends">
                {user.friends[0] && user.friends.map((friend, index) => {
                    return(
                        <button key={index} onClick={(event) => addWatcher(event, index)} >{friend}</button>
                    )
                })}
                </div>
                <div className="watchers">
                {watchers[0] && watchers.map((watcher, index) => {
                    return(
                        <p key={index}>{watcher}</p>
                    )
                })}
                </div>
                <Link to='/addfriend'> Add Friends</Link>

            </StyledWatchers>
            <div className='suggestionsBox'>
                <button onClick={(event) => suggestHandler(event)}>Get Suggestions</button>
                {movieList.length > 0 && <MovieList movieList={movieList} user={user}/>}
            </div>
        </StyledContainer>
    )
}