import React from 'react';
import logo from '../../assets/oluwaseun_logo_new3.svg';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoSendSharp } from "react-icons/io5";





// 3B71FE

const Footer = () => {
    return (
        <div className='container'>

            <div className='grid grid-cols-4 gap-4 py-3'>
                <div>
                    <div className='flex items-center gap-[15px]'>
                        <img src={logo} alt="" />
                        <h1 className='text-[20px] font-bold'>OLUWASEUN V</h1>
                    </div>
                    {/* <p>This is a hub for all people with faith and a place to find your peace in God.</p> */}

                    <div className='py-5'>
                        <p className='flex gap-2 items-center text-[16px]'> <FaLocationDot className='text-general' /> Cloud Avenue, 887 Road, USA       </p>
                        <p className='flex gap-2 items-center text-[16px]'> <IoIosMail  className='text-general'/>    church@gmail.com                </p>
                        <p className='flex gap-2 items-center text-[16px]'> <FaPhoneAlt className='text-general' />     +234 81 2331 5678               </p>

                    </div>

                </div>
                <div className='justify-center m-auto'>
                    <h2 className='text-[20px] font-bold'>Quick Link</h2>
                    <div className='flex flex-col	'>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/'>Home</Link>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/about'>About</Link>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/blogs'>Blogs</Link>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/sermon'>Sermon</Link>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/choir'>Choir</Link>
                        <Link className='text-[16px] text-grey font-semibold hover:text-general' to='/contact'>Contact</Link>
                    </div>

                </div>
                {/* latest blogs */}
                <div className='justify-center '>
                    <h2 className='text-[20px] font-bold'>Social Media</h2>
                    <div className='flex flex-col	'>
                        <Link to='/' className='flex gap-2 item-center text-[16px] text-grey'> <FaFacebookF  className='text-general'/> : Facebook </Link>
                        <Link to='/' className='flex gap-2 item-center text-[16px] text-grey'> <RiInstagramFill  className='text-general'/> :  Instagram</Link>
                        <Link to='/' className='flex gap-2 item-center text-[16px] text-grey'> <FaTwitter  className='text-general'/> : Twitter </Link>
                        <Link to='/' className='flex gap-2 item-center text-[16px] text-grey'> <FaTiktok  className='text-general'/>  : Tik Tok</Link>
                    </div>

                </div>
                {/* newsletter */}
                <div>
                    <h2>NEWSLETTER</h2>
                    <div>
                        <input type="text" placeholder='Enter Email Address' className='border-b-2 outline-none	'/>
                        <button><IoSendSharp /> Send</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer