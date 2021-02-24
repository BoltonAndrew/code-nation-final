import React, { Component } from 'react';
import StarRating from '../../components/StarRating';

class WatchParty extends Component {
    state = {
        user: ''
    }
     render() {
        return (

            <div>
                <button>Suggested movie results</button>
                <StarRating />
            </div>
            
            )
        }

    }
     

export default WatchParty