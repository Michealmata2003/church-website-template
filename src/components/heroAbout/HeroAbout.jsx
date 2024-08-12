import React from 'react'
import Text from './Text'
import { NavLink } from 'react-router-dom'
import welcome from '../../assets/welcome.jpg'

const HeroAbout = () => {
    return (
        <div className='container'>
            <div className='flex justify-between w-full gap-[50px] py-7'>
                <div className="w-1/2">
                    <img src={welcome} alt="" />
                </div>
                <div className="w-1/2">

                    <Text />

                </div>
            </div>
        </div>
    )
}

export default HeroAbout