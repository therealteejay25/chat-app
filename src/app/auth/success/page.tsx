"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../components/ui/Button.tsx";
import Link from "next/link.js";

export default function AuthSuccess() {
  const router = useRouter();

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get('token');
  //   const id = params.get('id');

  //   if (token) {
  //     localStorage.setItem("token", token as string)
  //     localStorage.setItem("id", id as string)
  //     router.push('/chat')
  //   }
  // }, [router])

  return <div className="text-white h-screen flex items-center justify-center text-center bg-[#070707]">
      <div className="bg-[#0c0c0c] rounded-3xl flex flex-col gap-12 items-center justify-center p-8 min-h-96 border-2 border-white/1">
          <div className="gap-6 flex flex-col items-center justify-center">
          <Image src="/check.svg" alt='Check Icon' width={84} height={84} />
          <div className='flex flex-col gap-4' >
            <h1 className='text-white font-semibold text-2xl'>You have successfully <br /> been logged in</h1>
            <p className='text-md text-white/50'>You have successfully been logged in. <br /> please continue to dashboard.</p>
          </div>
          </div>
         <Link href='/chat' className='w-full'>
         <Button label="Continue to dashboard" onClick={() => {}} />

         </Link>
      </div>
    </div>;
}
