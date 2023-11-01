import React from 'react'

const About = () => {
  return (
    <main className='w-full min-h-screen bg-bg-img bg-cover'>
      <div className=' flex flex-col items-center justify-center'>
        <p className='mt-10 text-4xl border-b-2 text-gray-300 font-semibold'>About Us</p>
      </div>
     <div className='flex flex-col items-center justify-center mt-32  text-gray-300'>
       <p className='text-3xl'>Welcome to our TODO APPLICATION</p>
       <p>I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles. I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am a strong communicator and team player. I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.

       I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
       </p>
     </div>
    </main>
  )
}

export default About;