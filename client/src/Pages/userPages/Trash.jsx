import React, {useEffect,useState} from 'react';
import { motion } from 'framer-motion';

const Trash = () => {
    return (
        <>
            <title>Fill Paper | Trash</title>
            <div className='flex-1 w-screen'>
                <motion.h1 initial={{opacity: 1}} transition={{duration: 1.5}} animate={{opacity: 0}}>Hello World</motion.h1>
            </div>
        </>
    );
}

export default Trash;
