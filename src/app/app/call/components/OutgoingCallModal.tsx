"use client"
import AddContact from "@/components/icons/AddContact";
import EndCall from "@/components/icons/EndCall";
import FullScreen from "@/components/icons/FullScreen";
import Hand from "@/components/icons/Hand";
import Microphone from "@/components/icons/Microphone";
import ShareScreen from "@/components/icons/ShareScreen";
import VideoOff from "@/components/icons/VideoOff";
import PlaceholderProfile from "@/components/PlaceholderProfile";
import React, { useState } from "react";

const OutgoingCallModal = () => {

    const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="backdrop-blur-md bg-black/1 max-h-[90vh] justify-center flex items-center h-full max-w-[90vw] w-full z-20 absolute">
      <div className="max-w-xl w-full min-h-48 rounded-3xl p-3 bg-background border border-white/5">
        <div className="bg-white/2 relative rounded-2xl w-full min-h-36">
        <div className='bg-background p-3 rounded-full absolute top-2 right-2'>
          <FullScreen width={18} height={18} />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-16">
          <PlaceholderProfile size={24} />
          <div>
          <p className="text-xl font-medium text-center">Alex Chen</p>
          <p className="text-white/50 text-center">Ringing...</p>
          </div>
        </div>
        </div>
        <div className="pt-2 flex justify-between items-center">
        <div className="flex justify-between gap-2 items-center">
          {isVideo && (<button className="rounded-xl cursor-pointer p-2 px-3 bg-white/80">
          <VideoOff width={24} height={24} />
          </button>)}
          <button className="rounded-xl cursor-pointer p-2 px-3 bg-white/5">
          <Microphone width={24} height={24} />
          </button>
          </div>
          <div className="flex gap-3">
            <Hand width={24} height={24} />
            <ShareScreen width={24} height={24} />
            <AddContact width={24} height={24} />
          </div>
          <button className="rounded-xl cursor-pointer p-2 px-5 bg-danger">
            <EndCall width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutgoingCallModal;
