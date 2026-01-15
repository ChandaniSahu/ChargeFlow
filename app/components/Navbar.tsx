
"use client";
import Image from "next/image";
import { useState } from "react";
import SelectorModal from "./SelectorModal";
import { IoMoonSharp } from "react-icons/io5";
import { LightModeIcon } from "./icons";

export default function Navbar() {
  const [openSelector, setOpenSelector] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Our Services", href: "#" },
    { title: "For EV Owners", href: "#" },
    { title: "For Hosts", href: "#" },
    { title: "Support", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  const allowedIndexes = [0, 1, 2, 6];

const visibleMenuItems = isLoggedIn
  ? menuItems.filter((_, index) => allowedIndexes.includes(index))
  : menuItems;

function ProfileDropdown() {
  return (
    <div 
      className="relative" 
      onMouseLeave={() => setProfileOpen(false)} // close dropdown on mouse leave
    >
      {/* Profile Image */}
      <img
        onClick={() => setProfileOpen(!profileOpen)} // toggle dropdown on click
        src="/images/user.jpg"
        width={50}
        height={50}
        alt="Profile"
        className="rounded-full cursor-pointer border-2 border-white"
      />

      {/* Dropdown */}
      {profileOpen && (
       <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-3">
          <div className="flex items-center gap-3 px-4 pb-4 border-b border-gray-200">
            <img src="/images/user.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold text-base text-gray-900">Rajesh Kumar</p>
            </div>
          </div>

          <div className="flex flex-col pt-2">
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors text-left">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <span className="flex-1">My Account</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors text-left">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              <span className="flex-1">Logout</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

  return (
    <>
      <div className="absolute top-0 z-[150] w-full">
        <div className="mx-auto flex max-w-full items-center justify-between py-2 px-4 bg-white/60 backdrop-blur-md shadow-md">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={90}
            height={90}
            className="hover:scale-90 transition-transform duration-200 ease-in-out"
          />

          {/* Desktop Menu */}
          <div className="hidden xl:flex gap-8 text-[16px] font-[600] font-open-sans text-black">
            {visibleMenuItems.map((item, i) => (
              <a key={i} href={item.href} className="hover:text-[#38EF0A]">
                {item.title}
              </a>
            ))}
          </div>

          <div className="hidden md:flex xl:hidden  gap-3 flex items-center text-white">
            <div className="rounded-full bg-white text-[#38EF0A] p-2 cursor-pointer">
              {isLightMode ? <span onClick={() => setIsLightMode(!isLightMode)}><LightModeIcon/></span> :
              <IoMoonSharp className="text-[#2FE900] text-2xl" onClick={() => setIsLightMode(!isLightMode)} />
              }
            </div>
            {isLoggedIn ? (
              <ProfileDropdown/>
            ):(<>
              <button onClick={() => setOpenSelector(true)}
            className="rounded-full border-2 border-white px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition">
              Login
            </button>
            <button
              onClick={() => setOpenSelector(true)}
              className="rounded-full bg-gradient-to-br from-[#73F752] to-[#23B100] px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition whitespace-nowrap"
            >
              Sign Up
            </button></>
            )}
            
          </div>
          

          {/* Mobile Toggle + Buttons */}
          <div className="flex gap-3 items-center text-[16px] font-[600]">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-md border border-black"
            >
              <span className="text-black text-xl font-bold">&#9776;</span>

            </button>

            {/* Call-to-action buttons (always visible) */}
            <div className="hidden xl:flex gap-3 items-center text-white">
              <div className="rounded-full bg-white text-[#38EF0A] p-2 cursor-pointer">
                {isLightMode ? <span onClick={() => setIsLightMode(!isLightMode)}><LightModeIcon/></span> :
              <IoMoonSharp className="text-[#2FE900] text-2xl" onClick={() => setIsLightMode(!isLightMode)} />
              }
              </div>
            {isLoggedIn ? (
            <ProfileDropdown/>
            ):(<>
              <button onClick={() => setOpenSelector(true)}
            className="rounded-full border-2 border-white px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition">
              Login
            </button>
            <button
              onClick={() => setOpenSelector(true)}
              className="rounded-full bg-gradient-to-br from-[#73F752] to-[#23B100] px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition whitespace-nowrap"
            >
              Sign Up
            </button></>
            )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:w-[30%] w-[70%] flex items-center absolute top-0 right-0 xl:hidden bg-white/20 backdrop-blur-md shadow-md px-4 py-4 flex flex-col gap-4 text-black font-[600]">
            <span
              className="self-end text-2xl font-bold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </span>
                        <div className="md:hidden block gap-3 flex items-center text-white">
              <div className="rounded-full bg-white text-[#38EF0A] p-2 cursor-pointer">
             {isLightMode ? <span onClick={() => setIsLightMode(!isLightMode)}><LightModeIcon/></span> :
              <IoMoonSharp className="text-[#2FE900] text-2xl" onClick={() => setIsLightMode(!isLightMode)} />
              }
              </div>
                        {isLoggedIn ? (
            <ProfileDropdown/>
            ):(<>
              <button onClick={() => setOpenSelector(true)}
            className="rounded-full border-2 border-white px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition">
              Login
            </button>
            <button
              onClick={() => setOpenSelector(true)}
              className="rounded-full bg-gradient-to-br from-[#73F752] to-[#23B100] px-5 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition whitespace-nowrap"
            >
              Sign Up
            </button></>
            )}
            </div>
            {visibleMenuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="hover:text-[#38EF0A] text-center font-open-sans"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item.title}
              </a>
            ))}

          </div>
        )}
      </div>

      <SelectorModal open={openSelector} onClose={() => setOpenSelector(false)} />
    </>
  );
}
