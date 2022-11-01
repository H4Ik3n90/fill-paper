import React, {useState,Component} from 'react';

// import some svg files
import {ReactComponent as Bold} from '../Images/textEdit/bold.svg';
import {ReactComponent as Italic} from '../Images/textEdit/italic.svg';
import {ReactComponent as Underline} from '../Images/textEdit/underline.svg';

const NoteContent = ({showList,setShowList}) => {
    // hide label status
    const [hideTitle,setHideTitle] = useState(false);
    const [hideText,setHideText] = useState(false);

    // hide title label while content exist
    const hideTitlelabel = (e) => {
        e.currentTarget.textContent.length === 0 ? setHideTitle(false) : setHideTitle(true);
    };

    // hide text label while content exist 
    const hideTextlabel = (e) => {
        e.currentTarget.textContent.length === 0 ? setHideText(false) : setHideText(true);
    };

    return (
        <div className='h-screen flex-1'>
            {/* Note Content Container */}
            <div className='h-[93%] relative'>
                {/* content div */}
                <div onInput={(e) => hideTitlelabel(e)} contentEditable="true" className='focus-within:outline-none absolute z-10 h-[8%] w-[100%] pt-2 pl-7 pb-2 text-2xl font-bold mt-4'></div>
                <div onInput={(e) => hideTextlabel(e)} contentEditable="true" className='focus-within:outline-none absolute z-10 h-[87%] w-[100%] pt-2 pl-7 pb-2 text-lg mt-[4.4rem] overflow-y-scroll'></div>
                

                {/* label div */}
                <p className={`${hideTitle === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-2xl font-bold mt-4`}>Title</p>
                <p className={`${hideText === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-lg mt-[4.4rem]`}>Type here to start write</p>
                
            </div>

            {/* edit note */}
            <div className={`h-[7%] ${showList === true ? "" : "pl-[4%]"} border-t flex`}>
                {/* edit text container */}
                <div className={`${showList === true ? "" : "border-l"} flex mt-2 mb-2`}>
                    {/* bold container */}
                    <div className='hover:bg-blue-md mt-[0.16rem] rounded p-1 ml-3 duration-150 cursor-pointer'>
                        <Bold className="h-[90%] w-[90%]" /> 
                    </div>

                    {/* italic container */}
                    <div className='hover:bg-blue-md mt-[0.16rem] rounded p-1 ml-3 duration-150 cursor-pointer'>
                        <Italic className="h-[90%] w-[90%]" />
                    </div>

                    {/* underline container */}
                    <div className='hover:bg-blue-md mt-[0.20rem] rounded p-1 ml-3 duration-150 cursor-pointer'>
                        <Underline className="h-[93%] w-[93%]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteContent;
