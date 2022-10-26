import React, {useState,useEffect,useRef} from 'react';
import { Link,useLocation } from 'react-router-dom';

import '../../style/Login.css';

const Login = () => {
    const [isEmail,setIsEmail] = useState();
    const [isPass,setIsPass] = useState();

    const emailHidden = (e) => e.target.value.length === 0 ? setIsEmail('') : setIsEmail('hidden');

    const pwdHidden = (e) => e.target.value.length === 0 ? setIsPass('') : setIsPass('hidden');

    return (
        <div className='login-page'>
            <h1 className='title-welcome'>Welcome</h1>
            <p className='title-slogan'>Write your notes anywhere and anytime</p>
            <form className='login-form'>
                <div className='input-container'>
                    <input type="text" className={`email`} 
                        onInput={(e) => emailHidden(e)}
                    />
                    <label className={`${isEmail} placeholder-email`}>Email</label>
                </div>
                <div className='input-container'>
                    <input type="text" className={`password`} 
                        onInput={(e) => pwdHidden(e)}
                    />
                    <label className={`${isPass} placeholder-password`}>Password</label>
                </div>
                <button className='submit'>Login</button>
                <p className='text-md'>
                    Don't have account?
                    <Link to='/signup' className='signup-link'> signup</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
