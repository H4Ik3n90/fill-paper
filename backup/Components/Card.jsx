import React from 'react';

const Card = ({title,note}) => {
    return (
        <div className='bg-white overflow-auto duration-300 border-2 cursor-pointer rounded hover:drop-shadow-lg p-4 h-56 w-60 overflow-hidden'>
            <div>
                {title}
            </div>
            <div>
                {note}
            </div>
        </div>
    );
}

export default Card;
