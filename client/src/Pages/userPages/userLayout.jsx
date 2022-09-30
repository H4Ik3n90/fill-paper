import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Route,Routes} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
const Notes = lazy(() => import('./userPages/Notes'));
const Trash = lazy(() => import('./userPages/Trash'));
import Popup from './Components/Popup';

const userLayout = () => {
    const [addShow,setAddShow] = useState(false);
    const [notesData,setNotesData] = useState(' ');

    const getData = () => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(data => {
                setNotesData(data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex'>
            <Sidebar />
            {addShow && <Popup close={() => setAddShow(!addShow)} titleContent={''} bodyContent={''} 
                Submit={'Add'} 
            />}
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    {notesData === null ? <Route path={`/notes`} element={
                        <Notes click={() => setAddShow(!addShow)} userData={notesData} />
                    } /> : notesData && <Route path={`/notes`} element={
                        <Notes click={() => setAddShow(!addShow)} userData={notesData} />
                    } />}
                    <Route path='/trash' element={<Trash />} />
                </Routes>
            </Suspense>
            
        </div>
    );
}

export default userLayout;