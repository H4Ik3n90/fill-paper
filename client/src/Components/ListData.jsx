import React, {useState} from 'react';
import Card from '../Components/Card';
import Searchbar from './Searchbar';

// import some svg 
import showBar from '../Images/listData/show_bar_single.svg';
import addNote from '../Images/noteEdit/add.svg';

const ListData = ({showList,setShowList}) => {

    return (
        <div className={`${showList === false ? "w-0" : "w-[28%]"} relative bg-blue-smooth duration-200 cursor-pointer`}>
            {/* list data title */}
            <h1 className={`pl-5 pt-3 text-[1.4em] ${showList === false ? "scale-x-0" : "delay-300"}`}><b>Notes</b></h1>  

            {/* search */}
            <Searchbar show={showList} />
            
            {/* header note container */}
            <div className='relative'>
                {/* amount of notes */}
                <p className={`text-sm pl-5 mt-8 ${showList === false ? "scale-x-0" : "delay-300"}`}>97 Notes</p>

                {/* add note button */}
                <img src={addNote} alt="add" className='absolute z-0 right-4 bottom-0' />
            </div>

            {/* list of notes */}
            <div className='mt-2'>
                <Card show={showList} />
            </div>

            {/* hide and show button */}
            <div onClick={setShowList} className={`duration-200 ${showList === true ? "bg-blue-smooth" : ""} absolute left-2 bottom-1 w-6 h-8 p-2 rounded`}>
                <img src={showBar} alt="show_bar" className={`${showList === true ? "rotate-180" : ""} duration-200 cursor-pointer`} />
            </div> 
        </div>
    );
}

export default ListData;
