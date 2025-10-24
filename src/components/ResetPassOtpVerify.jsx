import axios from 'axios'

const ResetPassOtpVerify = ({ email, setOtp }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      email: email,
      otp: e.target.otp.value
    }

    try {
      const res = await axios.post('/api/auth/reset-password-otp-check', formData, {
        headers:{
          'Content-Type': 'application/json'
        }
      })
      setOtp('resetPassword')
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
      </div>
    </div>
  )
}

export default ResetPassOtpVerify