import React, { useState, useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home'; 
import { Route, BrowserRouter, useLocation } from "react-router-dom";
import Profile from './pages/Profile/';
import { Swipe } from './pages/Swipe/';
import ProfileAdmin from './pages/ProfileAdmin/ProfileAdmin';
import { Rate } from './pages/Rate';
import { NavigationPage } from './pages/navigation';
import  WatchParty from './pages/WatchParty';
import { checkToken } from './utils';


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    checkToken(setUser);
  }, []);
  
  

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route exact path="/">
            <Home user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/profile">
            <Profile user={user}/>
            <NavigationPage/>
          </Route>
          <Route exact path="/profileadmin">
            <ProfileAdmin/>
            <NavigationPage/>
          </Route>
          <Route exact path="/swipe">
            <Swipe user={user} setUser={setUser}/>
            <NavigationPage/>
          </Route>
          <Route exact path="/rate">
            <Rate user={user} setUser={setUser}/>
            <NavigationPage/>
          </Route>
          <Route exact path="/watchParty">
            <WatchParty/>
            <NavigationPage/>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

 
export default App;
