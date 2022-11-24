// import some dependencies
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

// import style
import '../style/Sidebar.css';

// import some svg files 
import pencil from '../Images/sideBar/pencil.svg';
import showBar from '../Images/sideBar/show_bar_double.svg';
import settingIcon from '../Images/sideBar/setting_icon.svg';
import profile from '../Images/sideBar/profile.svg';
import trash from '../Images/sideBar/trash.svg';

const Sidebar = ({showSetting,setShowSetting}) => {
    // hide status
    const [hide,setHide] = useState(false);

    // trigger hide 
    const hideSidebar = () => {
        setHide(!hide);
    };

    return (
        <div className={`h-screen ${hide === true ? "w-[5%]" : "w-[19%]"} bg-blue-dark duration-200 overflow-hidden`}>
            {/* sidebar header */}
            <div className={`mt-[8%] ml-[4%] ${hide === true ? "hidden" : "delay-500"}`}>
                {/* user profile */}
                <img src={profile} alt="user_profile" className={`${hide === true ? "hidden" : "delay-500"}`} width={39} height={39} align="left" />

                {/* username */}
                <span className={`${hide === true ? "hidden" : "delay-500"} text-white text-[1em] align-middle ml-5`}>DaffaKhayru</span>
            </div>

            {/* Notes usability pages */}
            <CurrentLink to="/notes" width={17} height={17} text="Notes" file={pencil} top={`${hide === true ? "mt-[32%]" : "mt-[12%]"}`} />
            <CurrentLink to="/trash" width={15} height={15} text="Trash" file={trash} top="mt-1" />

            {/* User pages */}
            <ButtonLink showSetting={showSetting} setShowSetting={setShowSetting} width={21} height={21} text="Setting" file={settingIcon} top="mt-6" />

            {/* sidebar showbar */}
            <div className={`absolute left-[1%] bottom-[1.5%]`} onClick={() => hideSidebar()}>
                <img src={showBar} alt="show_bar" className={`${hide === false ? "rotate-180" : ""} duration-200 cursor-pointer`} />
            </div>
        </div>
    );
}

// link to another page
const CurrentLink = ({to,width,height,file,text,top}) => {
    // get current url
    const urlPath = useLocation().pathname;
    
    return(
        <Link to={to}>
            <div className={`${urlPath === to ? "bg-blue-dark-light" : ""} flex ${top} pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
                <img src={file} alt="fill_paper_logo" width={width} height={height}/>
                <h1 className={`text-white text-[1em] ml-8 mr-2`}>{text}</h1>
            </div>
        </Link>
    );
};

const ButtonLink = ({showSetting,setShowSetting,width,height,file,text,top}) => {
    return(
        <div onClick={setShowSetting} className={`${showSetting === true ? "bg-blue-dark-light" : ""} cursor-pointer flex ${top} pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
            <img src={file} alt="fill_paper_logo" width={width} height={height}/>
            <h1 className={`text-white text-[1em] ml-8 mr-2`}>{text}</h1>
        </div>
    );
};

export default Sidebar;