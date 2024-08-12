import React from 'react';
import { SermonData } from './sermonData';
import { FaVideo, FaCloudDownloadAlt,FaClock } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { MdPerson } from "react-icons/md";





const SermonBlog = () => {
    return (
        <div className=' w-full grid grid-cols-3 gap-[20px]'>
            {
                SermonData.map((blog) => (
                    <div >
                        <div>
                            <img className='rounded-md' src={blog.image} alt="" />
                        </div>
                        <div className='p-2	'>
                            <span className='flex gap-[20px] py-2'>
                                <FaVideo className='cursor-pointer text-[#636363]' />
                                <FaHeadset className='cursor-pointer text-[#636363]' />
                                <IoIosDocument className='cursor-pointer text-[#636363]' />
                                <FaCloudDownloadAlt className='cursor-pointer text-[#636363]' />
                            </span>
                            <h2 className='text-black font-bold text-[18px] py-3 border-b-2 '>{blog.title}</h2>

                            <p className='text-black font-normal py-2 text-[16px] flex gap-[15px]'><MdPerson />{blog.sermoner}</p>
                            <p className='flex gap-[15px] text-[#636363]'><FaClock /> {blog.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SermonBlog