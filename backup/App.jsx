import React,{useState,useEffect} from 'react';
import {Route,Routes,useNavigate, useParams} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Notes from './Pages/Notes';
import Popup from './Components/Popup';
import Trash from './Pages/Trash';

const App = () => {
    const [addShow,setAddShow] = useState(false);
    const [notesData,setNotesData] = useState(null);

    let add = addShow === true ? <Popup close={() => setAddShow(!addShow)}/> : '';

    const getData = () => {
        fetch('http://localhost:5000/notes')
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

    console.log(useParams);

    return (
        <div className='flex'>
            <Sidebar />
            {add} 
            <main className='flex-1'>
                <Routes>
                    {notesData && <Route path={`/notes`} element={
                        <Notes click={() => setAddShow(!addShow)} userData={notesData} />
                    } />}
                    <Route path='/trash' element={<Trash />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;