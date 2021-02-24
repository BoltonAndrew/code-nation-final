import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


export default function Star() {
    const [rating, setRating] = useState(null);
    const [click, setClick] = useState(false);
    return (
        <label>
                    <input 
                    type='radio'
                    name='rating'
                    onClick={() => setClick(true) } />
                <FaStar
                 className='star'
                 style={ !click ? { color:'grey'} : {color : 'gold'} }
                 size={100}/>
                </label> 
    )
}
