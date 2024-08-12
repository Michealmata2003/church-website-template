import React from 'react';
import './Index.css';
import { BiChurch, BiBible } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";



const AboutWelcome = () => {
    return (
        <section className='w-full m-auto justify-center flex'>
                <div className='aboutsection'>
                    <div className='border-r-2 p-[2rem] text-center m-auto relative'>
                        <BiChurch className='text-5xl w-full text-center' />
                        <h2 className='text-2xl py-2'>Founded in 1878</h2>
                        <p>Duis lobortis massa quam.</p>
                    </div>
                    <div className=' p-[2rem]'>
                        <BiBible className='text-5xl w-full text-center'/>
                        <h2  className='text-2xl py-2'>Rich History</h2>
                        <p>Duis lobortis massa quam.</p>
                    </div>
                    <div className='border-l-2 text-center m-auto border-[#DDDDDD] p-[2rem]'>
                        <IoIosPeople className='text-5xl w-full text-center'/>

                        <h2  className='text-2xl py-2'>Great Community </h2>
                        <p>Duis lobortis massa quam.</p>
                    </div>
                </div>
        </section>
    )
}

export default AboutWelcome