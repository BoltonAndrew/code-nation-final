import React, { Component } from 'react';
import user from '../images/user.png';


class Banner extends Component {
    state = {
        user: ''
    }
    
    
    render() {
        return (
            <section className="container-banner">

                <img id="profilepic" src={user}  width="170" height="170" alt="profilepic"/> 
                <h1> User Name </h1>

            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                type='text' 
                name='title' 
                style={{ flex: '10', padding: '5px'}}
                placeholder='New User' 
                value={this.state.user}
                onChange={(event) => {this.setState({user: event.target.value})}}

               />
                <input 
                type='submit' 
                value='submit' 
                className='btn'
                style={{flex: '1'}}
                /> 
               
            </form>
            </section>
            
            
        )
    }
}

export default Banner