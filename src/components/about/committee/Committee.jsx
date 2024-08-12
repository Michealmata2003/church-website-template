import React from 'react';
import './Committee.css';
import profile from '../../../assets/profile2.jpg';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { committeeMembers } from './CommitteeData';



const Committee = () => {
  return (
    <div>
      <div className="container">
        <div className='py-5'>
          <h1 className='text-5xl text-center py-3'>Church Committee</h1>
          <h5 className='text-lg text-center'>A brief overview of what you can expect at our worship experiences.</h5>
        </div>
        <div className='staff-member'>
          {
            committeeMembers.map((person) => (
              <div className='my-4'>
                <div className='image-overlay-container'
                 style={{ backgroundImage: `url(${person.picture})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className='overlay'>
                    <div className="social">
                      <FaFacebook />
                      <FaInstagramSquare />
                      <AiFillTikTok />
                      <FaLinkedin />

                    </div>
                  </div>


                </div>
                <h2 className='text-2xl pt-4'>{person.name}</h2>
                <p className='text-lg'>{person.post}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Committee
