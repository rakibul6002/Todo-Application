
import React from 'react';

const page = () => {
  return (
    <div className=' w-full h-[800px] flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center '>
        <p className='text-4xl font-semibold'>ToDo Application</p>
      </div>
      <div className='bg-gray-400 w-[500px] h-[300px] mx-auto mt-5 rounded'>
        
        <div className='flex flex-col items-center justify-center my-20 '>
           <input 
              type="text" 
              placeholder='Enter your text...' 
              className='w-[400px] h-[50px] rounded-xl px-8'
              />
           <button className='mt-8 bg-green-700 text-4xl px-4 py-2 rounded-xl border-2 border-black '>Add</button>
        </div>
          
      </div>
    </div>
  )
}

export default page