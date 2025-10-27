import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const ResetPass = ({ setUserEmail, setOtp }) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      email: e.target.email.value
    }
    try {
      await axios.post('/api/auth/reset-password-otp', formData, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true
      })
      setUserEmail(formData.email)
      setOtp('checkOtp')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
    setLoading(false)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Reset Password</h2>
        <div>
          {error.length > 0 && (
            <div className="bg-red-50 p-2 rounded-md mt-2">
              <ul className="list-disc ml-4 text-red-600 text-sm">
                  <li>{error}</li>
              </ul>
            </div>
          )}
        </div>
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

          <button type="submit" className={`w-full py-2 rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >{
              loading ? (
                <AiOutlineReload className="animate-spin w-full text-center text-white text-xl" />
              ) : (
                "Enter"
              )
            }
          </button>
        </form>

      </div>
    </div>
  )
}

export default ResetPass