import React, { useState } from 'react';
import  './css/main.css';
import Star from './Star';



const StarRating = () => {

    return (
        <div className='container'>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>

        </div>
    )
}




export default StarRating