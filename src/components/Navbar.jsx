import React from 'react'
import { Link } from 'react-router-dom';
import myProfile from '../assets/profile.png';
import { IoLogoIonitron } from "react-icons/io";

const Navbar = () => { 
  return (
    <div className=''>
      <div className=' fixed w-[1450px] h-15 py-3  bg-zinc-900/90 border border-zinc-600 mt-5 mr-20 rounded-4xl flex items-center justify-between'>
        <div className=' flex items-center  flex-row '>
            <h1 className='text-4xl ml-5 text-yellow-300'><IoLogoIonitron /></h1>
            <h1 className='text-2xl ml-5 font-bold text-zinc-200'>Orgelux</h1>
        </div>
          <div className='flex items-center gap-30'>
            <Link className='hover:text-purple-500' to='/'>Living Room</Link>
            <Link className='hover:text-purple-500' to='/contact'>Bathroom</Link>
            <Link className='hover:text-purple-500' to='/login'>Bedroom</Link>
            <Link className='hover:text-purple-500' to='/keyfeature'>Kitchen</Link>
              <div className='flex flex-row'>
                <img className='w-10 mr-5' src={myProfile} alt="profile" />
                <h3 className='bg-zinc-600/50 px-5 py-2 rounded-4xl mr-10'>Charlie Styles</h3>
              </div>
          </div>
            
      </div>
    </div>
  )
}

export default Navbar