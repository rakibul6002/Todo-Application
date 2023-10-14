import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { deleteTodo } from '@/Redux/todoSlice';

const AllTodo = () => {
    const {todosValue} = useSelector((state) => state.todo);
    const dispatch= useDispatch();
  return (
    <div className='w-[500px] mx-auto my-8 min-h-screen '>
        {
                    todosValue.length > 0 ? (
                        
                            todosValue.map((item) => (
                                <p key={item.id} className='w-full bg-gray-950 text-white py-1 px-4 rounded-md flex items-center justify-between mb-5'>{item.text}
                                <span
                              onClick={() => dispatch(deleteTodo(item.id))}
                             className='text-2xl text-red-600 hover:text-white duration-200'>
                             <MdDelete />
                            </span>
                                </p>
                            ))
                        
                    ) : ( <p className='flex items-center justify-center mx-auto text-xl text-gray-400 font-semibold '>No todos available...</p> 
                    )}
    </div>
  )
}

                            
export default AllTodo
