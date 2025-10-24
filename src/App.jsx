import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { CheckLogin } from './store/store'
import axios from 'axios'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const checkLoginStatus = async()=>{
      try {
        await axios.get('/api/user/',{
          withCredentials: true
        }).then(()=>{
          setIsLoggedIn(true)
        }).catch(()=>{})
      } catch (error) {
      }
    }
    checkLoginStatus()
  },[])
  return (
    <div className='bg-gray-700'>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <CheckLogin.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Outlet />
      </CheckLogin.Provider >
    </div>
  )
}

export default App