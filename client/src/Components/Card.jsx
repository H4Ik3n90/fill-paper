import React from 'react';

// import some svg
import Delete from '../Images/noteEdit/delete.svg';

const Card = ({show}) => {
    return (
        <div className={`flex flex-col border-y pt-4 pb-4 ${show === false ? "scale-x-0" : "delay-300"}`}>
            {/* make card for note preview */}
            <div className='flex mb-2'>
                <div className='ml-5'>
                    <h3 className='text-md'><b>Judul</b></h3>
                    <p className='text-sm'>Another note application for just for demo</p>
                </div>
            </div>

            {/* footer part */}
            <div className='relative'>
                {/* date of created note */}
                <p className='text-[0.7em] ml-5'>27/12/2020</p>

                {/* delete logo */}
                <img src={Delete} alt="delete_note" className='absolute right-[7%] bottom-0 cursor-pointer' width={14} height={14} />
            </div>
        </div>
    );
}

export default Card;
