import React, { useState } from 'react';
import Logo from '../Images/fill_paper_logo.svg';
import Pencil from '../Images/pencil.svg';
import Add from '../Images/add.svg';
import Trash from '../Images/trash.svg';

const Sidebar = () => {
    const [hide,setHide] = useState(false);

    return (
        <div className={`relative h-screen ${hide ? "w-20" : "w-72"} duration-300 bg-darkblue overflow-hidden`}>
            <div className='flex pt-4 ml-1 mr-2'>
                <img onClick={() => setHide(!hide)} src={Logo} alt="fill_paper_logo" width={32} height={47} className="ml-5 cursor-pointer"/>
                <h1 className={`text-white text-3xl ml-7 mt-2 ${hide && "scale-0"}`}>Fill Paper</h1>
            </div>
            <hr className='mt-4 ml-2 mr-2 text-paleblue'></hr>
            <div className='flex mt-3 ml-1 mr-2 duration-300 hover:bg-lightblue pt-2 pb-2 rounded'>
                <img src={Pencil} alt="pencil_ico" width={24} height={24} className="ml-5"/>
                <a href='/notes' className={`text-white text-2xl ml-10 ${hide && "scale-0"}`}>Notes</a>
            </div>
            <div className='flex mt-3 ml-1 mr-2 duration-300 hover:bg-lightblue pt-2 pb-2 rounded'>
                <img src={Add} alt="add_ico" width={22} height={22} className="ml-5"/>
                <a href='/add' className={`text-white text-2xl ml-10 ${hide && "scale-0"}`}>Add Note</a>
            </div>
            <div className='flex mt-3 ml-1 mr-2 duration-300 hover:bg-lightblue pt-2 pb-2 rounded'>
                <img src={Trash} alt="add_ico" width={22} height={22} className="ml-5"/>
                <a href='/add' className={`text-white text-2xl ml-10 ${hide && "scale-0"}`}>Trash</a>
            </div>
        </div>
    );
}

export default Sidebar;
