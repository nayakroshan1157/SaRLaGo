import React, { useContext } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
// import Riding from './pages/Riding'
// import CaptainRiding from './pages/CaptainRiding'
// import 'remixicon/fonts/remixicon.css'
const App = () => {
  return (
    <div className='bg-amber-950'>
        
       <nav className="flex justify-between items-center px-1 md:px-1 lg:px-20 py-1 bg-[url('/navbar.webp')] shadow-lg">

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
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        {/* <Route path='/captain-riding' element={<CaptainRiding />} /> */}

        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
          
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App



