import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import UserLayout from './Pages/userPages/userLayout';
const Notes = loadable(() => import('./Pages/userPages/Notes'));

import LoginLayout from './Pages/loginPages/loginLayout';
const Login = loadable(() => import('./Pages/loginPages/Login'));
const Signup = loadable(() => import('./Pages/loginPages/Signup'));

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route path='notes' element={<Notes />} />
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
