import { Button } from '@/components/ui/button'
import React from 'react'

function Page() {
  return (
    <main className='h-full flex justify-center items-center flex-col'>
        <div>What a crazy use of routing</div>
        <button className='px-6 py-2 bg-blue-500 my-3 rounded-xl hover:bg-blue-200 hover:text-black'>Test Button</button>
        <Button variant='link'>Shadcn button</Button>
        <Button variant='custom'>Custom button</Button>
        {/* we can customize the varient */}
        {/* we can add our own varient, this is the most powerfull feature */}
    </main>
  )
}

export default Page