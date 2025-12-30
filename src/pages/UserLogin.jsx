import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// import { UserDataContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

//   const { user, setUser } = useContext(UserDataContext)
//   const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData = {
      email: email,
      password: password
    }

    // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    // if (response.status === 200) {
    //   const data = response.data
    //   setUser(data.user)
    //   localStorage.setItem('token', data.token)
    //   navigate('/home')
    // }


    setEmail('')
    setPassword('')
  }
 return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center mt-6 bg-[url('/banner.webp')] h-screen w-full px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to <span className="text-green-500">Sa</span>
          <span className="text-yellow-400">R</span>
          <span className="text-orange-500">LaGo</span>
        </h1>

        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* SIGN UP */}
        <p className="text-center text-sm mt-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Create new account
          </Link>
        </p>

        {/* CAPTAIN LOGIN */}
        <Link
          to="/captain-login"
          className="mt-6 block text-center bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;