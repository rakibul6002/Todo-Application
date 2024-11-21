'use client'
import React, { useState } from 'react';


const SignUp = () => {


 
  return (
    <div>
        <div className='flex items-center justify-center '>
            <p className='mt-20 text-white text-3xl font-semibold'>Sign up your account</p>
        </div>
        <div className='w-[950px] h-[600px] bg-white text-black mx-auto mt-10 rounded-lg border-[1px] border-black'>
            <div className='mt-5 flex justify-center'>

                <div>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>First Name</p>
                    <input 
                        type="text"
                        placeholder='Enter your first name...'  
                        className='w-[400px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '/>
                </div>
                <div>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>Last Name</p>
                    <input 
                        type="text"
                        placeholder='Enter your last name...'  
                        className='w-[400px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '/>
                </div>
            </div>
            <div className='mt-5'>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>User name</p>
                    <input 
                        type="text"
                        placeholder='Enter your username...'  
                        className='w-[870px] h-12 px-5 mx-10  mt-5 border-[1px] border-black rounded-md '/>
            </div>
            <div className='mt-5'>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>Email address</p>
                    <input 
                        type="text"
                        placeholder='Enter your email address...'  
                        className='w-[870px] h-12 px-5 mx-10  mt-5 border-[1px] border-black rounded-md '/>
            </div>
            <div className='mt-5 flex justify-center'>

                <div>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>Password</p>
                    <input 
                        type="text"
                        placeholder='Enter a password...'  
                        className='w-[400px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '/>
                </div>
                <div>
                    <p className='text-xl mx-10  underline underline-offset-4 font-semibold'>Confirm password</p>
                    <input 
                        type="text"
                        placeholder='Confirm your password...'  
                        className='w-[400px] h-12 px-5 mx-10 mt-5 border-[1px] border-black rounded-md '/>
                </div>
            </div>
            {/* <div>
                <button>Submit</button>
            </div> */}
            
        </div>
    </div>
  )
}

export default SignUp;