import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

export const NavigationPage = () => {
    return(
    
    <div className="app">
        <div id='navContainer'>
            <div id='topButton'>
                <Link to='/watchParty'>&nbsp;Watch Party&nbsp;</Link>
            </div>
            <div id='LinkContainer'>
                <div className='doubleLinkContainer'>
                    <Link to='/swipe'>&nbsp;Swipe&nbsp;</Link>
                    <Link to='/rate'>&nbsp;Rate&nbsp;</Link>
                </div>
                <div className='doubleLinkContainer'>
                    <Link to='/Profile'>&nbsp;Profile&nbsp;</Link>
                    <Link to='/profileadmin'>&nbsp;Settings&nbsp;</Link>
                </div>
            </div>
        </div>
    </div>
   

 )   
}
       

