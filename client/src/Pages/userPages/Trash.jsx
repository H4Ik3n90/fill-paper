// import some dependencies
import React from 'react';

// import some components
import ListData from '../../Components/ListData';
import NoteContent from '../../Components/NoteContent';

const Trash = ({showList,setShowList}) => {
    return(
        <>
            <title>Fill Paper | Trash</title>
            <ListData showList={showList} setShowList={setShowList} listMode="trash" />               
            <NoteContent showList={showList} setShowList={setShowList}/>
        </>
    );
};

export default Trash;