// import some dependencies
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

// import style
import '../style/Sidebar.css';

// import some svg files 
import pencil from '../Images/sideBar/pencil.svg';
import showBar from '../Images/sideBar/show_bar_double.svg';
import settingIcon from '../Images/listData/setting_icon.svg';
import profile from '../Images/listData/profile.svg';

const Sidebar = () => {
    // hide status
    const [hide,setHide] = useState(false);

    // trigger hide 
    const hideSidebar = () => {
        setHide(!hide);
    };

    return (
        <div className={`h-screen ${hide === true ? "w-[5%]" : "w-[19%]"} bg-blue-dark duration-300 overflow-hidden`}>
            {/* sidebar header */}
            <div className='inline-flex mt-[8%] ml-[1%]'>
                {/* user profile */}
                <div className='bg-blue-dark-light p-3 rounded ml-2'>
                    <img src={profile} alt="user_profile" width={34} height={34}/>
                </div>

                {/* username */}
                <h1 className={`text-white mt-[3%] text-lg ml-[10%]`}>DaffaKhayru</h1>

                {/* user setting */}
                <div className='p-3 rounded ml-2'>
                    <img src={settingIcon} alt="user_profile" width={27} height={27}/>
                </div>
            </div>

            {/* Notes usage */}
            <h3 className='ml-[5%] mb-[1%] mt-[4%] text-white'>Paper</h3>

            {/* Notes usability pages */}
            <CurrentLink to="/notes" width={17} height={17} text="Notes" file={pencil}/>

            {/* Theme */}
            <h3 className='ml-[5%] mb-[1%] text-white'>Theme</h3>

            {/* sidebar showbar */}
            <div className='absolute left-[1%] bottom-[2%]' onClick={() => hideSidebar()}>
                <img src={showBar} alt="show_bar" className={`${hide === false ? "rotate-180" : ""} duration-200 cursor-pointer`} />
            </div>
        </div>
    );
}

// 
const CurrentLink = ({to,width,height,file,text}) => {
    // get current url
    const urlPath = useLocation().pathname;
    
    return(
        <Link to={to}>
            <div className={`${urlPath === to ? "bg-blue-dark-light" : ""} flex mt-1 pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
                <img src={file} alt="fill_paper_logo" width={width} height={height}/>
                <h1 className={`text-white text-[1.1em] ml-8 mr-2`}>{text}</h1>
            </div>
        </Link>
    );
};


const DropDownLink = ({to,width,height,file,text}) => {
    // get current url
    const urlPath = useLocation().pathname;
    
    return(
        <div className={`flex mt-1 pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
            
        </div>
    );
};

export default Sidebar;