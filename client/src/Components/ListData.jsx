import React, {useState} from 'react';
import Card from '../Components/Card';

const ListData = () => {
    const [show,setShow] = useState(true);

    const showList = () => {
        setShow(!show);
    };

    return (
        <div className={`${show === false ? "w-0" : "w-[28%]"} bg-blue-smooth duration-200`}>
            <h1 className={`pl-5 pt-3 text-[1.4em] ${show === false ? "scale-x-0" : "delay-300"}`}><b>Notes</b></h1>  
            <p className={`text-sm ml-5 mt-8 ${show === false ? "scale-x-0" : "delay-300"}`}>97 Notes</p> 
            <div className='mt-2'>
                <Card show={show} />
            </div>
            <div onClick={() => showList()} className={`duration-200 bg-blue-smooth absolute bottom-0 w-6 h-8 p-2 rounded`}>
                <img src="/Images/show_bar_single.svg" alt="show_bar" className={`${show === false ? "rotate-180" : ""} duration-200 cursor-pointer`} />
            </div> 
        </div>
    );
}

export default ListData;
