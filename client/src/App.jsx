// import some dependencies
import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

// import layout and pages using async loadable
import UserLayout from './Pages/userPages/userLayout';
const Notes = loadable(() => import('./Pages/userPages/Notes'));
const Tag = loadable(() => import('./Pages/userPages/Tag'));
const Trash = loadable(() => import('./Pages/userPages/Trash'));

// import layout and pages using async loadable
import LoginLayout from './Pages/loginPages/loginLayout';
const Login = loadable(() => import('./Pages/loginPages/Login'));
const Signup = loadable(() => import('./Pages/loginPages/Signup'));

const App = () => {
    // hidden or show list data
    const [listDataShow,setListDataShow] = useState(true);

    // hidden or show user setting
    const [settingShow,setSettingShow] = useState(false);

    // setting animation
    const [settingAnimation,setSettingAnimation] = useState('');

    // trigger to show and hide list
    const showList = () => {
        setListDataShow(!listDataShow);
    };

    // trigger to show adn hide user setting
    const closeSetting = () => {
        const showSetting = !settingShow;

        if(showSetting) {
            setSettingShow(showSetting);
        }

        setSettingAnimation(showSetting ? "animate-pop-up" : "animate-pop-in");
    };

    return (
        <>
            <Routes>
                {/* user page route */}
                <Route path='/' element={<UserLayout closeSetting={closeSetting} settingShow={settingShow} setSettingShow={setSettingShow} settingAnimation={settingAnimation} />}>
                    <Route path='notes' element={<Notes showList={listDataShow} setShowList={() => showList()} />} />
                    <Route path='tag' element={<Tag showList={listDataShow} setShowList={() => showList()} />} />
                    <Route path='trash' element={<Trash showList={listDataShow} setShowList={() => showList()} />} />
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
