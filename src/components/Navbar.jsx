import React from 'react'
import { useNavigate } from 'react-router-dom'

const navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="py-2 bg-gray-900 text-white px-2 sm:px-0">
      <div className="container mx-auto flex justify-between">
        <div className='text-2xl cursor-pointer'>
          Authentication
        </div>
        <div className='flex gap-5 text-xl'>
          <button className='bg-blue-700 p-1 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 active:bg-blue-900 transform transition-all duration-300 active:scale-100' onClick={()=>navigate('/login')}>LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default navbar