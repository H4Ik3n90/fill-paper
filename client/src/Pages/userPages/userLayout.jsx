// import some dependencies
import React,{useState,useEffect,lazy,Suspense} from 'react';
import loadable from '@loadable/component';
import {Outlet} from 'react-router-dom';

// import component 
import Sidebar from '../../Components/Sidebar';
const Setting = loadable(() => import('../userPages/Setting'));

const userLayout = ({showSetting,setShowSetting}) => {
    // render setting page modal
    let settingModal = showSetting === true ? <Setting setShowSetting={setShowSetting} showSetting={showSetting} /> : "";

    return (
        <>
            {/* setting page modal */}
            {settingModal}
            <div className='flex'>
                <Sidebar showSetting={showSetting} setShowSetting={setShowSetting} />
                <Outlet />
            </div>
        </>
    );
}

export default userLayout;