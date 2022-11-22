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
            <div className='relative mb-[12%] mt-[11%]'>
                {/* user profile */}
                <div className='absolute p-[4%] rounded left-[4%] bg-blue-dark-light'>
                    <img src={profile} alt="user_profile" width={15} height={15}/>
                </div>

                {/* username */}
                <h1 className={`text-white  text-md ml-[23%]`}>DaffaKhayru</h1>
            </div>

            {/* Notes usage */}
            <h3 className='ml-2 mb-[2%] text-white'>Notes</h3>
            <hr className='ml-1 mb-[5%] mr-1'/>

            {/* Notes usability pages */}
            <CurrentLink to="/notes" width={17} height={17} text="Notes" file={pencil}/>

            {/* Notes usage */}
            <h3 className='ml-2 mb-[2%] text-white'>User</h3>
            <hr className='ml-1 mb-[5%] mr-1'/>

            {/* setting pages */}
            <CurrentLink to="/setting" width={17} height={17} text="Setting" file={settingIcon}/>

            {/* sidebar showbar */}
            <div className='ml-6 mt-5' onClick={() => hideSidebar()}>
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
            <div className={`${urlPath === to ? "bg-blue-dark-light" : ""} flex mt-2 pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
                <img src={file} alt="fill_paper_logo" width={width} height={height}/>
                <h1 className={`text-white text-[1.1em] ml-8 mr-2`}>{text}</h1>
            </div>
        </Link>
    );
};

export default Sidebar;