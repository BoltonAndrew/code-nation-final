import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

export const NavigationPage = () => {
    return(
    
    <div className="navbar">
        <div id='navContainer'>
            <div >
                <Link id='topButton' to='/watchParty'></Link>
            </div>
            <div id='LinkContainer'>
                <div className='doubleLinkContainer'>
                    <Link className='swipeButton' to='/swipe'></Link>
                    <Link className='rateButton' to='/rate'></Link>
                </div>
                <div className='doubleLinkContainer'>
                    <Link className='profileButton' to='/Profile'></Link>
                    <Link className='settingsButton' to='/profileadmin'></Link>
                </div>
            </div>
        </div>
    </div>
   

 )   
}
       

