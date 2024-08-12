import React from 'react';
import mission from '../../../assets/mission.png';

const Mission = () => {
    return (
        <div className='py-[10rem] relative '>
            <div className="container">
                <div className='flex justify-between gap-[3rem]'>
                    <div className="w-1/2 h-full m-auto ">
                        <div className="pb-7">
                            <h1 className='font-bold text-4xl' >Our Missions</h1>
                            <p className='text-lg leading-9 w-4/5'>

                                The church exist to build a people who are Christ centered and Spirit driven, taught to know God for themselves. Influencing individuals, cities and nations with the light of the glorious gospel as ambassadors of the kingdom.
                            </p>
                        </div>
                        <div className="pt-7">
                            <h1 className='font-bold text-4xl py-3'>Our Visions</h1>
                            <p className='text-lg leading-9 w-4/5'>

                                The church exist to build a people who are Christ centered and Spirit driven, taught to know God for themselves. Influencing individuals, cities and nations with the light of the glorious gospel as ambassadors of the kingdom.
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2 h-full m-auto  '>
                        <img className='w-[80%] h-[90%] shadow-[10px__12px_0px_1px_rgba(236,16,12,0.75)]' src={mission} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission