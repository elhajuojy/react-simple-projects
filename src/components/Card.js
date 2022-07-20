import React from 'react';
import person from '../images/person.jpg'

const Card = () => {
    return (
        <div className='container'>
            <div className='card-img' >
                <img src={person} alt='person' />
            </div>
            <div className='card-content'>
                <h3>Laura Smith</h3>
                <h4>FrontEnd Developer</h4>
                <h5>laurasmith.website</h5>

            </div>
            <div className='btn-card'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
            <div className='card-content-about'>
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div><div className='card-content-Interests'>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer>
                <h3>twitter</h3>
                <h3>facebook</h3>
                <h3>instagram</h3>
                <h3>Github</h3>
            </footer>
        </div>
    );
};

export default Card;