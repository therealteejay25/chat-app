import EndCall from "@/components/icons/EndCall";
import FullScreen from "@/components/icons/FullScreen";
import PlaceholderProfile from "@/components/PlaceholderProfile";
import React from "react";

const IncomingCallModal = () => {
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
          <p className="text-white/50 text-center">Incoming Call...</p>
          </div>
        </div>
        </div>
        <div className="pt-2 flex justify-between items-center">
          <button className="rounded-xl cursor-pointer p-2 px-5 bg-success rotate-180">
            <EndCall width={26} height={26} />
          </button>
          <button className="rounded-xl cursor-pointer p-2 px-5 bg-danger">
            <EndCall width={26} height={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallModal;
