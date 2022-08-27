import React, { useState } from 'react';
import Logo from '../Images/fill_paper_logo.svg';
import Pencil from '../Images/pencil.svg';
import Add from '../Images/add.svg';
import trash from '../Images/trash.svg';

const Sidebar = () => {
    const [hide,setHide] = useState(false);
    const urlPath = window.location.pathname

    const urlNotes = urlPath == "/notes" ? "bg-lightblue" : "";
    const urlAddNote = urlPath == "/add_note" ? "bg-lightblue" : "";

    return (
        <div className={`h-screen ${hide ? "w-20" : "w-72"} bg-darkblue`}>
            <div className='flex mt-4'>
                <img src={Logo} alt="fill_paper_logo" className='ml-6 cursor-pointer'/>
                <h1 className='text-white text-2xl mt-2 ml-8'>Fill Paper</h1>
            </div>
            <hr className='mr-2 ml-2 mt-2'/>
            <a href="/notes">
                <div className={`${urlNotes} flex mt-2 hover:bg-lightblue ml-2 mr-2 rounded pt-1 pb-1 pl-5`}>
                    <img src={Pencil} alt="fill_paper_logo" width={24} height={24} className=''/>
                    <h1 className='text-white text-2xl ml-11 mr-2'>Notes</h1>
                </div>
            </a>
            <a href="/add_note">
                <div className={`${urlAddNote} flex mt-2 hover:bg-lightblue ml-2 mr-2 rounded pt-1 pb-1 pl-5`}>
                    <img src={Add} alt="fill_paper_logo" width={20} height={20} className=''/>
                    <h1 className='text-white text-2xl ml-11 mr-2'>Add Note</h1>
                </div>
            </a>
            <a href="/notes">
                <div className='flex mt-2 hover:bg-lightblue ml-2 mr-2 rounded pt-1 pb-1 pl-5'>
                    <img src={trash} alt="fill_paper_logo" width={22} height={22} className=''/>
                    <h1 className='text-white text-2xl ml-11 mr-2'>Trash</h1>
                </div>
            </a>
        </div>
    );
}

export default Sidebar;