// import some dependencies
import React from 'react';

// import some components
import ListData from '../../Components/ListData';
import NoteContent from '../../Components/NoteContent';

const Tag = ({showList,setShowList}) => {
    return(
        <>
            <title>Fill Paper | Tag</title>
            <ListData showList={showList} setShowList={setShowList} listMode="tag" />               
            <NoteContent showList={showList} setShowList={setShowList}/>
        </>
    );
};

export default Tag;