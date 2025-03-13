import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full '>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 "></div>
      </div>
      <div className='container mx-auto px-10'>
        <Navbar/>
        <Home/>
      </div>
    </div>

  )
}

export default App