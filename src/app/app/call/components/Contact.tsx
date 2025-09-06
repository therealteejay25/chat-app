import PlaceholderProfile from '@/components/PlaceholderProfile'
import React from 'react'

const Contact = ({ color } : { color: string }) => {
  return (
    <div className='w-full p-3 gap-5 flex items-center rounded-xl bg-white/4'>
        <div className='relative'>
        <PlaceholderProfile size={9} />
        <div className={`bg-${color} h-[8px] w-[8px] rounded-full absolute bottom-0 right-[2px]`}></div>
        </div>
        <p className='font-semibold pt-1 text-white/80'>John Doe</p>
    </div>
  )
}

export default Contact