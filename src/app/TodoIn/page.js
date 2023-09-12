'use client'
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/Md';
import toast, { Toaster } from 'react-hot-toast';
const page = () => {
  const [todoarray,setTodoArray] = useState([]);
    const [todoInput,setTodoInput] = useState("");
      

    const saveTodo = (e) =>{
      e.preventDefault();
      if(todoInput === ""){
        toast.error("Please Enter Your ToDo...")
      }else{
        const newTodo={
          id:Math.random(),
          text:todoInput,
        };
        toast.success("Your Todo Added Successfully")
        setTodoArray([...todoarray,newTodo]);
      };
      setTodoInput("");
     
    };
    // console.log(todoarray);
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
                        className='mt-8 bg-green-700 text-4xl px-4 py-2 rounded-xl border-2 border-black hover:text-gray-300 '>
                        Add
                      </button>
                    </div>
                      
                  </div>
              </div>

              <div className='w-[500px] mx-auto my-8'>
                <p className='flex items-center justify-center text-4xl font-semibold'>Your Todo</p>
                {
                  todoarray.length >0 ? todoarray.map((item)=>(
                    <p className='w-full bg-gray-950 py-2 px-2 text-gray-200 flex items-center justify-between rounded-md mt-3'>
                        {item.text}
                        <span className='text-xl'>
                          <MdDelete/>
                        </span>
                      </p>
                  )):<p className='flex items-center justify-center rounded-md mt-8'>No todos available</p>
                }
                  {/* {
                    todos !== "" && (
                      
                  )} */}
              </div>
              <Toaster />
        </div>
    </div>
  )
}

export default page