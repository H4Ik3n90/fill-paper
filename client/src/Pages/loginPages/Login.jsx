import React, {useState,useEffect,useRef} from 'react';
import { Link,useLocation } from 'react-router-dom';

import '../../style/Login.css';

const Login = () => {
    // placeholder status
    const [isEmail,setIsEmail] = useState();
    const [isPass,setIsPass] = useState();

    // set placeholder hidden
    const emailHidden = (e) => e.target.value.length === 0 ? setIsEmail('') : setIsEmail('hidden');
    const pwdHidden = (e) => e.target.value.length === 0 ? setIsPass('') : setIsPass('hidden');

    return (
        // create login page
        <div className='login-page'>
            {/* Login Page Title */}
            <title>Fill Paper | Login</title>

            {/* header text login */}
            <h1 className='title-welcome'>Welcome</h1>
            <p className='title-slogan'>Write your notes anywhere and anytime</p>

            {/* login form */}
            <form className='login-form'>
                {/* username input */}
                <div className='input-container'>
                    <input type="text" className={`email`} 
                        onInput={(e) => emailHidden(e)}
                    />
                    <label className={`${isEmail} placeholder-email`}>Email</label>
                </div>

                {/* password input */}
                <div className='input-container'>
                    <input type="text" className={`password`} 
                        onInput={(e) => pwdHidden(e)}
                    />
                    <label className={`${isPass} placeholder-password`}>Password</label>
                </div>

                {/* Login */}
                <input type="submit" className='submit' value="Login" />

                {/* link to signup */}
                <p className='text-md'>
                    Don't have account?
                    <Link to='/signup' className='signup-link'> signup</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
