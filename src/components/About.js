import React from 'react'

const About = () => {
  return (
    <main className='w-full h-screen bg-bg-img bg-cover'>
      <div className=' flex flex-col items-center justify-center'>
        <p className='mt-10 text-4xl border-b-2 text-gray-300 font-semibold'>About Us</p>
      </div>
     <div className='flex flex-col items-center justify-center mt-32  text-gray-300'>
       <p className='text-3xl'>Welcome to our TODO APPLICATION... This is Todo Application.It's created by React JS.You can use this Web application and store your Todo.</p>
     </div>
    </main>
  )
}

export default About