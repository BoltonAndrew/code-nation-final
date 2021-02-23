import React, { useState } from 'react';
import user from '../../images/user.png';
import user1 from '../../images/user2.jpg';

export const Rate = () => {
    const [moviesList, setMoviesList] = useState([]);
    
    const clickHandler = (e, index) => {
        e.preventDefault();
        if (e.name === 'like') {
            // call POST function that adds movie id to users like list //
        } else if (e.name === 'dislike') {
            // call POST function that adds movie id to users dislike list //
        } else if (e.name === 'watched') {
            // call POST functio that adds movie id to users watched list //
        }
    }

    return(
        <div className='rateMoviesPage'>
            {moviesList.map((movie, index) => {
                return(
                    <div key={index}>
                    <img src={movie} alt='movie'/>
                    <button name='watched' onClick={(event) => clickHandler(event, index)}>Watched?</button>
                    <button name='like' onClick={(event) => clickHandler(event, index)}>👍</button>
                    <button name='dislike' onClick={(event) => clickHandler(event, index)}>👎</button>
                    </div>
                )
            })}
        </div>
    )
}