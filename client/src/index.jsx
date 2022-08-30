import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';

import Sidebar from './Components/Sidebar';
import Notes from './Pages/Notes';
import AddNote from './Pages/AddNote';

const App = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='overflow-scroll'>
                <Routes>
                    <Route path='/notes' element={<Notes />}/>
                    <Route path='/add_note' element={<AddNote />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <App />
        </BrowserRouter>    
    );