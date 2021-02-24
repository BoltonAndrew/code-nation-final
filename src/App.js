import React from 'react';
import './App.css';
import { Home } from './pages/Home'; 
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom";
import Profile from './pages/Profile/';
import { Swipe } from './pages/Swipe/';
import ProfileAdmin from './pages/ProfileAdmin/ProfileAdmin';
import { Rate } from './pages/Rate';
import { NavigationPage } from './pages/navigation';
import  WatchParty from './pages/WatchParty';


 



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
      <ul>
          <Link to='/ProfileAdmin'>&nbsp;ProfileAdmin&nbsp;</Link>


          <Link to='/Rate'>&nbsp;Rate&nbsp;</Link>


        </ul>
      </div>

      <div>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/Profile">
              <Profile/>
            </Route>

            <Route exact path="/ProfileAdmin">
              <ProfileAdmin/>
            </Route>

            <Route exact path="/Swipe">
              <Swipe/>
            </Route>
            <Route exact path="/Rate">
              <Rate/>
            </Route>

            <Route exact path="/navigation">
              <NavigationPage/>
            </Route>

            <Route exact path="/watchParty">
              <WatchParty/>
            </Route>

            <Route exact path="/Register" />
            <Route path='/Login' />
            <Route path='/Logout' />
            
          </div>

    </div>
    </BrowserRouter>
  );
}

 
export default App;
