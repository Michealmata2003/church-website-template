import React from 'react';
import { CustomButton } from '../button/Button';

const HeroText = () => {
    return (
        <div className=' flex text-center h-full m-auto w-full align-center justify-center'>
            <div className='flex text-center m-auto '>
                <div className='w-2/3 m-auto'>
                    <h1 className='text-3xl text-white  py-4 m-auto text-black'>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem
                        ipsum lorem ipsum Lorem ipsum lorem ipsum</h1>
                    <h6 className=' text-white py-4 w-2/3 m-auto '>Lorem ipsum lorem ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                        Lorem IpsumLorem Ipsum
                    </h6>
                    <CustomButton >Donate  Online</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default HeroText;