import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Notes from './Pages/Notes';
import Add from './Components/Add';

const App = () => {
    const [addShow,setAddShow] = useState(false);
    let add;

    const setAdd = () => {
        setAddShow(!addShow);
    };

    if(addShow === true) {
        add = <Add close={() => setAdd()} />
    }else {
        add = "";
    }

    return (
        <div className='flex'>
            <Sidebar /> 
            {add}
            <main className='overflow-scroll flex-1'>
                <Routes>
                    <Route path='/notes' element={<Notes click={() => setAdd()} />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;