import React from 'react';

export const MovieList = (movies) => {
    return(
        <div>
        {movies[0] ? movies.map((movie, index) => {
            return(
                <img key={index} src={process.env.REACT_APP_MDB_IMG + movie.poster_path} alt={movie.name}/>
            )
        }) : <h2>No suggestions found, try swiping more?</h2>}
        </div>
    )
}