import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Route,Routes} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
const Notes = lazy(() => import('./Pages/Notes'));
const Trash = lazy(() => import('./Pages/Trash'));
import Popup from './Components/Popup';

const App = () => {
    const [addShow,setAddShow] = useState(false);
    const [notesData,setNotesData] = useState(null);

    let add = addShow === true ? <Popup close={() => setAddShow(!addShow)}/> : '';

    const getData = () => {
        fetch('http://localhost:3000/notes')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setNotesData(res.notes);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex'>
            <Sidebar />
            {add} 
            <main className='flex-1'>
                <Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        {notesData && <Route path={`/notes`} element={
                            <Notes click={() => setAddShow(!addShow)} userData={notesData} />
                        } />}
                        <Route path='/trash' element={<Trash />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

export default App;