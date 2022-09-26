import React,{useState,useEffect,lazy,Suspense} from 'react';
import {Route,Routes} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
const Notes = lazy(() => import('./Pages/Notes'));
const Trash = lazy(() => import('./Pages/Trash'));
import Popup from './Components/Popup';

const App = () => {
    const [addShow,setAddShow] = useState(false);
    const [notesData,setNotesData] = useState(' ');

    const up = 'duration-150 scale-100';
    const down = 'duration-150 scale-0';

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
            {addShow && <Popup style={addShow === true ? up : down} close={() => setAddShow(!addShow)}/>} 
            <main className='flex-1'>
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
            </main>
        </div>
    );
}

export default App;