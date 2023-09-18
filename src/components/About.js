import React from 'react'

const About = () => {
  return (
    <div className='about w-full h-screen'>
        <div className='flex items-center justify-center '>
          <p className='mt-12 text-4xl font-semibold border border-black px-4 py-3'>About Us</p>
        </div>
        <div className='flex flex-col items-center justify-center '>
            <p className='mt-32 text-4xl font-semibold'>WELCOME to our 'TODO APPLICATION'</p>
            <div className='flex flex-col items-center justify-center mt-8 text-2xl font-semibold '>

              <p>This is a todo application.</p>
              <p>It's help you to store your data.</p>
            
            </div>
        </div>
    </div>
  )
}

export default About