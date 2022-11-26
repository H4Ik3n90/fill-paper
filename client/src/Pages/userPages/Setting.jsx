// import some dependencies
import React from 'react';

// import some components
import Settingmenu from '../../Components/Settingmenu';

// import some svg files
import closeMark from '../../Images/userSetting/close.svg';

const Setting = ({setShowSetting,showSetting}) => {
    return(
        // modal background
        <div className={`duration-200 absolute flex justify-center items-center z-10 bg-semi-black w-[100%] h-[100%]`}>
            {/* user setting */}
            <div className={`${showSetting === true ? "animate-pop-up" : "animate-pop-in"} flex relative bg-white w-[70%] h-[80%] rounded`}>
                <Settingmenu />

                {/* close mark */}
                <img src={closeMark} onClick={setShowSetting} alt="close_mark" className='absolute z-10 right-[2%] top-[2%] cursor-pointer' width={20} height={20} />
            </div>
        </div>
    );
};

export default Setting;