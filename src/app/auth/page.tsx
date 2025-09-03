"use client";

import React, { useEffect } from "react";
import Microsoft from "../components/ui/icons/Microsoft";
import Button from "../components/ui/Button.tsx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const Page: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  // MS login URL (avoid repeating logic everywhere)
  const MS_AUTH_URL = `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}/oauth2/v2.0/authorize?client_id=${process.env.NEXT_PUBLIC_AZURE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI}&response_mode=query&scope=openid%20email%20profile`;

  useEffect(() => {
    if (code) {
      axios
        .get(`http://localhost:8000/auth/ms/callback?code=${code}`)
        .then((res) => {
          const { token, user } = res.data;
          localStorage.setItem("chatAppToken", token);
          router.push("/dashboard");
        })
        .catch((err) => console.error("MS login error:", err));
    }
  }, [code, router]);

  return (
    <div className="bg-background flex py-16 text-white px-32 min-h-screen">
      <div className="w-1/2 px-16">
        <div className="my-5">
          <h1 className="text-3xl font-semibold">Sign up to use ChatApp</h1>
          <h4 className="text-white/50 mt-2">Get started with ChatApp</h4>
        </div>

        <button
          onClick={() => (window.location.href = MS_AUTH_URL)}
          className="border-[1.5px] mb-3 hover:border-base transition duration-300 cursor-pointer w-full py-3 px-8 border-white/30 rounded-xl font-medium text-white flex gap-4 items-center justify-center"
        >
          <Microsoft size={16} />
          Sign up with Microsoft
        </button>

        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="text-white/15 flex justify-center items-center text-center translate-y-5 w-12 p-2 bg-background">
            OR
          </div>
          <div className="h-[0.5px] w-full bg-white/15"></div>
        </div>

        <form className="flex flex-col gap-5" action="" method="post">
          <label className="text-lg font-medium text-white" htmlFor="phone">
            Phone Number*
          </label>
          <input
            id="phone"
            className="py-[10px] mb-3 outline-none placeholder:text-white/30 font-light px-4 rounded-lg w-full bg-white/2"
            type="text"
            placeholder="Enter your phone number..."
          />
          <Button label="Sign Up" onClick={() => {}} />
          <p className="text-white/50 text-center">
            Already have an account?{" "}
            <Link className="font-semibold text-white" href="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
      <div className="max-w-1/2 w-full min-h-96 rounded-xl bg-[#0d0d0d] rotate-2"></div>
    </div>
  );
};

export default Page;
