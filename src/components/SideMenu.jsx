import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai' 
import {BsFillCartFill} from 'react-icons/bs' 
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet } from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {BsFillSaveFill} from 'react-icons/bs'


const SideMenu = () => {
  const [nav, setNav] = useState(false)
  return (    
      <div>
        {/* sidemenu */}
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
        </div>
        {nav ? <div className='bg-black opacity-80 fixed w-full h-screen top-0 left-0'></div> : null }
        {/* sidebarmenu */}
        <div className={nav ? 'fixed bg-orange-200 w-[300px] z-10 h-screen top-0 left-0 duration-300' : 'fixed bg-orange-200 w-[] z-10 h-screen top-0 left-[-100%] duration-300' } > 
            <AiOutlineClose onClick={()=> setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
            <nav >
                <ul className=' text-black-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />Favorites</li>
                    <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' />Wallet</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default SideMenu
