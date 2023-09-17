'use client'
import { addTodo } from '@/Redux/todoSlice';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

const Todoin = () => {
    // const [todoarray,setTodoArray] = useState([]);
    const [todoInput,setTodoInput] = useState("");
      const {todosValue} = useSelector((state) => state.todo);
      console.log(todosValue);

      const dispatch = useDispatch();
    const saveTodo = (e) =>{
      e.preventDefault();
      if(todoInput === "" ){
        toast.error("Please enter your todo...");
        
    }else{
        
        dispatch(addTodo({
            id:Math.random(),
            text:todoInput,
        }));
        toast.success("Todo added successful")
        setTodoInput("");
        
        
      
    };

      

    
     
    };
  return (
    <div>

    <div className='h-auto  mt-40 w-full flex flex-col items-center justify-center'>

          <div className='flex flex-col items-center justify-center '>
              <div className='flex items-center justify-center '>
                <p className='text-4xl font-semibold'>ToDo Application</p>
              </div>
              <div className='bg-gray-400 w-[500px] h-[300px] mx-auto mt-5 rounded'>
                
                <div className='flex flex-col items-center justify-center my-20 '>
                  <input 
                      type="text" 
                      placeholder='Enter your text...' 
                      className='w-[400px] h-[50px] rounded-xl px-8'
                      onChange={(e) =>setTodoInput(e.target.value)}
                      value={todoInput}
                  />
                  <button 
                    onClick={saveTodo}
                    className='mt-8 bg-green-700 text-4xl px-4 py-2 rounded-xl border-2 border-black hover:text-gray-300 duration-200 '>
                    Add
                  </button>
                </div>
                  
              </div>
          </div>

          <div className='w-[500px] mx-auto my-8'>
            <p className='flex items-center justify-center text-4xl font-semibold'>Your Todo</p>
            <div className='flex flex-col items-center justify-center mt-8'>
                {
                    todosValue.length > 0 ? (
                        todosValue.map((item) => (
                            <p 
                            className='bg-gray-950 w-full text-gray-200 mt-3 px-4 py-2 rounded-md flex items-center justify-between'
                            key={item.id} >{item.text}
                            <span className='text-2xl text-red-600 hover:text-white duration-200'>
                            <MdDelete />
                            </span>
                            </p>
                        ))
                    ) :( <p>No todos Available</p> )
                }
            </div>
          </div>
          <Toaster />
    </div>
</div>
  )
}

export default Todoin