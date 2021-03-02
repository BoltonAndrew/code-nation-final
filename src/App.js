import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home'; 
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Profile } from './pages/Profile/';
import { Swipe } from './pages/Swipe/';
import { Rate } from './pages/Rate';
import { NavigationPage } from './pages/navigation';
import { WatchParty } from './pages/WatchParty';
import { checkToken } from './utils';
import AddFriend from "./pages/AddFriend/AddFriend"
import AdminProfile from "./pages/AdminProfile/AdminProfile"
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    checkToken(setUser, setIsAuth);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route exact path="/">
            <Home user={user} setUser={setUser} setIsAuth={setIsAuth}/>
          </Route>
          {isAuth ? <>
          <Route path="/profile">
            <Profile user={user}/>
            <NavigationPage/>
          </Route>
          <Route path="/swipe">
            <Swipe user={user} setUser={setUser}/>
            <NavigationPage/>
          </Route>
          <Route path="/rate">
            <Rate user={user} setUser={setUser}/>
            <NavigationPage/>
          </Route>
          <Route path="/watchparty">
            <WatchParty user={user}/>
            <NavigationPage/>
          </Route>
          <Route path="/addfriend">
            <AddFriend user={user} setUser={setUser}/>
            <NavigationPage/>
          </Route>
          <Route path="/settings">
            <AdminProfile user={user}/>
            <NavigationPage/>
          </Route> </> : <Redirect to='/'/>}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;