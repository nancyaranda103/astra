"use client"




import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { sideBarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const pathname = usePathname();
  return (
   <section className='sticky left-0 flex h-screen top-0 w-fit flex-col
   justify-between bg-dark-white pt-28 p-6 max-sm:hidden lg:w-[264px] text-black '> 

<div className='flex flex-1 flex-col gap-6 m-0 p-0 '>
{sideBarLinks.map((link) => { const isActive = pathname === link.route || 
pathname.startsWith(link.route);
   


   
 
return (
<Link  href={link.route}
key={link.label}
                                                                                 
className={cn('flex  gap-4 items-center p-4 rounded-lg justify-start  ',
{'bg-purple-700 text-white':isActive,} )}
>
<Image  src={link.imgUrl}
alt={link.label}
width={24}
height={24}
/>
<p className='text-lg font-semibold max-lg:hidden  '>{link.label}</p>
</Link>

)

})}



</div>

   </section>
  )
}

export default Sidebar