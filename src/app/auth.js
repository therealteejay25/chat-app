"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Microsoft } from "lucide-react";

export default function AuthPage() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-4xl w-full"
      >
        {/* Left Section (Form) */}
        <div className="flex flex-col justify-center w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">Sign in to use ChatApp</h2>
          <p className="text-gray-400 text-sm">Get started with ChatApp</p>

          {/* Microsoft Login */}
          <Button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 w-full py-2 rounded-lg">
            <Microsoft size={18} /> Sign in with Microsoft
          </Button>

          <div className="flex items-center gap-2 text-gray-500">
            <span className="h-px w-full bg-gray-700"></span> OR{" "}
            <span className="h-px w-full bg-gray-700"></span>
          </div>

          {/* Phone Input */}
          <div>
            <label className="text-sm text-gray-400">Phone Number*</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-gray-800 border-gray-700 mt-2"
            />
          </div>

          {/* Sign Up Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg">
            Sign Up
          </Button>

          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>

        {/* Right Section (Illustration / Info) */}
        <div className="w-1/2 flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              💬 ChatApp
            </h3>
            <p className="text-gray-400 mt-2">
              Reimagine your workflow with us.  
              Connect, collaborate, and get more done—without ever leaving your tools.  
              With seamless Microsoft Office integration, your favorite apps work smarter, together.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
