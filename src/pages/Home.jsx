import React from 'react'
import myImg from '../assets/home2.jpg';
import myLamp from '../assets/lamp.png';
import myTime from '../assets/time.png';
import myVaccum from '../assets/vaccum.png';
import myButton from '../assets/button.png';
import { CiBrightnessUp } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { IoCube } from "react-icons/io5";
import { IoBatteryCharging } from "react-icons/io5";



const Home = () => {
  return (
    <div className=''>
        <div className=' flex flex-col'>
            <div className='flex items-center justify-between mt-25 gap-5'>
                <div className='flex relative rounded-3xl border border-zinc-500'>
                    <img className=' overflow-hidden rounded-3xl w-[900px] h-[300px]' src={myImg} alt="room" />
                    <div className='absolute flex items-center  justify-evenly gap-20 top-15 left-20'>
                        <h1 className='bg-zinc-800/100 px-3 rounded-3xl mr-40'>Live</h1>
                            <h3 className='bg-zinc-800/70 px-3 rounded-3xl'>50%</h3>
                            <h3 className='bg-zinc-800/70 px-3 rounded-3xl'>70%</h3>
                            <h3 className='bg-zinc-800/70 px-3 rounded-3xl'>21%</h3>
                            <h3 className='bg-zinc-800/70 px-3 rounded-3xl'>350W</h3>
                    </div>
                </div>
                <div className='rounded-3xl bg-zinc-900/90 border border-zinc-600 w-[500px] h-[300px]'>
                    <div className='mt-5 mx-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-bold'>Activity</h1>
                                <p className='text-[10px] text-gray-400'>Document 12-2024</p>
                            </div>
                            <div>
                                <h1>See All</h1>
                            </div>
                        </div>
                            <div className='flex items-center'>
                                <div className='text-[13px]'>
                                    <h1>07:25</h1>
                                    <p>AM</p>
                                </div>
                                <div className='bg-zinc-800 p-3 ml-5 mt-4 rounded-2xl w-full'>
                                    <h1 className='text-[13px] font-semibold'>Smart Plug</h1>
                                    <p className='text-gray-400 text-[10px]'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='text-[13px] '>
                                    <h1>07:25</h1>
                                    <p>AM</p>
                                </div>
                                <div className='bg-zinc-800 p-3 ml-5 mt-4 rounded-2xl w-full'>
                                    <h1 className='text-[13px] font-semibold'>Smart Plug</h1>
                                    <p className='text-gray-400 text-[10px]'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='text-[13px]'>
                                    <h1>07:25</h1>
                                    <p>AM</p>
                                </div>
                                <div className='bg-zinc-800 p-3 ml-5 mt-4 rounded-2xl w-full'>
                                    <h1 className='text-[13px] font-semibold'>Smart Plug</h1>
                                    <p className='text-gray-400 text-[10px]'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div> 
            
            <div className='flex items-center justify-between mt-5 gap-5'>
                <div className='rounded-3xl bg-zinc-900/90 border border-zinc-600 w-[300px] h-[300px]'>
                    <div className='mt-5 mx-5 '>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-bold'>Sart Lamp</h1>
                                <p className='text-[10px] text-gray-400'>5 Devices</p>
                            </div>
                            <div>
                                <img className='w-8' src={myButton} alt="button" />
                            </div>
                        </div>
                            <div>
                                <img className=' w-40 ml-10 mt-3 mb-3' src={myLamp} alt="lamp"/>
                                <div className='relative flex items-center justify-between h-10 bg-zinc-800 rounded-3xl p-2 px-7 text-[15px]'>
                                    <h1 className='absolute left-0 px-13 text-2xl bg-zinc-200 text-black p-2 rounded-3xl'>
                                        <CiBrightnessUp />
                                    </h1>
                                    <h1 className='absolute right-7 font-semibold'>50%</h1>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='rounded-3xl bg-zinc-900/90 border border-zinc-600 w-[300px] h-[300px]'>
                    <div className='mt-5 mx-5 '>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-bold'>Air Conditioner</h1>
                                <p className='text-[10px] text-gray-400'>Full House</p>
                            </div>
                            <div>
                                <img className='w-8' src={myButton} alt="button" />
                            </div>
                        </div>
                        <div >
                            <img className='w-30 ml-14 mt-10 mb-5' src={myTime} alt="time" />
                            <div className='flex items-center justify-between p-2 w-full'>
                                <div className='flex items-center justify-between '>
                                    <div>
                                        <h1 className='text-xl bg-zinc-700 p-2 rounded-3xl'>
                                            <CiBrightnessUp />
                                        </h1>
                                    </div>
                                    <div className=' ml-2'>
                                        <h1 className='text-[13px] font-semibold'>Auto</h1>
                                        <p className='text-[10px] text-gray-400'>Auto Mode</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-xl bg-zinc-700 p-2 rounded-3xl'>
                                            <MdAccessTime />
                                        </h1>
                                    </div>
                                    <div className=' ml-2'>
                                        <h1 className='text-[13px] font-semibold'>32 Min</h1>
                                        <p className='text-[10px] text-gray-400'>Cooling Time</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
                <div className=' relative rounded-3xl bg-zinc-900/90 border border-zinc-600 w-[900px] h-[300px]'>

                    <div className='absolute top-20 left-40 bg-zinc-700 px-8 py-1 rounded-[5px] text-[12px]'>
                        <h1>09:00 AM</h1>
                        <p>Next Cleaning</p>
                    </div>
                    <div className='absolute top-45 right-40 bg-zinc-700 px-8 py-1 rounded-[5px] text-[12px]'>
                        <h1>50%</h1>
                        <p>Final Status</p>
                    </div>

                    <div className='mt-5 mx-5 '>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='font-bold'>Robot Vaccum Cleaner</h1>
                                    <p className='text-[10px] text-gray-400'>4 Devices</p>
                                </div>
                                <div>
                                    <img className='w-8' src={myButton} alt="button" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <img className='w-40 mt-3' src={myVaccum} alt="vaccum" />
                                <div className='flex w-full items-center justify-between rounded-3xl p-2 px-7 text-[15px]'>
                                    
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='text-xl bg-zinc-700 p-2 rounded-3xl mt-2'><IoCube /></h1>
                                        </div>
                                        <div className=' ml-2'>
                                            <h1 className='text-[13px]'>58M</h1>
                                            <p className='text-[10px] text-gray-400'>Lorem, ipsum</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='text-xl bg-zinc-700 p-2 rounded-3xl'>
                                                <MdAccessTime />
                                            </h1>
                                        </div>
                                        <div className=' ml-2'>
                                            <h1 className='text-[13px]'>30 Min</h1>
                                            <p className='text-[10px] text-gray-400'>Cooling Time</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='text-xl bg-zinc-700 p-2 rounded-3xl'>
                                                <IoBatteryCharging />
                                            </h1>
                                        </div>
                                        <div className=' ml-2'>
                                            <h1 className='text-[13px]'>62%</h1>
                                            <p className='text-[10px] text-gray-400'>Cooling Time</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
        </div>
        
    </div>
  )
}

export default Home