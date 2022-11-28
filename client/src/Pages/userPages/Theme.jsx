import React from 'react';

// import some svg 
import lightTheme from '../../Images/userSetting/light_theme.svg';

const Theme = () => {
    return(
        <div className='flex-1 ml-[6%] mr-[7%] mt-[3%]'>
            {/* setting tile */}
            <h1 className='mb-[2%]'>Theme</h1>
            <hr />

            {/* theme select */}
            <div className='grid grid-cols-2 gap-2 mt-4'>
                {/* some illustration of theme */}
                <img src={lightTheme} alt="light_theme" className='border rounded cursor-pointer border-blue-md' width={812} height={220} />
                <img src="" alt="" />

                {/* info by text */}
                <h2 className='text-center'>Light</h2>
            </div>
        </div>
    );
};

export default Theme;