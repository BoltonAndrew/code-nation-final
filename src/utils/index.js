export const login = async (userObj, setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userObj.email,
            password: userObj.password,
        }),

    });
    const data = await response.json();
    console.log(data);
    if (data.user.userName) {
        setUser({ userId: data.user._id, user: data.user.userName, fName: data.user.firstName, lName: data.user.lastName, friends: data.user.friends, acceptedMovies: data.user.acceptedMovies, rejectedMovies: data.user.rejectedMovies, watchedMovies: data.user.watchedMovies });
        localStorage.setItem('MyToken', data.token);
    } 
};

export const logout = async (setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/logout`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    await response.json();
    setUser('');
    localStorage.removeItem('MyToken')
};

export const checkToken = async (setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/myprofile`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    if (response.status === 401) {
        setUser('');
    } else {
        const data = await response.json();
        setUser({ id: data._id, user: data.userName, fName: data.firstName, lName: data.lastName, friends: data.friends, acceptedMovies: data.acceptedMovies, rejectedMovies: data.rejectedMovies, watchedMovies: data.watchedMovies })
    }
}

export const addUser = async (userObj, setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: userObj.name,
            firstName: userObj.fName,
            lastName: userObj.lName,
            email: userObj.email,
            password: userObj.password,
        }),
    });
    const data = await response.json();
    console.log(data);
    setUser({ userId: data.savedUser._id, user: data.savedUser.userName, fName: data.savedUser.firstName, lName: data.savedUser.lastName, friends: data.savedUser.friends, acceptedMovies: data.savedUser.acceptedMovies, rejectedMovies: data.savedUser.rejectedMovies, watchedMovies: data.savedUser.watchedMovies });
    localStorage.setItem('MyToken', data.token);
};

export const updateUser = async (userState, setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/myprofile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('MyToken')}`},
        body: JSON.stringify({
            userName: userState.user,
            firstName: userState.fName,
            lastName: userState.lName,
            email: userState.email,
            friends: userState.friends,
            acceptedMovies: userState.acceptedMovies,
            rejectedMovies: userState.rejectedMovies,
            watchedMovies: userState.watchedMovies,
        }),
    });
    const data = await response.json();
    console.log(data);
    setUser({ userId: data.updatedUser._id, user: data.updatedUser.userName, fName: data.updatedUser.firstName, lName: data.updatedUser.lastName , friends: data.updatedUser.friends, acceptedMovies: data.updatedUser.acceptedMovies, rejectedMovies: data.updatedUser.rejectedMovies, watchedMovies: data.updatedUser.watchedMovies});
};

export const deleteUser = async (setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/myprofile`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` },
    });
    await response.json();
    setUser('');
};

export const swipeFetch = async (setMovies, user) => {
    let movieArr = [];
    let userMovies;
    if (user.acceptedMovies) {
        userMovies = user.acceptedMovies.concat(user.watchedMovies, user.rejectedMovies)
    };
    while (movieArr.length < 10) {
        const pageNum = Math.floor(Math.random() * 57) + 1
        const ranNum = Math.floor(Math.random() * 20);
        const response = await fetch(`${process.env.REACT_APP_MDB_API}/3/discover/movie?${process.env.REACT_APP_MDB_KEY}&sort_by=popularity.desc&vote_average.gte=6&vote_count.gte=100&with_watch_providers=8&watch_region=GB&page=${pageNum}`)
        const data = await response.json();
        if (user.acceptedMovies) {
            if (!userMovies.includes(data.results[ranNum])) {
                movieArr.push(data.results[ranNum]);
            };
        } else {
            movieArr.push(data.results[ranNum]);
        }
    };
    setMovies(movieArr);
};

export const searchUsers = async (searchInput) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/finduser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('MyToken')}`},
        body: JSON.stringify({
            input: searchInput,
        }),
    });
    const data = await response.json();
    return data
};

export const findMovies = async (watchersArr, setMovieList) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('MyToken')}`},
        body: JSON.stringify({
            users: watchersArr,
        }),
    });
    const data = await response.json();

    setMovieList(data);
};