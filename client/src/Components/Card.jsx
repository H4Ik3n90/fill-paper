import React, { useEffect } from 'react';

const Card = ({title,note,id}) => {
    const delData = () => {
        fetch(`http://localhost:3000/notes/${id}`, {
            method: "delete",
        })
        .then(() => {
            window.location.reload();
        });
    };

    return (
        <div className='relative bg-white overflow-auto duration-300 border-2 cursor-pointer rounded hover:drop-shadow-lg p-4 h-56 w-60 overflow-hidden'>
            <div>
                {title}
            </div>
            <div>
                {note}
            </div>
            <div className='absolute right-2 bottom-2' onClick={() => delData()}>
                <img src="/Images/delete.svg" alt="delete" width={16} height={16} />
            </div>
        </div>
    );
}

export default Card;
