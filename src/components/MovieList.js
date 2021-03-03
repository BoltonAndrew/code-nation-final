import React, { useState, useEffect } from 'react';
import './css/main.css';

export const MovieList = ({movieList, user}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movieList.length > 0) {
            movieImageFinder()
        }
    }, [])

    const movieImageFinder = () => {
        let movieObj = []
        user.acceptedMovies.map((movie, index) => {
            if (movieList.includes(movie.title)) {
                movieObj.push(movie);
            }
        })
        setMovies(movieObj)
    }

    return(
        <div className="movieContainer">
            {movies.length > 0 && movies.map((movie, index) => {
            return(
                <img className='movie' key={index} src={process.env.REACT_APP_MDB_IMG + movie.poster_path} alt={movie.title}/>
            )
        })}
        {movies.length < 1 && <h3>No suggestions found, try swiping more?</h3>}
        </div>
    )
}