import React from 'react';
import { ConnectedData } from './ConnectedData';

const ConnectedBlog = () => {
    return (
        <div className='grid grid-cols-4 gap-[20px]'>
            {
                ConnectedData.map((data) => (
                    <div key={data.id} className='shadow-lg	'>
                        <div>
                            <img src={data.img} alt="" />
                        </div>
                        <div className='p-2	'>
                            <h3 className='text-black font-bold text-[18px]'>{data.title}</h3>
                            <p className='text-black font-normal py-2 text-[16px]'>{data.details}</p>
                            <button className='bg-general p-2.5 text-[16px] font-bold text-white'>{data.button}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ConnectedBlog