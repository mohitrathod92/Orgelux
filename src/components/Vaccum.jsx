import React from 'react'

const Vaccum = () => {
  return (
    <div>
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
  )
}

export default Vaccum