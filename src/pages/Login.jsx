import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckLogin } from '../store/store'
import { AiOutlineReload } from 'react-icons/ai';

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { isLoggedIn, setIsLoggedIn } = useContext(CheckLogin)

  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      await axios.post('https://authentication-server-side.vercel.app/api/auth/loggedIn', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      setIsLoggedIn(true)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
      e.target.password.value = ''
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder='abcd@gmail.com'
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Forget Password?{' '}
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => navigate('/reset-password')}
            >
              Reset Password
            </span>
          </p>

          <div>
            {
              error &&
              <div className="bg-red-100 text-red-700 p-2 rounded-md text-sm">
                {error}
              </div>
            }
          </div>

          <button type="submit" className={`w-full py-2 rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            {loading ? (
              <AiOutlineReload className="animate-spin w-full text-center text-white text-xl" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{' '}
          <span
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={() => navigate('/registration')}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login