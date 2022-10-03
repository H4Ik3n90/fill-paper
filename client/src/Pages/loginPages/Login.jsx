import React, {useState,useEffect,useRef} from 'react';
import { Link,useLocation } from 'react-router-dom';

const Login = () => {
    const [isEmail,setIsEmail] = useState();
    const [isPass,setIsPass] = useState();

    const emailHidden = (e) => {
        e.target.value.length === 0 ? setIsEmail('') : setIsEmail('hidden');
    };

    const pwdHidden = (e) => {
        e.target.value.length === 0 ? setIsPass('') : setIsPass('hidden');
    };

    return (
        <div className='flex-1'>
            <h1 className='text-3xl text-center pt-20 pb-2'>Welcome</h1>
            <p className='text-center pb-2 text-silver'>Write your notes anywhere and anytime</p>
            <form className='flex flex-col justify-around pt-[2%] items-center h-[33%]'>
                <div className='relative h-auto'>
                    <input type="text" className={`border-1 h-10 rounded bg-blue-smooth pl-4 focus-within:outline-blue-md w-80`} 
                        onInput={(e) => emailHidden(e)}
                    />
                    <label className={`${isEmail} absolute duration-350 left-4 top-2 text-md text-silver`}>Email</label>
                </div>
                <div className='relative h-auto'>
                    <input type="text" className={`border-1 h-10 rounded bg-blue-smooth pl-4 focus-within:outline-blue-md w-80`} 
                        onInput={(e) => pwdHidden(e)}
                    />
                    <label className={`${isPass} absolute duration-350 left-4 top-2 text-md text-silver`}>Password</label>
                </div>
                <button className='border border-blue-md bg-blue-md p-1 text-lg text-white w-80 rounded'>Login</button>
                
            </form>
        </div>
    );
}

export default Login;
