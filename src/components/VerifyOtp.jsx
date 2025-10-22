import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = ({ email, setOtp }) => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      email: email,
      otp: e.target.otp.value
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/verifyEmail', formData, {
        headers:{
          'Content-Type': 'application/json'
        }
      })
      console.log(res.data);
      setOtp(true)
      navigate('/login')
    } catch (error) {
      console.log('error: ',error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Verify OTP</h2>

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
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Verify
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Didn’t get the code?{' '}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  )
}

export default VerifyOtp