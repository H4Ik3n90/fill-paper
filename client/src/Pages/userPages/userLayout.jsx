// import some dependencies
import React,{useState,useEffect,lazy,Suspense} from 'react';
import loadable from '@loadable/component';
import {Outlet} from 'react-router-dom';

// import component 
import Sidebar from '../../Components/Sidebar';
const Setting = loadable(() => import('../userPages/Setting'));

const userLayout = ({settingShow,setSettingShow,settingAnimation,closeSetting}) => {
    return (
        <>
            {/* setting page modal */}
            {settingShow && (<Setting closeSetting={closeSetting} setSettingShow={setSettingShow} settingAnimation={settingAnimation} />)}
            <div className='flex'>
                <Sidebar settingShow={settingShow} setSettingShow={setSettingShow} closeSetting={closeSetting} />
                <Outlet />
            </div>
        </>
    );
}

export default userLayout;