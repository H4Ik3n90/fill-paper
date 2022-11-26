// import some dependencies
import React, {useState} from 'react';
import loadable from '@loadable/component';

// import some components
import Settingmenu from '../../Components/Settingmenu';
const MyAccount = loadable(() => import('./MyAccount'));
const Language = loadable(() => import('./Language'));

// import some svg files
import closeMark from '../../Images/userSetting/close.svg';

const Setting = ({setShowSetting,showSetting}) => {
    // selected menu 
    const [menu,setMenuSelected] = useState('');

    // event openmenu
    const openMenu = (textMenu) => {
        setMenuSelected(textMenu);
    };

    // conditional rendering setting pages
    let showMyAccount = menu == "My Account" ? <MyAccount /> : "";
    let showLanguage = menu == "Language" ? <Language /> : "";

    return(
        // modal background
        <div className={`duration-200 absolute flex justify-center items-center z-10 bg-semi-black w-[100%] h-[100%]`}>
            {/* user setting */}
            <div className={`${showSetting === true ? "animate-pop-up" : "animate-pop-in"} flex relative bg-white w-[70%] h-[80%] rounded`}>
                {/* setting sidebar menu */}
                <Settingmenu menu={menu} setMenuSelected={openMenu} />
                
                {/* setting pages */}
                {showMyAccount}
                {showLanguage}

                {/* close mark */}
                <img src={closeMark} onClick={setShowSetting} alt="close_mark" className='absolute z-10 right-[2%] top-[2%] cursor-pointer' width={20} height={20} />
            </div>
        </div>
    );
};

export default Setting;