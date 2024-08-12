import React from 'react';
import '../About.css';
import AboutWelcome from '../welcome/AboutWelcome';

const Index = () => {
  return (
    <div>
      <div className="about">
        <div className='container '>
          <div className='flex text-center h-full m-auto w-full align-center justify-center'>
            <div className='w-2/3  m-auto'>
              <h5 className='text-2xl text-white  py-2'>ABOUT US</h5>
              <div className='about-hero-name'>
                CCC OLUWASEUN PARISH V
                <div className="underline-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutWelcome />
    </div>

  )
}

export default Index