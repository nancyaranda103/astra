import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'
import MobileNav from './MobileNav'


const Navbar = () => {
  return (
<nav className='flex-between fixed z-50 w-full bg-dark-white
px-6 py-4 lg:px-10 '>
<Link href="/dashboard" className='flex items-center gap-1 '>
<p className='text-[26px] font-extrabold text-purple-700 '>Astra</p>
<div className='ml-auto hidden md:block'>  <LogoutButton/> </div>
</Link>

<div className=' gap-5 lg:hidden'>   
 
<MobileNav  />

</div>



</nav>
  )
}

export default Navbar   