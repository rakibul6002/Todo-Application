'use client'
import Image from 'next/image';
import Logo from '../Images/logo.png';
import React from 'react';
import Link from 'next/link';


const Header = () => {

  return (
    <div className='sticky top-0 z-50 '>
        <div className='w-full h-20 bg-gray-900 text-gray-200 flex items-center justify-between '>
            <Link href={'/'}>
                <div className='mx-10 flex items-center justify-center cursor-pointer'>
                    <Image
                    src={Logo}
                    alt='Logo'
                    priority
                    className='w-[60px] h-[50px]'
                    />
                    <p className='mx-2 text-3xl font-semibold hidden md:block'>ToDo</p>
                </div>
            </Link>
            <div>
                <ul className='flex items-center justify-center gap-10 text-sm cursor-pointer pr-5 md:pr-0  '>
                    <Link href={'/'}>
                        <li className='hover:border-b-2 hover:border-red-600'>Home</li>
                    </Link>

                    <Link href={'/TodoIn'}>
                        <li className='hover:border-b-2 hover:border-red-600'>Todo In</li> 
                    </Link>

                    <Link href={'/TodoList'}>
                        <li className='hover:border-b-2 hover:border-red-600'>Todo List</li>
                    </Link>
                </ul>
            </div>
            <div className='mx-10 cursor-pointer text-2xl hidden md:flex items-center justify-center gap-3'>
                <Link href={'/Log'}>

                <button className='bg-blue-500 text-zinc-800 px-6 py-2 rounded-lg font-bold text-2xl hover:bg-blue-700 hover:text-white'>Sign In</button>
                </Link>
                <Link href={'/Sign'}>

                <button className='bg-pink-600 text-zinc-800 px-6 py-2 rounded-lg font-bold text-2xl hover:bg-blue-700 hover:text-white'>Sign up</button>
                </Link>
                
            </div>
        </div>
        

    </div>
  )
}

export default Header