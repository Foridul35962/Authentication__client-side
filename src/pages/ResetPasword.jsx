import React, { useState } from 'react'
import ResetPass from '../components/ResetPass'
import PasswordReset from '../components/PasswordReset'
import ResetPassOtpVerify from '../components/ResetPassOtpVerify'

const ResetPasword = () => {
    const [otp, setOtp] = useState('sendOtp')
    const [userEmail, setUserEmail] = useState('')
  return (
    <div>
        {
            otp === 'sendOtp' ? <ResetPass setUserEmail={setUserEmail} setOtp={setOtp} /> : (
                otp === 'checkOtp'? <ResetPassOtpVerify email={userEmail} setOtp={setOtp} /> : <PasswordReset email={userEmail} /> )
        }
    </div>
  )
}

export default ResetPasword