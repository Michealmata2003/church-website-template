import React from 'react';
import SermonBlog from './SermonBlog';

const Sermon = () => {
  return (
    <div>

      <div className='container'>
        <div>
          <div className='text-center m-auto justify-center py-3'>
            <h1 className='text-4xl py-2 font-bold'>LATEST SERMON</h1>
            <h5 className='text-lg w-3/4 m-auto text-center py-2'>A church isn't a building—it's the people. We meet in locations around the United States and globally at the desciples Church Online. No matter where you join us.</h5>
          </div>
          <SermonBlog />
        </div>
      </div>

    </div>
  )
}

export default Sermon