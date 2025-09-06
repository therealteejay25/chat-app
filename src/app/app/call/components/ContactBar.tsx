"use client"
import PhonePlus from '@/components/icons/PhonePlus'
import React from 'react'
import Contact from './Contact'

const ContactBar = () => {
  return (
    <div className="max-w-xs w-full h-full bg-background text-white flex flex-col overflow-hidden relative">
        <div className="w-full flex justify-between p-5 flex-shrink-0 z-10 relative">
            <h2 className="text-2xl font-bold tracking-tight">Calls</h2>
            <div className="cursor-pointer">
                <PhonePlus width={24} height={24} />
            </div>
        </div>
        {/* Blur overlay at the top for premium scroll effect */}
        <div
            className="pointer-events-none absolute top-13 left-0 w-full h-8 z-10"
            style={{
                background: 'linear-gradient(to bottom, rgba(7,7,7,0.85) 70%, rgba(7,7,7,0.0) 100%)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
            }}
        />
        <div
            className="flex flex-col gap-3 w-full p-3 overflow-y-auto flex-1 custom-scrollbar"
            style={{
                scrollbarWidth: 'none',
                scrollbarColor: '#4B5563 #1F293700', // thumb color, track color
            }}
        >
            <Contact color="base" />
            <Contact color="base" />
            <Contact color="warning" />
            <Contact color="" />
            <Contact color="base" />
            <Contact color="base" />
            <Contact color="warning" />
            <Contact color="base" />
            <Contact color="warning" />
            <Contact color="warning" />
            <Contact color="" />
        </div>
        <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #4B5563;
                border-radius: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #1F2937;
            }
        `}</style>
    </div>
  )
}

export default ContactBar