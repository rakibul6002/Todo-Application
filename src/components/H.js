import React from 'react'

const H = () => {
  return (
    <div className='w-full h-screen bg-bg-img bg-cover flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center '>
            <p className='text-4xl font-semibold text-gray-200  '>This is ToDo Application</p>
            <p className='mt-5 text-gray-200 text-xl'>You can store your ToDo</p>
        </div>
        <div >
            <input type="text"
            placeholder='Search your todo...'
            className='px-4 py-3 mt-8 rounded-lg'
            />
            <button className='bg-green-500 px-4 py-3 rounded-lg font-bold mx-2 hover:text-red-700'>
                Search
            </button>
        </div>
    </div>
  )
}

export default H