import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../../components/MovieList';
import { findMovies } from '../../utils';
import styled from "styled-components";

const StyledContainer = styled.div`
    width:100%;
    height: 90vh;
    background-color:red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const StyledWatchers = styled.div`
* {
    margin: 0;
    padding: 0;
}
width: 100%;
height: 20vh;
background-color: yellow;
`

export const WatchParty = ({ user }) => {
    const [watchers, setWatchers] = useState([]);
    const [movieList, setMovieList] = useState({});

    const addWatcher = (e, index) => {
        e.preventDefault();
        let tempArr = [...watchers];
        tempArr.push(user.friends[index]);
        setWatchers(tempArr);
    };

    const suggestHandler = (e) => {
        e.preventDefault();
        findMovies(watchers, setMovieList);
    }

    return (

        <StyledContainer>
            <StyledWatchers>
                <h3>Who's Watching?</h3>

                {user.friends[0] && user.friends.map((friend, index) => {
                    return(
                        <button key={index} onClick={(event) => addWatcher(event, index)} >{friend}</button>
                    )
                })}

                {watchers[0] && watchers.map((watcher, index) => {
                    return(
                        <p key={index}>{watcher}</p>
                    )
                })}
                <Link to='/addfriend'>Add Friends</Link>

            </StyledWatchers>
            <div className='suggestionsBox'>
                <button onClick={(event) => suggestHandler(event)}>Get Suggestions</button>
                {movieList.length > 0 && <MovieList movieList={movieList} user={user}/>}
            </div>
        </StyledContainer>
    )
}