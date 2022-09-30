import React, { useState } from 'react';

import Card from '../../Components/Card';
import Button from '../../Components/Button';
import Popup from '../../Components/Popup';

const Notes = ({click,userData}) => {
    const [addShow, setAddShow] = useState(false);
    const [updateData,setUpdateData] = useState({
        id: '',
        title: '',
        body: ''
    });

    const popUp = (id,title,body) => {
        setUpdateData({
            id: id,
            title: title,
            body: body
        });
        setAddShow(!addShow)
    };

    

    return (
        <>
            <title>Fill Paper | Notes</title>
            {addShow && <Popup close={() => popUp()} idContent={updateData.id} titleContent={updateData.title} bodyContent={updateData.body} 
                Submit={'Save'} 
            />}
            <div className='flex-1'>
                <div className='overflow-y-scroll p-7 h-screen grid grid-cols-4 gap-2'>
                    {userData.map(item => 
                        <Card key={item.id} title={item.title} note={item.body} id={item.id}
                            updateNote={() => popUp(item.id,item.title,item.body)}    
                        />
                    )}
                </div>
                <Button click={click}/>
            </div>
        </>
    );
}

export default Notes;
