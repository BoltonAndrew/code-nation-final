import React, { useState, useEffect } from 'react';
import { Swipeable, direction } from 'react-deck-swiper';
import { Redirect } from 'react-router-dom';
import cowLogo from '../../images/cowLogo.png';
import './index.css';
import { swipeFetch, updateUser } from '../../utils';

export const Swipe = ({user, setUser}) => {
    const [movies, setMovies] = useState([]);
    const [skipBool, setSkipBool] = useState(false);

    useEffect(() => {
        swipeFetch(setMovies, user);
    }, []);

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            const userObj = user;
            userObj.acceptedMovies.push(movies[0].title);
            setUser(userObj);
            updateUser(user, setUser);
            const movieArr = [...movies];
            movieArr.shift();
            setMovies([...movieArr]);
        }

        if (swipeDirection === direction.LEFT) {
            const userObj = user;
            userObj.rejectedMovies.push(movies[0].title);
            setUser(userObj);
            updateUser(user, setUser);
            const movieArr = [...movies];
            movieArr.shift();
            setMovies(movieArr);
        }
    }
    return(
        <div>
            <Swipeable onSwipe={handleOnSwipe}>
                {skipBool && <Redirect to='/rate'/>}
                <div>
                    {movies.length < 1 && <img id='cowLogo' src={cowLogo} alt='loading'/>}
                    {movies.length >= 1 && 
                        <div className='swipePage'>
                            <img id='movieImage' src={process.env.REACT_APP_MDB_IMG + movies[0].poster_path} alt='movie'/>
                        </div>}
                    <button onClick={() => {
                        setSkipBool(true);
                        }
                    }>
                    skip
                    </button>
                </div>
            </Swipeable>
        </div>
    )
}

