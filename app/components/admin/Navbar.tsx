

"use client";
import { Bell, Search, Settings, User, Users, ChevronRight, X } from "lucide-react";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";


const menuItems = [
  { icon: IoMdSettings, label: "Administrator" },
  { icon: FaUser, label: "Manager" },
  { icon: FaUserFriends, label: "Employee" },
];

export default function Navbar() {
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close dialog on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setShowDialog(false);
      }
    }
    if (showDialog) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDialog]);

  return (
    <nav className="desktop:mx-15 mx-1 flex items-center justify-between gap-4 py-2 desktop:px-8 px-2 m-4 rounded-[376px] 
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

      <div className="font-inter flex items-center bg-white gap-2 py-3 pl-5 md:w-[600px] w-[200px] rounded-[77px] text-[#7C7C7C] md:text-[20px] text-sm">
        <Search size={20} className="text-[#7C7C7C]" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none w-full placeholder-[#7C7C7C] placeholder-opacity-75"
        />
      </div>

      <div className="flex items-center desktop:gap-6 gap-3">
        <div className="relative">
          <Bell className="text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* Profile image + dialog wrapper */}
        <div className="relative" ref={dialogRef}>
          <img
            src="/images/user.jpg"
            className="w-9 h-9 rounded-full object-cover cursor-pointer"
            onClick={() => setShowDialog((prev) => !prev)}
          />

          {/* Profile Dialog */}
          {showDialog && (
            createPortal(
            <div className="absolute right-8 top-20 w-48 bg-white rounded-[5px] shadow-xl overflow-hidden z-[9999]">

              {/* Header */}
              <div className="relative flex flex-row items-center gap-3 px-2 pt-2 pb-3">
                <img
                  src="/images/user.jpg"
                  alt="Ujjwal Saini"
                  className="w-11 h-11 rounded-full object-cover border border-gray-200 flex-shrink-0"
                />
                <span className="text-[15px] font-semibold text-gray-900 leading-tight">
                  Ujjwal Saini
                </span>
                <button
                  onClick={() => setShowDialog(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Divider */}
              <div className="mx-2 h-px bg-gray-200" />

              {/* Menu Items */}
              <div className="py-1 px-2">
                {menuItems.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex flex-row items-center gap-4  px-2 py-2.5 cursor-pointer hover:bg-green-50 transition-colors"
                  >
                    <span className="text-gray-500 group-hover:text-green-600 flex items-center transition-colors">
                      <Icon size={18} />
                    </span>
                    <span className="flex-1 text-[14px] text-gray-800 group-hover:text-green-600 font-normal transition-colors">
                      {label}
                    </span>
                    <span className="text-gray-400 flex items-center">
                      <ChevronRight size={16} strokeWidth={2} />
                    </span>
                  </div>
                ))}
              </div>
            </div>, document.body)
          )}
        </div>
      </div>
    </nav>
  );
}