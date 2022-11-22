import React, {useState,Component} from 'react';

// import some svg files
import {ReactComponent as Bold} from '../Images/textEdit/bold.svg';
import {ReactComponent as Italic} from '../Images/textEdit/italic.svg';
import {ReactComponent as Underline} from '../Images/textEdit/underline.svg';

const NoteContent = ({showList,setShowList}) => {
    // hide label status
    const [hideTitle,setHideTitle] = useState(false);
    const [hideText,setHideText] = useState(false);

    // get text in note body
    const [selectedText,setSelectedText] = useState('');

    // hide title label while content exist
    const hideTitlelabel = (e) => {
        e.currentTarget.textContent.length === 0 ? setHideTitle(false) : setHideTitle(true);
    };

    // hide text label while content exist 
    const hideTextlabel = (e) => {
        e.currentTarget.textContent.length === 0 ? setHideText(false) : setHideText(true);
    };

    return (
        <form className='flex flex-col flex-1 h-screen'>
            <div className='h-[93%] w-[100%] overflow-y-scroll scrollbar-hide'>
                {/* Note Content Title Container */}
                <div className="relative flex flex-col">
                    <div onInput={(e) => hideTitlelabel(e)} contentEditable className={`w-[100%] pt-2 pl-7 pb-2 text-2xl font-bold break-words scrollbar-hide`}></div>
                    <p className={`${hideTitle === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-2xl font-bold`}>Title</p>
                </div>

                {/* Note Content Title Container */}
                <div className='relative flex flex-col'>
                    <div onInput={(e) => hideTextlabel(e)} contentEditable className='w-[100%] pt-2 pl-7 pb-2 text-lg overflow-y-scroll break-words scrollbar-hide'></div>
                    <p className={`${hideText === true ? "hidden" : ""} absolute -z-10 pt-2 pl-7 pb-2 text-lg`}>Type here to start write</p>
                </div>

                
            </div>

            {/* edit note container */}
            <div className='bottom-0 w-[100%]1 h-[7%] border-t'>
                {/* text transform */}
                <div className={`${showList === true ? "" : "ml-10 border-l"} flex mb-2 mt-2 mr-5 pl-2`}>
                    {/* Bold */}
                    <div className='hover:bg-blue-md active:bg-blue-md p-2 rounded'>
                        <Bold />
                    </div>

                    {/* Italic */}
                    <div className='hover:bg-blue-md p-2 rounded'>
                        <Italic />
                    </div>

                    {/* Underline */}
                    <div className='hover:bg-blue-md p-2 rounded'>
                        <Underline />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default NoteContent;