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
        setUser({ userId: data.user._id, user: data.user.userName, fName: data.user.firstName, lName: data.user.lastName });
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
        setUser({ id: data.id, user: data.userName, fName: data.firstName, lName: data.lastName, friends: data.friends, acceptedMovies: data.acceptedMovies, rejectedMovies: data.rejectedMovies, watchedMovies: data.watchedMovies })
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
    setUser({ userId: data.savedUser._id, user: data.savedUser.userName, fName: data.savedUser.firstName, lName: data.savedUser.lastName });
    localStorage.setItem('MyToken', data.token);
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

