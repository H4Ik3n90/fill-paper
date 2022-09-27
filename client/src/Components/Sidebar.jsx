import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [hide,setShow] = useState(false);
    const urlPath = useLocation().pathname;
    let titleValue;

    if(urlPath === '/notes') {
        titleValue = 'FillPaper';
    } if(urlPath === '/add_note') {
        titleValue = 'Add';
    }if(urlPath === '/trash') {
        titleValue = 'Trash';
    }

    return (
        <div className={`h-screen ${hide ? "w-20" : "w-64"} bg-dk-blue duration-300 overflow-hidden`}>
            <div className='flex mt-4'>
                <img onClick={() => setShow(!hide)} src="/Images/fill_paper_logo.svg" alt="fill_paper_logo" className='ml-6 cursor-pointer'/>
                <h1 className={`text-white text-2xl mt-2 ml-8 duration-200`}>{titleValue}</h1>
            </div>
            <hr className='mr-2 ml-2 mt-2'/>
            <CurrentLink to="/notes" width={20} height={20} text="Notes" file="/Images/pencil.svg"/>
            <CurrentLink to="/trash" width={22} height={22} text="trash" file="/Images/trash.svg"/>
        </div>
    );
}

const CurrentLink = ({to,width,height,file,text}) => {
    const urlPath = useLocation().pathname;
    
    return(
        <Link to={to}>
            <div className={`${urlPath === to ? "bg-md-blue" : ""} flex mt-2 duration-200 hover:bg-lightblue ml-2 mr-2 rounded pt-2 pb-2 pl-5`}>
                <img src={file} alt="fill_paper_logo" width={width} height={height}/>
                <h1 className={`text-white text-xl ml-10 mr-2`}>{text}</h1>
            </div>
        </Link>
    );
};

export default Sidebar;