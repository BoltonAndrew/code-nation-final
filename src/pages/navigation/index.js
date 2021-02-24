import React from 'react';
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom";

export const NavigationPage = () => {
    return(
    
    <div className="App">
      <div>
      <ul>
          <Link to='/'>&nbsp;Home&nbsp;</Link>
          <Link to='/Register'>&nbsp;Register&nbsp;</Link>
          <Link to='/Login'>&nbsp;Login&nbsp;</Link>
          <Link to='/Logout'>&nbsp;Logout&nbsp;</Link>
          <Link to='/Profile'>&nbsp;Profile&nbsp;</Link>
          <Link to='/Swipe'>&nbsp;Swipe&nbsp;</Link>
          <Link to='/watchParty'>&nbsp;Watch Party&nbsp;</Link>

          </ul>
      
     </div>
     </div>
   

 )   
}
       

