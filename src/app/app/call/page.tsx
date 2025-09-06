"use client"
import React, { useState } from 'react'
import ContactBar from './components/ContactBar'
import PhoneOut from '@/components/icons/PhoneOut'
import IncomingCallModal from './components/IncomingCallModal';
import OutgoingCallModal from './components/OutgoingCallModal';

const page = () => {

  const [open, isOpen] = useState(true);

  return (
    <div className='w-full h-full flex'>
        <ContactBar />
        <div className='bg-white/1 w-full h-full flex items-center justify-center'>
         <div className='text-center font-semibold'>
         <div className="rounded-2xl my-2 w-24 h-24 flex items-center justify-center bg-white/2 p-3">
          <PhoneOut width={40} height={40} />
          </div>
          Start a call
         </div>
        </div>
        {
          open && (
            <OutgoingCallModal />
          )
        }
    </div>
  )
}

export default page