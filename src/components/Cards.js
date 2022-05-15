import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {

    let list = data.map((d, ind) => {
        return <Card key={ind} d={d} />
    })
    return (
        <div className='cards'>
            {list}
        </div>
    );
}

export default Cards;