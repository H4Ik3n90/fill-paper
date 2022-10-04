import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import Popup from './Components/Popup';

import UserLayout from './Pages/userPages/userLayout';
const Notes = loadable(() => import('./Pages/userPages/Notes'));
const Trash = loadable(() => import('./Pages/userPages/Trash'));

import LoginLayout from './Pages/loginPages/loginLayout';
const Login = loadable(() => import('./Pages/loginPages/Login'));
const Signup = loadable(() => import('./Pages/loginPages/Signup'));

const App = () => {
    const [notesData,setNotesData] = useState(' ');
    const [addShow,setAddShow] = useState(false);

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
        <>
            {addShow && <Popup close={() => setAddShow(!addShow)} titleContent={''} bodyContent={''} Submit={'Add'} />}
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route path='notes' element={<Notes click={() => setAddShow(!addShow)} userData={notesData} />} />
                    <Route path='trash' element={<Trash />} />
                </Route>
                <Route path='/' element={<LoginLayout />}>
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
