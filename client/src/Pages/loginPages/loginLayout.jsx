import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidepage from '../../Components/Sidepage';

const LoginLayout = () => {
    return (
        <div className='flex'>
            <Sidepage />
            <Outlet />
        </div>
    );
}

export default LoginLayout;
