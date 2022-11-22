import React, {useState} from 'react';

const Searchbar = ({show}) => {
    const [hideSearch,setHideSearch] = useState(false);

    const hideSearchLabel = (e) => {
        e.currentTarget.textContent.length === 0 ? setHideSearch(false) : setHideSearch(true);
    };

    return (
        <div className={`relative ml-5 mt-2 rounded ${show === false ? "scale-x-0" : "delay-300"}`}>
            <label className='absolute pl-3 pt-1 pb-1'>Search</label>
            <input onInput={(e) => hideSearchLabel(e)} type="text" className='pt-1 pb-1 pl-3 focus-within:outline-blue-md w-[80%]' />
        </div>
    );
}

export default Searchbar;
