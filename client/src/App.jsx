import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Notes from './Pages/Notes';
import Popup from './Components/Popup';
import Trash from './Pages/Trash';

const App = () => {
    const [addShow,setAddShow] = useState(false);
    let add = addShow === true ? <Popup close={() => setAddShow(!addShow)}/> : '';

    return (
        <div className='flex'>
            <Sidebar />
            {add} 
            <main className='flex-1'>
                <Routes>
                    <Route path='/notes' element={<Notes click={() => setAddShow(!addShow)} />}/>
                    <Route path='/trash' element={<Trash />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;