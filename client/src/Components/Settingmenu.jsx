import React, {useState} from 'react';

const Settingmenu = () => {
    // selected menu 
    const [menu,setMenuSelected] = useState('');

    return(
        // menu setting
        <div className={`bg-silver-very-light h-[100%] w-56`}>
            <Menuchoosen  text={"My Account"}/>
        </div>
    );
};

const Menuchoosen = ({selected,openMenu,width,height,file,text,top}) => {
    return( 
        <div onClick={openMenu} className={`${selected === text ? "bg-blue-dark-light" : ""} flex ${top} pt-1 pb-1 ml-2 mr-2 mb-[1%] rounded pl-4`}>
            <img src={file} alt="" width={width} height={height}/>
            <h1 className={`text-black text-[1em] ml-8 mr-2`}>{text}</h1>
        </div>
    );
};

export default Settingmenu;