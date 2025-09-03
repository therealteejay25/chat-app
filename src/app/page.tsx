"use client";

import { Button } from "../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          ChatApp
        </motion.h1>
        <nav>
          <motion.ul
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <li>
              <Link href="#" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
          </motion.ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col flex-1 items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl p-8 bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Your Workflow Deserves an{" "}
            <span className="text-blue-400">Upgrade</span>, Ready?
          </h2>
          <p className="mb-6 text-gray-300">
            Enterprise-Grade Security. ChatApp uses industry-standard OAuth 2.0
            and the Microsoft Identity Platform to ensure your data is always
            secure. We never store your passwords.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3">
              Sign in with Microsoft
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 py-8 px-6 text-gray-400"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="mb-2">
              The purpose of lorem ipsum is to create a natural-looking block of
              text that doesn’t distract from the layout.
            </p>
            <a
              href="mailto:mail@outlook.com"
              className="text-blue-400 hover:underline"
            >
              mail@outlook.com
            </a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Social Media</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6 text-xs">
          All rights reserved by MarkAnto Enterprises
        </p>
      </motion.footer>

      {/* Floating Auth Buttons */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-white p-4 flex space-x-4 justify-center shadow-lg"
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
          <Button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
            Sign up
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
          <Button
            variant="outline"
            className="w-full border border-gray-400 py-3 rounded-lg font-medium text-gray-700"
          >
            Log in
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}

