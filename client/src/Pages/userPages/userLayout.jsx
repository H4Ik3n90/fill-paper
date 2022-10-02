import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Sidebar from '../../Components/Sidebar';

const userLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Suspense fallback={<div>Loading....</div>}>
                <Outlet />
            </Suspense>
            
        </div>
    );
}

export default userLayout;