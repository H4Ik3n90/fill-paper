// import some dependencies
import React, {useState,useEffect,useRef} from 'react';
import loadable from '@loadable/component';

// import some components
import Settingmenu from '../../Components/Settingmenu';
const MyAccount = loadable(() => import('./MyAccount'));
const Language = loadable(() => import('./Language'));
const Theme = loadable(() => import('./Theme'));

// import some svg files
import closeMark from '../../Images/userSetting/close.svg';

const Setting = ({setSettingShow,settingAnimation,closeSetting}) => {
    // selected menu 
    const [menu,setMenuSelected] = useState('My Account');

    // event openmenu
    const openMenu = (textMenu) => {
        setMenuSelected(textMenu);
    };

    // create animation ref
    const animationClose = useRef();

    // create animationend
    useEffect(() => {
        animationClose.current.addEventListener('animationend', () => {
            if(settingAnimation === 'animate-pop-in') {
                setSettingShow(false);
            }
        }, {once:true});
    }, [settingAnimation,setSettingShow]);

    // conditional rendering setting pages
    let showMyAccount = menu == "My Account" ? <MyAccount /> : "";
    let showLanguage = menu == "Language" ? <Language /> : "";
    let showTheme = menu == "Theme" ? <Theme /> : "";

    return(
        // modal background
        <div className={`duration-200 absolute flex justify-center items-center z-10 bg-semi-black w-[100%] h-[100%]`}>
            {/* user setting */}
            <div ref={animationClose} className={`${settingAnimation} flex relative bg-white w-[70%] h-[80%] rounded`}>
                {/* setting sidebar menu */}
                <Settingmenu menu={menu} setMenuSelected={openMenu} />
                
                {/* setting pages */}
                {showMyAccount}
                {showLanguage}
                {showTheme}

                {/* close mark */}
                <img src={closeMark} onClick={closeSetting} alt="close_mark" className='absolute z-10 right-[2%] top-[2%] cursor-pointer' width={20} height={20} />
            </div>
        </div>
    );
};

export default Setting;