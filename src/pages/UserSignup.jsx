import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

//   const navigate = useNavigate()



//   const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    setUserData({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    })

    // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center mt-6 bg-[url('/banner.webp')] h-screen w-fullpx-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Create your{" "}
          <span className="text-green-500">Sa</span>
          <span className="text-yellow-400">R</span>
          <span className="text-orange-500">LaGo</span> account
        </h1>

        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-2">
              What’s your name?
            </label>
            <div className="flex gap-4">
              <input
                required
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

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
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Create password
            </label>
            <input
              required
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Create account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login here
          </Link>
        </p>

        {/* FOOTER */}
        <p className="text-[10px] leading-tight text-center mt-6 text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline cursor-pointer">Google Privacy Policy</span>{" "}
          and{" "}
          <span className="underline cursor-pointer">
            Terms of Service
          </span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;









