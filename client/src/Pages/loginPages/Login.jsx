import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex-1'>
            <h1 className='text-3xl text-center pt-20 pb-2'>Welcome</h1>
            <p className='text-center pb-2 text-silver'>Write your notes anywhere and anytime</p>
            <form className='flex flex-col pt-[2%] items-center'>
                <input type="text" className='border-2 h-10 rounded bg-blue-smooth focus-within:outline-blue-md w-80 mb-6'/>
                <input type="text" className='border-2 h-10 rounded bg-blue-smooth focus-within:outline-blue-md w-80 mb-10'/>
                <button className='border border-blue-md bg-blue-md p-1 text-lg text-white w-80 rounded'>Login</button>
                
            </form>
        </div>
    );
}

export default Login;
