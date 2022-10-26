import React from 'react';

const Card = ({show}) => {
    return (
        <div className={`flex flex-col border-y pt-4 pb-4 ${show === false ? "scale-x-0" : "delay-300"}`}>
            <div className='flex mb-2'>
                <div className='ml-5'>
                    <h3 className='text-md'><b>Judul</b></h3>
                    <p className='text-sm'>Apaan ini body nya kok kosong gini dawdaw</p>
                </div>
            </div>
            <p className='text-[0.7em] ml-5'>27/12/2020</p>
        </div>
    );
}

export default Card;
