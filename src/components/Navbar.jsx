import axios from 'axios'
import { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()
  const handleLogOut = async () => {
    await axios.post('/api/auth/loggedOut', {}, {
      withCredentials: true
    })
  }
  return (
    <div className="py-2 bg-gray-900 text-white px-2 sm:px-0">
      <div className="container mx-auto flex justify-between">
        <div className='text-2xl cursor-pointer' onClick={() => navigate('/')}>
          Authentication
        </div>
        <div className='flex gap-5 text-xl'>
          <button className='bg-blue-700 p-1 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 active:bg-blue-900 transform transition-all duration-300 active:scale-100' onClick={() => navigate('/deshboard')}>Deshboard</button>
          {
            isLoggedIn ? (
              <button className='bg-blue-700 p-1 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 active:bg-blue-900 transform transition-all duration-300 active:scale-100' onClick={handleLogOut}>LogOut</button>
            ) : (
              <button className='bg-blue-700 p-1 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 active:bg-blue-900 transform transition-all duration-300 active:scale-100' onClick={() => navigate('/login')}>LogIn</button>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default navbar