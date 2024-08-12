import React from 'react';
import Logos from '../../assets/oluwaseun_logo_new3.svg';
import { Link } from 'react-router-dom';
import { CustomButton } from '../button/Button';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className='flex justify-between py-3 text-center'>
                    <div className='logo'>
                        <img src={Logos} alt="logo" />
                    </div>
                    <nav className='flex gap-3 text-center m-auto'>
                        <li className='text-[18px]'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-[18px]'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='text-[18px]'>
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className='text-[18px]'>
                            <Link to='/sermons'>Sermons</Link>
                        </li>
                        <li className='text-[18px]'>
                            <Link to='/choir'>Choir</Link>
                        </li>
                    </nav>
                    <div className="">
                        <CustomButton>Contact Us</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar