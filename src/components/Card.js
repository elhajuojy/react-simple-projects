import React from 'react';
import img from '../images/Rectangle 78.png'
import icomap from '../images/ico-map.svg'

const Card = (props) => {
    return (
        <div className='card-container'>
            <div className='card--img-container'>
                <img src={props.item.imageUrl} alt='' />
            </div>
            <div className='card--content--container'>
                <div className='card--header'>
                    <img src={icomap} alt='icon-map' />
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <b> {props.item.startDate} - {props.item.endDate} </b>
                <p>{props.item.description}</p>

            </div>
            <hr
                style={{
                    // color: color,
                    backgroundColor: 'red',
                    height: 1
                }}
            />
        </div>
    );
};

export default Card;