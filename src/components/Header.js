import Image from 'next/image';
import Logo from '../Images/logo.png';
import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <div>
        <div className='w-full h-20 bg-gray-900 text-gray-200 flex items-center justify-between'>
            <Link href={'/Home'}>
                <div className='mx-10 flex items-center justify-center cursor-pointer'>
                    <Image
                    src={Logo}
                    priority
                    className='w-[60px] h-[50px]'
                    />
                    <p className='mx-2 text-3xl font-semibold'>ToDo</p>
                </div>
            </Link>
            <div>
                <ul className='flex items-center justify-center gap-10 text-2xl cursor-pointer'>
                    <Link href={'/Home'}>
                        <li>Home</li>
                    </Link>

                    <Link href={'/TodoIn'}>
                        <li>Todo In</li> 
                    </Link>
                    <Link href={'/TodoList'}>
                        <li>Todo List</li>
                    </Link>
                    <li>Help</li>
                </ul>
            </div>
            <div className='mx-10 cursor-pointer text-2xl flex items-center justify-center gap-3'>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>

    </div>
  )
}

export default Header