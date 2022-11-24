// import some dependencies
import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

// import layout and pages using async loadable
import UserLayout from './Pages/userPages/userLayout';
const Notes = loadable(() => import('./Pages/userPages/Notes'));

// import layout and pages using async loadable
import LoginLayout from './Pages/loginPages/loginLayout';
const Login = loadable(() => import('./Pages/loginPages/Login'));
const Signup = loadable(() => import('./Pages/loginPages/Signup'));

const App = () => {
    // hidden or show list data
    const [listDataShow,setListDataShow] = useState(true);

    // hidden or show user setting
    const [settingShow,setSettingShow] = useState(false);

    // trigger to show and hide list
    const showList = () => {
        setListDataShow(!listDataShow);
    };

    // trigger to show adn hide user setting
    const showSetting = () => {
        setSettingShow(!settingShow);
    };

    return (
        <>
            <Routes>
                {/* user page route */}
                <Route path='/' element={<UserLayout showSetting={settingShow} setShowSetting={() => showSetting()} />}>
                    <Route path='notes' element={<Notes showList={listDataShow} setShowList={() => showList()} />} />
                </Route>

                {/* login page route*/}
                <Route path='/' element={<LoginLayout />}>
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
