// import dependencies here 
import React, {useState} from 'react';
import Card from '../Components/Card';
import Searchbar from './Searchbar';

// import add-on css style
import '../style/ListData.css';

// import some svg 
import showBar from '../Images/listData/show_bar_single.svg';
import addNote from '../Images/noteEdit/add.svg';
import sortNote from '../Images/noteEdit/sort.svg';

const ListData = ({showList,setShowList,listMode}) => {
    // change display in list data depends on listmode
    const displayMode = () => {
        if(listMode === "notes") {
            // display notes mode 
            const notesMode = {
                title: "Notes",
                element: {
                    options: [],
                    data: <Card show={showList} />
                }
            };

            return notesMode;
        }if(listMode === "tag") {
            // display tag mode
            const tagMode = {
                title: "Tag",
                element: {
                    options: [],
                    data: <Card show={showList} />
                }
            };

            return tagMode;
        }if(listMode === "trash") {
            // display trash mode
            const trashMode = {
                title: "Trash",
                element: {
                    options: [],
                    data: <Card show={showList} />
                }
            }

            return trashMode;
        }
    }    

    // give return and fill in variable
    const resultMode = displayMode();

    return (
        <div className={`${showList === false ? "w-0" : "w-[28%]"} relative h-screen bg-blue-smooth duration-200 cursor-pointer`}>
            {/* list data title */}
            <h1 className={`pl-5 pt-3 text-[1.4em] ${showList === false ? "scale-x-0" : "delay-300"}`}><b>{resultMode.title}</b></h1>  

            {/* search */}
            <Searchbar show={showList} />
            
            {/* header note container */}
            <div className='relative'>
                {/* amount of notes */}
                <p className={`text-sm pl-5 mt-8 ${showList === false ? "scale-x-0" : "delay-300"}`}>97 {resultMode.title}</p>

                {/* add note button */}
                <div data-tooltip="Add Note" className='absolute z-0 right-[2.8rem] bottom-0 hover:bg-silver-light p-[0.2rem] tooltip'>
                    <img src={addNote} alt="add" />
                </div>

                {/* sort note button */}
                <div data-tooltip="Sort Note" className='absolute z-0 right-[1rem] bottom-0 hover:bg-silver-light p-[0.2rem] tooltip'>
                    <img src={sortNote} alt="sort" />
                </div>
            </div>

            {/* list of notes */}
            <div className='mt-2 border-t-[1px] overflow-y-scroll max-h-[71%]'>
                {resultMode.element.data}
            </div>

            {/* hide and show button */}
            <div onClick={setShowList} className={`duration-200 ${showList === true ? "bg-blue-smooth" : ""} absolute left-2 bottom-1 w-6 h-8 p-2 rounded`}>
                <img src={showBar} alt="show_bar" className={`${showList === true ? "rotate-180" : ""} duration-200 cursor-pointer`} />
            </div> 
        </div>
    );
}

export default ListData;
