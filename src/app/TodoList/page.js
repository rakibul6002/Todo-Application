'use client'
import AllTodo from '@/components/AllTodo';
import React from 'react';

const AllTodopage = () => {
  return (
    <div className='w-full h-screen bg-bg-img bg-cover'>
        <div className='flex items-center justify-center '>
            <p className='text-3xl text-gray-300 font-semibold mt-10'>Your Todo List</p>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <p>
              <AllTodo/>
            </p>
        </div>
    </div>
  )
}

export default AllTodopage