import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Sidebar from '../../Components/Sidebar';

const userLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default userLayout;