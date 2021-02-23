import React, { Component } from 'react';
// import user from '../images/user.png';
import user2 from '../images/user2.jpg';

class BannerAdminProfile extends Component {
    state = {
        user: ''
    }
    
    deleteProfile = () => {
        this.setState({ user: [...this.state.user.filter()]});
      }
    
    
    render() {
        return (
            <section className="container-banner">

                <img id="profilepic" src={user2}  width="170" height="170" alt="profilepic"/> 
                <h1> User Name </h1>

            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                type='text' 
                name='title' 
                style={{ flex: '10', padding: '5px'}}
                placeholder='Email' 
                value={this.state.user}
                onChange={(event) => {this.setState({user: event.target.value})}}

               />
                <input 
                type='submit' 
                value='submit' 
                className='btn'
                style={{flex: '1'}}
                /> 

                <input
                type='text' 
                name='title' 
                style={{ flex: '10', padding: '5px'}}
                placeholder='Username' 
                value={this.state.user}
                onChange={(event) => {this.setState({user: event.target.value})}}

               />
                <input 
                type='submit' 
                value='submit' 
                className='btn'
                style={{flex: '1'}}
                /> 
                
                <input
                type='text' 
                name='title' 
                style={{ flex: '10', padding: '5px'}}
                placeholder='Password' 
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
            <br/>
              <button onClick='insert fetch requests' style={btnStyle}>Delete Profile</button>
            </section>
            
            
        )
    }
}

const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
}

export default BannerAdminProfile