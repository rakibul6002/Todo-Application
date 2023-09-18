import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-bg-img bg-cover'>
      <div className=' flex items-center justify-center'>
        <p className='mt-10 text-4xl border-b-2 text-gray-300 font-semibold'>About Us</p>
      </div>
      <div className=' flex flex-col items-center justify-center mt-32'>
        <p className=' text-3xl  text-gray-300'>WELCOME to our Todo Application</p>
        <div className=' flex flex-col items-center justify-center mt-4'>

          <p className=' text-xl  text-gray-300'>This is a todo application.</p>
          <p className=' text-xl  text-gray-300'>It's help you to store your data.</p>
        </div>
      </div>
    </div>
  )
}

export default About