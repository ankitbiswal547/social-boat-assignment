import React from 'react';
import Card from './Card';

const Cards = ({ data, tags, indexObj }) => {
    let d = data.filter((d) => {
        let show = false;
        for (let i = 0; i < d.tags.length; i++) {
            if (tags[indexObj[d.tags[i]]].status === "active") {
                show = true;
                break;
            }
        }
        return show;
    })
    if (d.length == 0) d = data;
    let list = d.map((d, ind) => {
        return <Card key={ind} d={d} />
    })
    return (
        <div className='cards'>
            {list}
        </div>
    );
}

export default Cards;