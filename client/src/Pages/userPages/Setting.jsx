// import some dependencies
import React from 'react';

// import some svg files
import closeMark from '../../Images/userSetting/close.svg';

const Setting = ({setShowSetting}) => {
    return(
        // modal background
        <div className='absolute flex justify-center items-center z-10 bg-semi-black w-[100%] h-[100%]'>
            {/*  */}
            <div className='relative bg-white w-[65%] h-[75%] rounded'>
                <img src={closeMark} onClick={setShowSetting} alt="close_mark" className='absolute z-10 right-[2%] top-[2%] cursor-pointer' width={20} height={20} />
            </div>
        </div>
    );
};

export default Setting;