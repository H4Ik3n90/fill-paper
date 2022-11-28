import React from 'react';

// import some svg
import Delete from '../Images/noteEdit/delete.svg';

const Card = ({show}) => {
    return (
        <div className={`flex flex-col border-b-[1px] pt-4 pb-4 ${show === false ? "scale-x-0" : "delay-300"}`}>
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
                <div className='absolute z-0 right-4 bottom-0 hover:bg-silver-light p-[0.2rem]'>
                    <img src={Delete} alt="delete_note" width={14} height={14} />
                </div>
            </div>
        </div>
    );
}

export default Card;
