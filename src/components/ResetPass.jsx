import axios from 'axios'
import React from 'react'

const ResetPass = ({setUserEmail, setOtp}) => {
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData ={
      email: e.target.email.value
    }
    try {
      await axios.post('/api/auth/reset-password-otp',formData,{
        headers:{
          "Content-Type": 'application/json'
        },
        withCredentials: true
      })
      setUserEmail(formData.email)
      setOtp('checkOtp')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Reset Password</h2>
        
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}

export default ResetPass