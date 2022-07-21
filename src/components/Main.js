import React from 'react';
import Card from './Card';
import imag1 from '../images/image 12.png'
import imag2 from '../images/mountain-bike 1.png'
import imag3 from '../images/wedding-photography 1.png'
const main = () => {
    return (
        <div className='main'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <div className='cards'>
                <Card img={imag1} content='Life lessons with Katie Zaferes' price='$136' star='5.0(6)' />
                <Card img={imag3} content='Learn wedding photography' price='$125' star='50(30)' />
                <Card img={imag2} content='Group Mountain Biking' price='$50' star='4.8(2)' />
            </div>
        </div>
    );
};

export default main;