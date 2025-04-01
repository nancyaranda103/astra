import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='items-center py-5  justify-center flex'>
      <Button className=" font-semibold text-purple-500">
        < Link href="/dashboard">Go to dashboard</Link> </Button> </div>
  )
}

export default page 