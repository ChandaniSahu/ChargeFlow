"use client";
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { carsData, companies } from '../components/cars';
import Typewriter from 'typewriter-effect';

export default function SelectVehicle() {
  const searchParams = useSearchParams();
  const vehicleType = searchParams.get("type");
  
  const [selectedCompany, setSelectedCompany] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const availableCompanies = companies.filter(company => {
  if (company.name === "All") return true;

  return carsData.some(vehicle => {
    const matchesType = vehicleType ? vehicle.type === vehicleType : true;
    return matchesType && vehicle.company === company.name;
  });
});

const vehicleTypeImageMap: Record<string, string> = {
  twowheeler: "/vehicletype/scooter.png",
  threewheeler: "/vehicletype/rickshaw.png",
  fourwheeler: "/vehicletype/car.png",
  commercial: "/vehicletype/truck.png",
};

  // Filter vehicles based on type, selected company and search query
  const filteredVehicles = carsData.filter(vehicle => {
    const matchesType = vehicleType ? vehicle.type === vehicleType : true;
    const matchesCompany = selectedCompany === "All" || vehicle.company === selectedCompany;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCompany && matchesSearch;
  });

  const handleCompanyClick = (companyName: string) => {
    setSelectedCompany(companyName);

    const btn = buttonRefs.current[companyName];
    if (btn) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="bg-white pb-12 ">
      <div className="max-w-7xl mx-auto xl:px-8 px-2">
        {/* Header */}
        <div className="pt-24 py-2 flex items-center gap-4 mb-5 ">
          <button className="text-[#1E1E1E] cursor-pointer">
            <svg onClick={() => window.location.href = "/"}
              className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="font-inter xl:text-[40px] text-[25px] font-semibold text-[#1E1E1E]">
            Select Your Vehicle
          </h1>
        </div>

        {/* Company Filter Tabs */}
        <div className="mb-6">
          <div ref={containerRef} className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1 border-b-[1px] border-[#00000029] xl:mx-10 px-1 ">
{availableCompanies.map((company) => (
  <button
    key={company.name}
    onClick={() => handleCompanyClick(company.name)}
    ref={(el) => (buttonRefs.current[company.name] = el)}
    className={`relative flex justify-center items-center gap-2 min-h-[50px] min-w-[185px] transition-all rounded-[8px]
      ${selectedCompany === company.name
        ? "text-black"
        : "text-gray-400 shadow-[0px_2px_5.9px_0px_rgba(0,0,0,0.18)] hover:bg-green-50 hover:scale-103 cursor-pointer"
      }`}
  >
    {company.name === "All" ? (
      <span className="text-[20px] font-medium">All</span>
    ) : (
      <div className="flex items-center gap-3">
        {typeof company.logo === "string" ? (
          <img src={company.logo} className="h-8 w-auto" />
        ) : (
          company.logo
        )}
        <span className="text-[20px] font-medium">{company.name}</span>
      </div>
    )}

    {selectedCompany === company.name && (
      <div className="absolute -bottom-[3px] left-0 right-0 h-[6px] bg-[#38EF0A] rounded-[6px]" />
    )}
  </button>
))}

          </div>


          {/* Search Bar */}
          <div className="font-inter font-[400] mt-6 xl:mx-28 mx-2">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ">
                <svg className="h-6 w-6 text-[#757575]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {/* Fake Placeholder with Typewriter */}
              {!searchQuery && (
                <div className="absolute left-27 top-1/2 -translate-y-1/2 text-[#bdbbbb]">
                  <Typewriter
                    options={{
                      strings: ["for vehicle model"],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              )}
              <input
                type="text"
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-[#797979] pl-12 pr-4 py-4  rounded-[55px] border border-[#B7B7B7] hover:border-[#38EF0A] shadow-[0px_3px_8.8px_0px_rgba(0,0,0,0.17)]
               focus:outline-none focus:ring focus:ring-[#38EF0A] focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-4 px-2 mb-6 mx-8 max-h-[500px] overflow-y-auto no-scrollbar ">
          {filteredVehicles.length === 0 ? (
            // Not Found UI
            <div className="col-span-full flex flex-col items-center justify-center text-center py-16">
              <svg
                className="w-24 h-24 mb-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="9" y1="9" x2="13" y2="13" />
                <line x1="13" y1="9" x2="9" y2="13" />
              </svg>

              <p className="text-[18px] font-inter text-[#777]">
                No vehicle found
              </p>
              <p className="text-sm text-[#999] mt-1">
                Please check what you searched
              </p>
            </div>
          ) : (
            filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white hover:bg-[#e3ffdb] border-2 border-transparent hover:border-[#38ef0a] rounded-2xl py-4 px-2 shadow-[0px_4.76px_12.85px_0px_rgba(0,0,0,0.21)] transition-all duration-300 ease-in-out cursor-pointer"
              >
                {/* Vehicle Image */}
                <div className="rounded-xl mb-3 overflow-hidden xl:w-[300px] xl:h-[200px] mx-auto flex items-center justify-center">
               <img
  src={vehicleTypeImageMap[vehicle.type] || "/vehicletype/car.png"}
  alt={vehicle.name}
  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
/>

                </div>

                {/* Vehicle Info */}
                <div className="text-center">
                  <h3 className="text-[27px] font-semibold font-inter text-[#121212] transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add Vehicle Button - Fixed at bottom */}
        <div className="flex items-center justify-center ">
          <button className="font-inter w-[437px]  px-6 py-4 bg-[#2FEB009E] border border-[#38EF0A] hover:bg-[#2FEB00] text-white font-[600] rounded-[22px] transition-colors box-shadow: 0px 2px 4.9px 0px #00000033;
 ">
            Add Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}