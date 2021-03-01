import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../../components/MovieList';
import { findMovies } from '../../utils';
import './index.css';

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
        <div className='watchParty'>
            <div className='whoBox'>
                <p>Who's Watching?</p>
                {user.friends[0] && user.friends.map((friend, index) => {
                    return(
                        <button key={index} onClick={(event) => addWatcher(event, index)} >{friend}</button>
                    )
                })}
                 <Link to='/addfriend'>Add Friends</Link>
                {watchers[0] && watchers.map((watcher, index) => {
                    return(
                        <p key={index}>{watcher}</p>
                    )
                })}
            </div>
            <div className='suggestionsBox'>
                <button onClick={(event) => suggestHandler(event)}>Get Suggestions</button>
                {movieList.length > 0 && <MovieList movieList={movieList} user={user}/>}
            </div>
        </div>
    )
}