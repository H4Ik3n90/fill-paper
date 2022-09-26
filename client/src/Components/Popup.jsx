import React, { useState, useEffect } from 'react';

const Popup = ({close,style}) => {
    const [titlenone,setTitleNone] = useState();
    const [notenone,setNoteNone] = useState();
    
    const [title,setTitle] = useState();
    const [body,setBody] = useState();

    const autoHideTitle = (e) => {
        e.currentTarget.textContent.length === 0 ? setTitleNone('') : setTitleNone('hidden');
        setTitle(e.currentTarget.textContent);
    }

    const autoHideNote = (e) => {
        e.currentTarget.textContent.length === 0 ? setNoteNone('') : setNoteNone('hidden');
        setBody(e.currentTarget.textContent);
    }

    const postData = async (e) => {
        fetch('http://localhost:3000/notes', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: title, body: body})
        })
        .then(res => {
            if(res) {
                setTitle("");
                setBody("");    
            }else {
                console.log("An error occured");
            }
        })
    };

    return (
        <div onClick={close} className={`${style} duration-300 z-10 flex justify-center items-center absolute h-screen w-screen bg-semi-black`}>
            <form onSubmit={(e) => postData(e)} onClick={(e) => e.stopPropagation()} className={`${style} relative w-1/2 rounded-lg bg-white`}>
                <div className={`absolute z-0 ${titlenone} text-2xl text-slate-400 rounded-lg p-3 pl-4`}>Title</div>
                <div contentEditable='true' 
                    onInput={(e) => autoHideTitle(e)}    
                    className={`rounded-lg p-3 pl-4 text-2xl focus:outline-none break-words`}
                ></div>
                <div className={`absolute z-0 ${notenone} text-lg text-slate-500 rounded-sm p-3 pl-4`}>Note</div>
                <div contentEditable='true' 
                    onInput={(e) => autoHideNote(e)}    
                    className={`rounded-lg p-3 pl-4 text-lg focus:outline-none break-words h-auto`}
                ></div>
                <div className='w-full h-auto mt-1 pr-7'>
                    <button type='submit' className='bg-ligthblue text-white text-lg rounded border-[#00B4EE] border float-right p-1'>Add</button>
                </div>
            </form>
        </div>
    );
}

export default Popup;