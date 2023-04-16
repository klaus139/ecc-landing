import React from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import {images} from '../constants'




const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex-items-center'>
                <img src={images.logo} alt='logo' className='w-full'/>
            </div>

        </div>
        <MenuIcon className='w-5' />
    </div>
  )
}

export default Navbar