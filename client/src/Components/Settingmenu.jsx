// import dependencies
import React, {useState} from 'react';

// import some svg
import ProfileUser from '../Images/userSetting/profileUser.svg';
import Language from '../Images/userSetting/language.svg';

const SettingMenu = ({menu,setMenuSelected}) => {
    return(
        // menu setting container
        <div className={`bg-silver-very-light h-[100%] w-56`}>
            {/* Title */}
            <h1 className='pl-5 pr-[5%] mt-[4%] mb-[3%]'>Setting</h1>

            {/* list of menu in sidebar setting */}
            <Menuchoosen openMenu={setMenuSelected} selected={menu} file={ProfileUser} width={21} height={21} text={"My Account"}/>
            <Menuchoosen openMenu={setMenuSelected} selected={menu} file={Language} width={21} height={21} text={"Language"}/>
        </div>
    );
};

const Menuchoosen = ({selected,openMenu,width,height,file,text,top}) => {
    return( 
        <div onClick={() => openMenu(text)} className={`${selected === text ? "bg-silver-light" : ""} cursor-pointer flex ${top} pt-1 pb-1 pl-4`}>
            <img src={file} alt="" width={width} height={height}/>
            <h1 className={`text-black text-[0.9em] ml-5 mr-2`}>{text}</h1>
        </div>
    );
};

export default SettingMenu;