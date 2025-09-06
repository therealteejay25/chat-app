import React from 'react'
import Message from './icons/Message'
import Groups from './icons/Groups'
import Search from './icons/Search'
import Calendar from './icons/Calendar'
import Check from './icons/Check'
import Bell from './icons/Bell'
import Setting from './icons/Setting'
import Phone from './icons/Phone'
import Link from 'next/link'
import PlaceholderProfile from './PlaceholderProfile'

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-between pb-3'>
      <div className='h-full flex-col flex gap-4'>
      <Link href='/'className="border-l-4 px-5 py-2 cursor-pointer bg-white/3 border-l-base">
        <Message height={18} width={18} />
      </Link>
      <Link href='/'className="border-l-4 px-5 py-2 cursor-pointer border-l-app">
        <Groups height={18} width={18} />
      </Link>
      <Link href='/app/call'className="border-l-4 px-5 py-2 cursor-pointer border-l-app">
        <Phone height={18} width={18} />
      </Link>
      <Link href='/'className="border-l-4 px-5 py-2 cursor-pointer border-l-app">
        <Search height={18} width={18} />
      </Link>
      <Link href='/'className="border-l-4 px-5 py-2 cursor-pointer border-l-app">
        <Calendar height={18} width={18} />
      </Link>
      <Link href='/'className="border-l-4 px-5 py-2 cursor-pointer border-l-app">
        <Check height={18} width={18} />
      </Link>
    </div>

    <div className='flex items-center flex-col gap-5'>
    <Bell height={18} width={18} />
    <Setting height={18} width={18} />
    <div>
      <PlaceholderProfile size={9} />
    </div>
    </div>
    </div>
  )
}

export default Sidebar