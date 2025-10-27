import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const PasswordReset = ({ email }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      email,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value
    }
    try {
      await axios.post('https://authentication-server-side.vercel.app/api/auth/reset-password', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong')
    }
    setLoading(false)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>

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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
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
          >{loading ? (
            <AiOutlineReload className="animate-spin w-full text-center text-white text-xl" />
          ) : (
            "Reset Password"
          )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordReset