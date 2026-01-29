"use client";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mx-15 flex items-center justify-between gap-4 py-2 px-8 m-4 rounded-[376px] 
       bg-[linear-gradient(90.36deg,rgba(255,255,255,0.525)_3.8%,rgba(124,124,124,0.45)_98.16%)] backdrop-blur-[23.7px] shadow-[0px_4px_6.1px_0px_#00000040]">
      <Image
                  src="/logo.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                  loading="eager"
                  className="hover:scale-90 transition-transform duration-200 ease-in-out"
                />

      <div className="hidden md:flex items-center gap-2 bg-gray-100 py-3 pl-5 w-[600px] rounded-[77px] w-[320px]">
        <Search size={16} className="text-gray-500" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="text-white"/>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>
        <img
          src="/images/user.jpg"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
