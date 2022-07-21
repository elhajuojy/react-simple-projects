import React from 'react';
import hero_image from '../images/Group 77.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={hero_image} alt='hero_image' className='hero--img' />
        </div>
    );
};

export default Hero;