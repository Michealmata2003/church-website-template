import React from 'react';
import './Hero.css';
import HeroText from './Text';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='overlay'>
                <div className="container">
                    <HeroText />
                </div>
            </div>

        </div>
    )
}

export default Hero