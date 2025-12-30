import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <div className='bg-amber-950'>
      {/* <nav className="bg-cover h-40 px-4 md:px-15 lg:px-20 py-4 bg-[url('/navbar.webp')]">
          <Link to="/" >
              <img
        className="w-40 h-40 ml-0 mt-0"
        src="/sarlago.png"
        alt="SaRLaGo Logo"
        />
        </Link>
           <ul className="flex space-x-10 justify-between items-center px-4 md:px-15 lg:px-20 py-4">
          <li>
            <Link href="/" className="text-blue-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">About Us</Link>
          </li>
        
        </ul>   
      </nav> */}
       <nav className="flex justify-between items-center px-4 md:px-15 lg:px-20 py-4 bg-[url('/navbar.webp')] shadow-lg">

      {/* Logo Section */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Link
          href="/" className="text-white hover:text-blue-300 transition duration-300">
          <img
            src="/sarlago.png"
            alt="Doc.AI Logo"
            width={180}
            height={180}
            className="rounded-full"
          />

        </Link>
      </div>

      <div className="">
          <ul className="flex space-x-10 justify-between items-center px-4 md:px-15 lg:px-20 py-4">
          <li>
            <Link href="/" className="text-blue-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-50 hover:text-sky-600 font-medium transition duration-300 hidden md:block">About Us</Link>
          </li>
        
        </ul>  
      </div>
    </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App



