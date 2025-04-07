import React from 'react'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-12 bg-white ">
      {/* Left side - Logo and Navigation Links */}
      <div className="flex items-center gap-12">
        <Image src={Logo.src} alt="nebula ui logo" height={35} width={48} className="cursor-pointer" />
        <ul className="flex gap-8">
          <li className="text-black text-base font-medium cursor-pointer hover:text-gray-400 transition-all duration-300">
            Components
          </li>
          <li className="text-gray-600 text-base font-normal cursor-pointer hover:text-gray-400 transition-all duration-300">
            Docs
          </li>
          <li className="text-gray-600 text-base font-normal cursor-pointer hover:text-gray-400 transition-all duration-300">
            Templates
          </li>
          <li className="text-gray-600 text-base font-normal cursor-pointer hover:text-gray-400 transition-all duration-300">
            Other Products
          </li>
        </ul>
      </div>

      {/* Right side - SearchBar and Get Started Button */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <button className="px-6 py-3 text-white text-base font-medium cursor-pointer bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center w-full max-w-[200px]">
          Get Started
        </button>
      </div>
    </nav>
  )
}
