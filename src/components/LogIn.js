'use client'
import React, { useState } from 'react';


const LogIn = () => {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

  const login =(e)=>{
    e.preventDefault();
    setUsername("");
    setPassword("");
    console.log(username,password);

  }
  return (
    <div>
        <div className='flex items-center justify-center '>
          <p className='text-white text-3xl mt-20 font-semibold'>Log in your account</p>
        </div>
        <div className='w-[600px] h-[400px] bg-white text-black mx-auto mt-10 rounded-lg border-[1px] border-black'>
          <div className='flex flex-col justify-center items-start mt-14'>
            <p className='text-2xl mx-10 underline underline-offset-4 font-semibold'>Username or email address</p>
            <input 
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
              type="text" 
              placeholder='Enter your username or email address'
              className='w-[500px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '
              />
          </div>
          <div className='flex flex-col justify-center items-start mt-5'>
            <p className='text-2xl mx-10 underline underline-offset-4 font-semibold'>Password</p>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password} 
              type="password" 
              placeholder='Enter your password'
              className='w-[500px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '
              />
          </div>
          <div className='flex items-center justify-center'>
              <button
                onClick={login} 
                type='reset'
                className='mt-8 text-3xl font-semibold  bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white'>Log In
              </button>
          </div>
          
        </div>
    </div>
  )
}

export default LogIn