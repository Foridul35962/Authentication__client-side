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
        const res = await axios.get('http://localhost:3000/api/user/',{
          withCredentials: true
        })
        console.log(res);
        
        setIsLoggedIn(true)
      } catch (error) {
        setIsLoggedIn(false)
        console.log('false',error);
        
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