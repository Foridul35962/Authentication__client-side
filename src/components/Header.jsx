import React from 'react'

const Header = () => {
    return (
        <div className='text-2xl flex flex-col justify-center gap-3.5'>
            <h2>
                Hey Delevoper
            </h2>
            <h1>
                Welcome to Our app
            </h1>
            <h3 className=''>
                Let's Start with a quick product tour and <br /> we will have you up and running in no time! 
            </h3>
            <div className='w-full flex justify-center'>
            <button className='bg-blue-700 p-1 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 active:bg-blue-900 transform transition-all duration-300 active:scale-100'>Get Started</button>
            </div>
        </div>
    )
}

export default Header