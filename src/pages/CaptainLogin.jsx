// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// // import { useNavigate } from 'react-router-dom'
// // import axios from 'axios'
// // import { CaptainDataContext } from '../context/CapatainContext'

// const Captainlogin = () => {

//   const [ email, setEmail ] = useState('')
//   const [ password, setPassword ] = useState('')
//   const [ captainData, setCaptainData ] = useState('')


//   // const { captain, setCaptain } = React.useContext(CaptainDataContext)
//   // const navigate = useNavigate()



//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setCaptainData({
//       email: email,
//       password
//     })

//     // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

//     // if (response.status === 200) {
//     //   const data = response.data

//     //   setCaptain(data.captain)
//     //   localStorage.setItem('token', data.token)
//     //   navigate('/captain-home')

//     // }

//     setEmail('')
//     setPassword('')
//   }
//   return (
//     <div className='p-7 h-screen flex flex-col justify-between'>
//       <div>
        

//         <form onSubmit={(e) => {
//           submitHandler(e)
//         }}>
//           <h3 className='text-lg font-medium mb-2'>What's your email</h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value)
//             }}
//             className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
//             type="email"
//             placeholder='email@example.com'
//           />

//           <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

//           <input
//             className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value)
//             }}
//             required type="password"
//             placeholder='password'
//           />

//           <button
//             className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
//           >Login</button>

//         </form>
//         <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
//       </div>
//       <div>
//         <Link
//           to='/login'
//           className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
//         >Sign in as User</Link>
//       </div>
//     </div>
//   )
// }

// export default Captainlogin

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { CaptainDataContext } from '../context/CapatainContext'

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center mt-6 bg-[url('/banner.webp')] h-screen w-full  px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Captain{" "}
          <span className="text-green-500">Sa</span>
          <span className="text-yellow-400">R</span>
          <span className="text-orange-500">LaGo</span>
        </h1>

        {/* FORM */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              required
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              required
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login as Captain
          </button>
        </form>

        {/* REGISTER */}
        <p className="text-center text-sm mt-4">
          Join a fleet?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-600 font-medium"
          >
            Register as a Captain
          </Link>
        </p>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* USER LOGIN */}
        <Link
          to="/login"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center hover:bg-orange-600 transition"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
