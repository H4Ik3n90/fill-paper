import React, { useState } from 'react';

const Add = ({close}) => {
    const [titlenone,setTitleNone] = useState();
    const [notenone,setNoteNone] = useState();

    return (
        <div onClick={close} className='duration-300 z-10 flex justify-center items-center absolute h-screen w-screen bg-semi-black'>
            <form method='post' onClick={(e) => e.stopPropagation()} className='relative w-1/2 rounded-lg bg-white'>
                <div className={`absolute z-0 ${titlenone} text-2xl text-slate-400 rounded-lg p-3 pl-4`}>Title</div>
                <div contentEditable='true' 
                    onInput={(e) => e.currentTarget.textContent.length === 0 ? setTitleNone('') : setTitleNone('hidden')}    
                    className={`rounded-lg p-3 pl-4 text-2xl focus:outline-none break-words`}
                ></div>
                <div className={`absolute z-0 ${notenone} text-lg text-slate-500 rounded-sm p-3 pl-4`}>Note</div>
                <div contentEditable='true' 
                    onInput={(e) => e.currentTarget.textContent.length === 0 ? setNoteNone('') : setNoteNone('hidden')}    
                    className={`rounded-lg p-3 pl-4 text-lg focus:outline-none break-words h-auto`}
                ></div>
            </form>
        </div>
    );
}

export default Add;
