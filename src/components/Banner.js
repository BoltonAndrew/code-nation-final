import React, { Component } from 'react';
import user from '../images/user.png';


class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                     <img id="profilepic" src={user}  width="170" height="170" alt="profilepic"/> 
                    <h1> User Name </h1>
                    
                    
            </section>
        )
    }
}

export default Banner