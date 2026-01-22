"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaPlay } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
import {OfferIcon } from "./icons";
import { Icon } from "@iconify/react";
import VehicleTypeModal from "./VehicleTypeModal";



export default function HeroSection() {
  const [search, setSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const placeholders = [
    "Search For Your Location",
    "Search For Your Station",
    "Search For Your Charger",
  ];



  const AnimatedPlaceholder = ({ hidden }: { hidden: boolean }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % placeholders.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    if (hidden) return null;

    return (
      <div className="absolute left-9 top-1/2 -translate-y-1/2 h-5 overflow-hidden pointer-events-none">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${index * 20}px)` }}
        >
          {placeholders.map((text, i) => (
            <div key={i} className="h-5 text-gray-400 text-sm">
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };



  return (
    <>
    <section className="relative w-full  flex flex-col overflow-hidden">

      {/* Background */}
      <Image
        src="/images/afterloginherobg.jpg"
        alt="EV Station"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full px-6 lg:px-20">

        {/* TOP : Heading */}
        <div className="pt-28 text-center xl:mb-10 mb-4">
          <span className="font-poppins font-extrabold text-[#38EF0A] text-[40px] xl:text-[80px] text-center leading-[32px] capitalize">
            Power Your EV Journey
          </span>

          <div className="font-poppins font-extrabold text-[30px] xl:text-[40px] capitalize text-white">
            <Typewriter
              options={{
                strings: ["With Seamless", "Charging Solutions"],
                autoStart: true,
                loop: true,
                delay: 300,
                deleteSpeed: 120,
              }}
            />
          </div>

        </div>


        {/* MIDDLE : Map + Bottom Right Content */}
        <div className="font-inter flex-1 flex items-end mb-14">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT : MAP */}
            <div className="flex items-end">
              <div className="bg-[#87807b] mx-auto xl:mx-0 rounded-2xl py-2 px-6 xl:min-w-[400px] shadow-xl">

                {/* Search */}
                <div className="flex items-center gap-2 mt-3 mb-4 ">
                  <div className="w-full relative flex items-center border border-gray-300 bg-white rounded-[15px]">
                    <FiSearch className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-[#757575]" />
                    <AnimatedPlaceholder hidden={search.length > 0} />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-9 py-3 rounded-lg outline-none text-sm bg-transparent relative z-10"
                    />
                  </div>

                  <button className="group hover:bg-[#38EF0A] bg-white p-3 rounded-lg border-[1.2px] border-transparent hover:border-white transition-all duration-300">
                    <RiEqualizerLine className="w-6 h-6 text-[#8D8D8D] group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>

                {/* Pills */}
                <div className="flex gap-2 mb-4 flex-wrap text-[12px] font-medium desktop:justify-between ">
                  <span onClick={() => setIsOpenModal(true)}
                  className="flex items-center gap-2 bg-white px-1 xl:px-3  xl:py-1 rounded-lg cursor-pointer">
                    <Icon icon="simple-icons:tata" className="w-5 h-5 text-[#1E59C7]" />
                    Tata Nexon EV
                  </span>

                  <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-lg ">
                    <OfferIcon/>
                    Offers
                  </span>

                  <span className="flex items-center  bg-white pl-1 pr-3 py-1 rounded-lg ">
                    <span className="text-[18px]">📍</span>
                    Nearest
                  </span>
                </div>


                <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-2">
                  <Image
                    src="/images/map.png"
                    alt="Map"
                    fill
                    className="object-cover"
                  />

                  <button
                    type="button"
                    className="font-roboto absolute bottom-3 left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(97,253,58,0.87)_0%,rgba(3,168,0,0.87)_100%)] 
                    hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg z-10 whitespace-nowrap"
                  >
                    <TbLocationFilled className="w-5 h-5 inline-block mr-2" />
                    Location Nearest Station
                  </button>
                </div>



              </div>
            </div>

            {/* RIGHT : BOTTOM DESCRIPTION */}
            <div className="flex items-end justify-center lg:justify-end">
              <div className="text-white space-y-6 pb-6">

                <p className="font-roboto font-[500] text-gray-200 xl:min-w-[640px] capitalize xl:text-center tablat:text-center mx-6">
                  ChargeFlow connects EV hosts and drivers, making charging accessible and reliable.
                  Our platform simplifies the process while ensuring every charge is profitable.
                </p>

                <div className="flex items-center justify-center gap-6">
                  <button className="flex items-center gap-3 bg-[linear-gradient(141.25deg,#48FE1A_8.79%,#1F9900_100%)]
          hover:bg-green-600 p-4 rounded-full text-black font-semibold border-2 border-white shadow-[0_0_16.1px_#38EF0A]">
                    <FaPlay className="w-5 h-5 text-white" />
                  </button>
                  <section className="w-[170px] xl:max-w-[200px] text-[10px]">
                    Watch our video to see how ChargeFlow is revolutionizing EV charging for hosts and drivers.
                  </section>

                  <div className="flex -space-x-3">
                    {["user1.jpg", "user2.jpg", "user3.jpg"].map((img) => (
                      <div
                        key={img}
                        className="relative w-10 h-10 rounded-full border-2 border-green-400 overflow-hidden"
                      >
                        <Image src={`/images/${img}`} alt="user" fill />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>





      </div>
    </section>

         <VehicleTypeModal open={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </>
  );
}
