import React from 'react';

const page = () => {
  return (
    <div>
        <div className='flex items-center justify-center '>
            <p className='text-3xl font-semibold mt-10'>Your Todo List</p>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <p>No Todos Available</p>
        </div>
    </div>
  )
}

export default page