"use client"


import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNav = () => {

const pathname = usePathname()


  return (<section className='w-full max-w-[264px] '>
 
    
<Sheet>
  <SheetTrigger asChild><Image src='/icons/hamburger-menu.svg' 
  width={36} height={36} alt='harmburger menu' className='cursor-pointer' /></SheetTrigger>
  <SheetContent side='left'>
   <Link href="/dashboard" className='flex items-center gap-1 '>
   <p className='text-[26px] font-extrabold text-purple-700 mx-2 '>Astra</p>
   <div className='ml-auto'>  <LogoutButton/> </div>
   </Link> 
<div className='flex h-[calc(100vh-72px)] flex-col 
justify-between overflow-y-auto'>
  <SheetClose asChild >
<section className='flex h-full flex-col pt-16 '>

{sideBarLinks.map((link) => { const isActive = pathname === link.route || 
pathname.startsWith(link.route);
   


   
 
return (
  <SheetClose asChild key={link.route} >
<Link  href={link.route}
key={link.label}
                                                                                 
className={cn('flex gap-4 items-center p-4 rounded-lg mx-5 w-full max-w-60 ',
{'bg-purple-700 text-white':isActive,} )}
>
<Image  src={link.imgUrl}
alt={link.label}
width={20}
height={20}
/>
<p className=' font-semibold  '>{link.label}</p>
</Link>
</SheetClose>
)

})}


</section>


  </SheetClose>



</div>


  </SheetContent>
</Sheet>



  </section>
  )
}

export default MobileNav