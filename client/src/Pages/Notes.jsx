import React from 'react';

import Card from '../Components/Card';
import Button from '../Components/Button';

const Notes = ({click}) => {
    return (
        <>
            <title>Fill Paper | Notes</title>
            <div className='overflow-scroll p-7 h-screen grid grid-cols-4 gap-0'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Button click={click} />
            </div>
        </>
    );
}

export default Notes;
