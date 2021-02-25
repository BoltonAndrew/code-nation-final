import React, { Component } from 'react';
import AdminProfile from '../../components/AdminProfile';
import BannerAdminProfile from '../../components/BannerAdminProfile';
import { NavigationPage } from '../navigation';


   
const Profile = () => {
     
    return (
        <div>
            <AdminProfile />
            <br />
            <BannerAdminProfile/> 
            <br />
            <hr />
            <NavigationPage/>
        </div>
    )
}




export default Profile

