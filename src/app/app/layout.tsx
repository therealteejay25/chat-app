import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import LogoIcon from "@/components/icons/LogoIcon";


export default function AppLayout({ children }: {children: ReactNode}) {
  return (
      <html lang="en">
        <body
          className='w-screen min-h-screen text-white bg-[#0C0C0C]'
        >
        <div className="text-xl text-white bg-[#0C0C0C] font-bold items-center w-full justfiy-start px-2 flex"><LogoIcon size={64} /> <p className="-translate-x-2 pt-1">ChatApp</p></div>
          <div className="flex text-white bg-[#0C0C0C] w-full h-[91.4vh]">
          <Sidebar />
          <div className="w-full h-full">
          {children}
          </div>
          </div>
        </body>
      </html>
  );
}
