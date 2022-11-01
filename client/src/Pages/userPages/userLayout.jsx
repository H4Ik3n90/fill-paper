import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Sidebar from '../../Components/Sidebar';

const userLayout = ({showSidebar,setShowSidebar}) => {
    return (
        <div className='flex'>
            <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} />
            <Outlet />
        </div>
    );
}

export default userLayout;