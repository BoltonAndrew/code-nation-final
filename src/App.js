import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home'; 
import { Route, BrowserRouter } from "react-router-dom";
import { Profile } from './pages/Profile/';
import { Swipe } from './pages/Swipe/';
import { ProfileAdmin } from './pages/ProfileAdmin/ProfileAdmin';
import { Rate } from './pages/Rate';
import { NavigationPage } from './pages/navigation';
import { WatchParty } from './pages/WatchParty';
import { checkToken } from './utils';
import './App.css';
import AddFriend from "./pages/AddFriend/AddFriend";


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
          <Route path="/profile">
            <Profile user={user}/>
            <NavigationPage/>
          </Route>
          <Route path="/profileadmin">
            <ProfileAdmin/>
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
          <Route path="/watchParty">
            <WatchParty/>
            <NavigationPage/>
          </Route>
          <Route path='/navigation'>
            <NavigationPage/>
          <Route exact path="/addFriend">
            <AddFriend user={user}/>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;