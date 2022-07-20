import React from 'react';
import star from '../images/Star 1.png'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card--image'><img src={props.img} alt='' /></div>
            <div className='card--description'>
                <img src={star} alt='star' className='card--icon--img' />
                <p><span>{props.star}</span>.USA</p>
            </div>
            <p>{props.content}
            </p>
            <p><b>From {props.price}/ </b> person </p>
        </div>
    );
};

export default Card;