import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import VerifyOtp from '../components/VerifyOtp'
import { AiOutlineReload } from 'react-icons/ai'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(true)
  const [error, setError] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value
    }

    try {
      await axios.post('/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setEmail(formData.email)
      setOtp(!otp)
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong')
      e.target.password.value = ''
      e.target.confirm_password.value = ''
    }
    setLoading(false)
  }


  const navigate = useNavigate()


  return (
    <div>
      {otp ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Register</h2>
              <div>
                {error.length > 0 && (
                  <div className="bg-red-50 p-2 rounded-md mt-2">
                    <ul className="list-disc ml-4 text-red-600 text-sm">
                      {error.map((item, idx) => (
                        <li key={idx}>{item.msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
                  className={`w-full py-2 rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {loading ? (
                    <AiOutlineReload className="animate-spin w-full text-center text-white text-xl" />
                  ) : (
                    "Register"
                  )}
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