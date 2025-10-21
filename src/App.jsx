import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='bg-gray-700'>
      <div>
        <Navbar/>
      </div>
      <Outlet />
    </div>
  )
}

export default App