import React from 'react'

const About = () => {
  return (
    <main className='w-full h-screen bg-bg-img bg-cover'>
      <div className=' flex flex-col items-center justify-center'>
        <p className='mt-10 text-4xl border-b-2 text-gray-300 font-semibold'>About Us</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-8 text-2xl  text-white '>

              <p>This is a todo application.</p>
              <p>It's help you to store your data.</p>
            
      </div>
    </main>
  )
}

export default About