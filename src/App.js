import React, { useState, useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home'; 
import { Route, BrowserRouter, Link } from "react-router-dom";
import Profile from './pages/Profile/';
import { Swipe } from './pages/Swipe/';
import ProfileAdmin from './pages/ProfileAdmin/ProfileAdmin';
import { Rate } from './pages/Rate';
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
      <ul>
          <Link to='/profile'>&nbsp;Profile&nbsp;</Link>
          <Link to='/swipe'>&nbsp;Swipe&nbsp;</Link>
          <Link to='/profileadmin'>&nbsp;Profile Admin&nbsp;</Link>
          <Link to='/rate'>&nbsp;Rate&nbsp;</Link>


        </ul>
      </div>

      <div>
            <Route exact path="/">
              <Home user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/profileadmin">
              <ProfileAdmin/>
            </Route>
            <Route exact path="/swipe">
              <Swipe user={user} setUser={setUser}/>
            </Route>
            <Route exact path="/rate">
              <Rate user={user} setUser={setUser}/>
            </Route>
          </div>

    </div>
    </BrowserRouter>
  );
}

 
export default App;
