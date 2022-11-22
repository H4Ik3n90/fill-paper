import React, {useState} from 'react';

// import style here
import '../../style/Signup.css';

const Signup = () => {
    // placeholder status
    const [isEmail,setIsEmail] = useState();
    const [isPass,setIsPass] = useState();
    const [isRePass,setIsRePass] = useState();

    // set placeholder hidden
    const emailHidden = (e) => e.target.value.length === 0 ? setIsEmail('') : setIsEmail('hidden');
    const pwdHidden = (e) => e.target.value.length === 0 ? setIsPass('') : setIsPass('hidden');
    const rePwdHidden = (e) => e.target.value.length === 0 ? setIsRePass('') : setIsRePass('hidden');

    return (
        // create login page
        <div className='signup-page'>
            {/* page title */}
            <title>Fill Paper | Signup</title>

            {/* header text login */}
            <h1 className='title-signup'>Signup</h1>

            {/* login form */}
            <form className='signup-form'>
                {/* email input */}
                <div className='input-container'>
                    <input type="text" className={`email`} 
                        onInput={(e) => emailHidden(e)}
                    />
                    <label className={`${isEmail} placeholder-email`}>Email</label>
                </div>

                {/* username input */}
                <div className='input-container'>
                    <input type="text" className={`username`} 
                        onInput={(e) => emailHidden(e)}
                    />
                    <label className={`${isEmail} placeholder-username`}>username</label>
                </div>

                {/* password input */}
                <div className='input-container'>
                    <input type="text" className={`password`} 
                        onInput={(e) => pwdHidden(e)}
                    />
                    <label className={`${isPass} placeholder-password`}>Password</label>
                </div>

                {/* Re-enter Password */}
                <div className='input-container'>
                    <input type="text" className={`re-password`} 
                        onInput={(e) => rePwdHidden(e)}
                    />
                    <label className={`${isRePass} placeholder-re-password`}>Re-Password</label>
                </div>

                {/*  */}

                {/* Signup */}
                <input type="submit" className='submit' value="Create Account" />
            </form>
        </div>
    );
}

export default Signup;
