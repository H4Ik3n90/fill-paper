import React, { useState } from 'react';
import ListData from '../../Components/ListData';
import NoteContent from '../../Components/NoteContent';

const Notes = () => {
    return (
        <>
            <ListData />               
            <NoteContent />
        </>
    );
}

export default Notes;

