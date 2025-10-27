import axios from 'axios'
import { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const ResetPassOtpVerify = ({ email, setOtp }) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      email: email,
      otp: e.target.otp.value
    }

    try {
      const res = await axios.post('/api/auth/reset-password-otp-check', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setOtp('resetPassword')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
    setLoading(false)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Verify OTP</h2>

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
          {/* OTP Input */}
          <div>
            <label htmlFor='otp' className="block text-gray-700">OTP Code</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter your OTP"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center tracking-widest font-semibold"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={`w-full py-2 rounded-lg transition duration-200 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >{
              loading ? (
                <AiOutlineReload className="animate-spin w-full text-center text-white text-xl" />
              ) : (
                "Verify"
              )
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassOtpVerify