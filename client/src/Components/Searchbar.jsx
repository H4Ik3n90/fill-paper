import React, {useState} from 'react';

const Searchbar = ({show}) => {
    return (
        <div className={`relative ml-5 mt-2 rounded ${show === false ? "scale-x-0" : "delay-300"}`}>
            <label className='absolute pl-3 pt-1 pb-1'>Search</label>
            <input type="text" className='pt-1 pb-1 pl-3 focus-within:outline-blue-md w-[80%]' />
        </div>
    );
}

export default Searchbar;
