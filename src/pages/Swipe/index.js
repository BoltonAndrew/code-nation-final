import React, { useState, useEffect } from 'react';
import { useSwipeable,  } from 'react-swipeable';
import user from '../../images/user.png';
import user2 from '../../images/user2.jpg';
import { Link, Redirect } from 'react-router-dom';
import cowLogo from '../../images/cowLogo.png';
import './index.css';
import { swipeFetch } from '../../utils'

export const Swipe = () => {
    const [movies, setMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);
    const [dislikedMovies, setDislikedMovies] = useState([]);

    useEffect(() => {
        swipeFetch(setMovies);
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => {
            //add to disliked movie state
            const dislikedMovieArr = dislikedMovies;
            dislikedMovieArr.push(movies[0]);
            setDislikedMovies(dislikedMovieArr);
            //remove movie from state
            const movieArr = [...movies];
            console.log(movieArr)
            movieArr.shift();
            console.log(movies)
            setMovies(movieArr);
        },
        onSwipedRight: (eventData) => {
            const likedMovieArr = [...likedMovies];
            likedMovieArr.push(movies[0]);
            setLikedMovies(likedMovieArr);
            console.log('swiperight')
            const movieArr = [...movies];
            movieArr.shift();
            setMovies(movieArr);
            console.log('changed image')
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true,
    })

    return(
        <div>
            {movies.length < 10 && <img id='cowLogo' src={cowLogo} alt='loading'/>}
            {movies.length === 10 && 
                <div className='swipePage' {...handlers}>
                    <img id='movieImage' src={movies[0]} alt='movie'  ></img>
                    {movies.length === 0 ? <Redirect to='/navigation'/> : null }
                </div>}
        </div>
    )
}