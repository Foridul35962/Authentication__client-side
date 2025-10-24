import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordReset = ({email}) => {
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = {
            email,
            password: e.target.password.value,
            confirm_password: e.target.confirm_password.value
        }
        try {
            await axios.post('/api/auth/reset-password', formData, {
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            navigate('/login')
        } catch (error) {
            
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>
        
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
              type="confirm_password"
              name="confirm_password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordReset