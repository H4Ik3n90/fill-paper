import React, { useState } from 'react';
import ListData from '../../Components/ListData';
import NoteContent from '../../Components/NoteContent';

const Notes = ({showList,setShowList}) => {
    return (
        <>
            <title>Fill Paper | Notes</title>
            <ListData showList={showList} setShowList={setShowList}/>               
            <NoteContent showList={showList} setShowList={setShowList}/>
        </>
    );
}

export default Notes;

