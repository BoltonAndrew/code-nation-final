export const login = async (user, pass, setUser, setErrorMessage) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: user,
            password: pass,
        }),

    });
    const data = await response.json();
    if (data.name) {
        setUser({ userId: data.savedUser._id, user: data.savedUser.userName, fName: data.savedUser.firstName, lName: data.savedUser.lastName });
        localStorage.setItem('MyToken', data.token);
    } else {
        setErrorMessage('Incorrect details');
    };
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
        setUser({ id: data.id, user: data.userName, fName: data.firstName, lName: data.lastName, friends: data.friends, acceptedMovies: data.acceptedMovies, rejectedMovies: data.rejectedMovies, watchedMovies: data.watchedMovies })
    }
}

export const addUser = async (username, fName, lName, email, password, setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: username,
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser({ userId: data._id, user: data.userName, fName: data.firstName, lName: data.lastName });
    localStorage.setItem('MyToken', data.tokens.token);
};

export const updateUser = async (username, fName, lName, email, password, setUser) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/myprofile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Autorization': `Bearer ${localStorage.getItem('MyToken')}`},
        body: JSON.stringify({
            userName: username,
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    setUser({ userId: data._id, user: data.userName, fName: data.firstName, lName: data.lastName });
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
    const userMovies = user.acceptedMovies.concat(user.watchedMovies, user.rejectedMovies);
    while (movieArr.length < 10) {
        const pageNum = Math.floor(Math.random() * 100) + 1
        const ranNum = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`${process.env.REACT_APP_MDB_API}/3/discover/movie?${process.env.REACT_APP_MDB_KEY}&sort_by=popularity.desc&vote_average.gte=8&vote_count.gte=5000&watch_region=GB&page=${pageNum}`)
        const data = await response.json();
        if (!userMovies.includes(data.results[ranNum].id)) {
            movieArr.push(data[ranNum]);
        };
    };
    setMovies(movieArr);
};

