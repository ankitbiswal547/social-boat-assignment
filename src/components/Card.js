import React from 'react';

const Card = ({ d }) => {

    return (
        <div className='card'>
            <video className='card-video' controls>
                <source src={d.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='card-heading'>{d.heading}</div>
            <div className='card-tags'>
                {d.tags.map((tag, ind) => {
                    return <div className='card-tag' key={ind} >{tag}</div>
                })}
            </div>
        </div>
    );
}

export default Card;