import Image from 'next/image';
import Me from '@/Images/me.png';
import React from 'react';

const page = () => {
  return (
    <div className='image w-full h-[850px]'>
        <div className='w-full  flex   justify-between'>
            <div className='w-[59.7%] flex items-center justify-center'>
                <div >

                    <p className='text-3xl'>Hey...</p>
                    <p className='text-3xl'>I am Md. Rakibul Islam</p>
                    
                </div>
            </div>
            <div className='w-[0.3%] bg-gray-950 h-[750px] mt-16 '>

            </div>
            <div className='w-[40%] '>
                <Image
                src={Me}
                className='flex items-center justify-center m-auto mt-36 w-[500px]'
                />
            </div> 

        </div>
    </div>
  )
}

export default page