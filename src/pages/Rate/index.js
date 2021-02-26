import React from 'react';
import './index.css';
import { updateUser } from '../../utils';
import { NavigationPage } from '../navigation';

export const Rate = ({user, setUser}) => {
    
    const clickHandler = (e, index, movie) => {
        e.preventDefault();
        if (e.target.name === 'like') {
            let userObj = user;
            userObj.rejectedMovies.splice(index, 1);
            userObj.acceptedMovies.push(movie);
            setUser(userObj);
            updateUser(user, setUser)
            // call POST function that adds movie id to users like list //
        } else if (e.target.name === 'dislike') {
            let userObj = user;
            userObj.acceptedMovies.splice(index, 1);
            userObj.rejectedMovies.push(movie);
            setUser(userObj);
            updateUser(user, setUser)
            // call POST function that adds movie id to users dislike list //
        } else if (e.target.name === 'watched') {
            let userObj = user;
            userObj.watchedMovies.push(movie)
            setUser(userObj)
            updateUser(user, setUser)
            // call POST function that adds movie id to users watched list //
        }
    }
    return(
        <div className='rateMoviesPage'>
            <h2>Liked Movies</h2>
            {user.acceptedMovies.map((movie, index) => {
                return(
                    <div key={index}>
                    <img className='movieImage' src={process.env.REACT_APP_MDB_IMG + movie.poster_path} alt='movie'/>
                    <button name='watched' onClick={(event) => clickHandler(event, index, movie)}>Watched?</button>
                    <button name='dislike' onClick={(event) => clickHandler(event, index, movie)}>👎</button>
                    </div>
                )
            })}
            <h2>Disliked Movies</h2>
            {user.rejectedMovies.map((movie, index) => {
                return(
                    <div key={index}>
                    <img className='movieImage' src={process.env.REACT_APP_MDB_IMG + movie.poster_path} alt='movie'/>
                    <button name='watched' onClick={(event) => clickHandler(event, index, movie)}>Watched?</button>
                    <button name='like' onClick={(event) => clickHandler(event, index, movie)}>👍</button>
                    </div>
                )
            })}
            <div id='placeholder'></div>
        </div>
    )
}