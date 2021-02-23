import React, { useState } from 'react';
import user from '../../images/user.png';
import user1 from '../../images/user2.jpg';

export const Rate = (userId) => {
    const [moviesList, setMoviesList] = useState([]);
    
    const clickHandler = (e, index) => {
        e.preventDefault();
        if (e.name === 'like') {
            let tempArr = [...moviesList]
            tempArr[index].userLikes.push(userId);
            setMoviesList(tempArr);
        } else if (e.name === 'dislike') {
            let tempArr = [...moviesList]
            tempArr[index].userLikes.push(userId);
            setMoviesList(tempArr);
        }
    }

    return(
        <div className='rateMoviesPage'>
            {moviesList.map((movie, index) => {
                return(
                    <div key={index}>
                    <img src={movie} alt='movie'/>
                    <button>Watched?</button>
                    <button name='like' onClick={(event) => clickHandler(event, index)}>👍</button>
                    <button>👎</button>
                    </div>
                )
            })}
        </div>
    )
}