import React from 'react';
import ConnectedBlog from './ConnectedBlog';



const Connected = () => {
    return (
        <div className=''>
            <div className='  container '>
                <h1 className='w-full text-center justify-center m-auto text-5xl py-4'>STAY CONNECTED</h1>
                <div className='py-5'>
                    <ConnectedBlog />
                </div>
            </div>
        </div>
    )
}

export default Connected