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
        <div className='flex-1 w-[100%] '>
            {/* Note Content Title Container */}
            <div className="relative flex flex-col w-[100%]">
                <div onInput={(e) => hideTitlelabel(e)} contentEditable className={`w-[100%] pt-2 pl-7 pb-2 text-2xl font-bold break-words`}></div>
                <p className={`${hideTitle === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-2xl font-bold`}>Title</p>
            </div>

            {/* Note Content Title Container */}
            <div className='relative flex flex-col'>
                {/* content div */}
                <div onInput={(e) => hideTextlabel(e)} contentEditable className='w-[100%] pt-2 pl-7 pb-2 text-lg overflow-y-scroll break-words'></div>
                <p className={`${hideText === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-lg`}>Type here to start write</p>
            </div>

            {/* edit note container */}
            <div className='absolute bottom-0 w-[100%]1 h-[7%] border-t bg-black'>
                {/* edit text container */}
                <div className={`${showList === true ? "" : "pl-[4%]"}`}>
                    
                </div>
            </div>
        </div>
    );
}

export default NoteContent;
