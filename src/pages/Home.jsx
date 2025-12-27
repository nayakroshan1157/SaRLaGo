import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <div className="bg-cover bg-center bg-[url('/banner.png')] h-screen  flex justify-between flex-col w-full bg-red-400">
        <img className=' w-40 h-40 ml-8'src="/sarlago.png" alt="" />
   
      <div className="bg-white py-4 px-4">
      
        <h2 className='text-3xl font-bold'>Get Started with SaRLaGo</h2>
        <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 round mt-4'>Continue</Link>
        
        
      </div>

    </div>
      
    </div>
    
  )
}

export default Home
