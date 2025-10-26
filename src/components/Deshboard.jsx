import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Deshboard = () => {
    const navigate = useNavigate()
    const [findUser, setFindUser] = useState({})
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await axios.get('/api/user/')
                const user = res.data
                setFindUser(user.data)
                if (!user.success) {
                    navigate('/login')
                }
            } catch (error) {
                console.log(error.response.data)
                navigate('/login')
            }
        }
        getUser()
    }, [])


    return (
        <div className='text-2xl h-dvh text-center text-white flex flex-col justify-center gap-3.5'>
            <h2>
                Hey {findUser.userName}
            </h2>
            <h1>
                Your are loggedIn and access all pages
            </h1>
        </div>
    )
}

export default Deshboard