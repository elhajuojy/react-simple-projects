import React from 'react';
import Nav from './Nav'
import Card from './Card'
import data from '../data'

const App = () => {

    // var Cards = data.data.map((item) => <Card item={item} />)
    var Cards = data.map(function (item) {
        console.log(item.imageUrl);
        return <Card item={item} />
    })

    return (
        <div>
            <Nav />
            <div className='container'>
                {Cards}
            </div>
        </div>
    );
};

export default App;