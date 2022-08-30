import React, { useState } from 'react';
import { Link,Location, useLocation } from 'react-router-dom';

const [value,setValue] = "";

const Sidebar = () => {
    const [hide,setShow] = useState(false);
    let logoTitle;

    return (
        <div className={`h-screen ${hide ? "w-20" : "w-72"} duration-300 bg-darkblue overflow-hidden`}>
            <div className='flex mt-4'>
                <img onClick={() => setShow(!hide)} src="/Images/fill_paper_logo.svg" alt="fill_paper_logo" className='ml-6 cursor-pointer'/>
                <h1 className={`text-white text-2xl mt-2 ml-8`}>FillPaper</h1>
            </div>
            <hr className='mr-2 ml-2 mt-2'/>
            <CurrentLink to="/notes" width={22} height={22} text="Notes" file="/Images/pencil.svg"/>
            <CurrentLink to="/add_note" width={19} height={19} text="Add" file="/Images/add.svg"/>
            <CurrentLink to="/trash" width={22} height={22} text="trash" file="/Images/trash.svg"/>
        </div>
    );
}

const CurrentLink = ({to,width,height,file,text}) => {
    const urlPath = useLocation().pathname;
    
    return(
        <Link to={to}>
            <div className={`${urlPath === to ? "bg-lightblue" : ""} flex mt-2 duration-200 hover:bg-lightblue ml-2 mr-2 rounded pt-1 pb-1 pl-5`}>
                <img src={file} alt="fill_paper_logo" width={width} height={height}/>
                <h1 className={`text-white text-xl ml-10 mr-2`}>{text}</h1>
            </div>
        </Link>
    );
};

export default Sidebar;