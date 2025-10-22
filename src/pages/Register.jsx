import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import VerifyOtp from '../components/VerifyOtp'

const Register = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(true)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setEmail(formData.email)
      setOtp(!otp)
      console.log('✅ Response:', res)
      alert('Login successful!')
    } catch (error) {
      console.error('❌ Error:', error.response?.data || error.message)
      alert('Login failed!')
    }
  }


  const navigate = useNavigate()


  return (
    <div>
      {otp ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Register</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor='email' className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder='Ex: abcd@gmail.com'
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor='userName' className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="userName"
                    placeholder='Ex: abcd'
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor='password' className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor='confirm_password' className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Register
                </button>
              </form>

              <p className="text-center text-gray-500 mt-4">
                Already have an account? <span className="text-blue-600 font-semibold cursor-pointer" onClick={() => navigate('/login')}>Login</span>
              </p>
            </div>
          </div>
        </div>) :
        (
          <VerifyOtp email={email} setOtp={setOtp} />
        )
      }
    </div>
  )
}

export default Register