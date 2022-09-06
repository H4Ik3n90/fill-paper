import React from 'react';

const Button = ({click}) => {
    return (
        <div onClick={click} className='z-0 absolute right-20 bottom-20 duration-300 hover:rotate-180 cursor-pointer bg-lightblue w-16 h-16 rounded-full'>
            <img src="/Images/plus.svg" alt="plus"/>
        </div>
    );
}

export default Button;
