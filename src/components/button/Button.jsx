import React from 'react';

export const CustomButton = ({children}) => {
  return (
    <div>
        <button className='text-[18px] py-2 px-3  font-medium rounded-md bg-white border-blue-500 border-2	'>{children}</button>

    </div>
  )
}

