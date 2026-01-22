"use client";
import { useState } from 'react';
import {carsData , companies} from '../components/cars' 


export default function SelectVehicle() {
  const [selectedCompany, setSelectedCompany] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter vehicles based on selected company and search query
  const filteredVehicles = carsData.filter(vehicle => {
    const matchesCompany = selectedCompany === "All" || vehicle.company === selectedCompany;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCompany && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="pt-24 py-2 flex items-center gap-4 mb-5 ">
          <button className="text-[#1E1E1E]">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="font-inter text-[40px] font-semibold text-[#1E1E1E]">
            Select Your Vehicle
          </h1>
        </div>
        


        {/* Company Filter Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1 border-b-[1px] border-[#00000029] mx-10 px-1 ">
  {companies.map((company) => (
    <button
      key={company.name}
      onClick={() => setSelectedCompany(company.name)}
      className={`relative flex justify-center items-center gap-2  min-h-[50px] min-w-[180px] transition-all rounded-[8px] 
        ${
          selectedCompany === company.name
            ? ""
            : "shadow-[0px_2px_5.9px_0px_rgba(0,0,0,0.18)]"
        }`}
    >
      {company.name === "All" ? (
        <div className={`font-roboto text-[20px] font-[500] ${selectedCompany === "All" ? 'text-black' : 'text-[#848484]'}`}>All</div>
      ) : (
        <div className="flex items-center gap-3">
          {typeof company.logo === "string" ? (
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 w-auto object-contain"
            />
          ) : (
            company.logo
          )}
          <span className= {`font-medium font-roboto text-[20px] ${
                selectedCompany === company.name 
                  ? 'text-black' 
                  : 'text-[#848484]'
              }`}>
            {company.name}
          </span>
        </div>
      )}
      {selectedCompany === company.name && (
                <div className="absolute -bottom-[3px] left-0 right-0 h-[6px] bg-[#38EF0A] rounded-[6px]" />
              )}
    </button>
  ))}
</div>


          {/* Search Bar */}
          <div className="font-inter font-[400] mt-6 mx-28">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ">
                <svg className="h-6 w-6 text-[#757575]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for"
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
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white hover:bg-green-100 border-2 border-transparent hover:border-green-500 rounded-2xl py-4 px-2 shadow-[0px_4.76px_12.85px_0px_rgba(0,0,0,0.21)] transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Vehicle Image */}
              <div className="rounded-xl mb-3 overflow-hidden w-[300px] h-[200px] mx-auto flex items-center justify-center">
                <img 
                  // src={vehicle.image}
                  src='/vehicletype/car.png' 
                  alt={vehicle.name}
                  className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="flex items-center justify-center h-full text-gray-400 text-sm">${vehicle.name}</div>`;
                    }
                  }}
                />
              </div>

              {/* Vehicle Info */}
              <div className="text-center">
                <h3 className="text-[27px] font-semibold font-inter text-[#121212] transition-colors duration-300">
                  {vehicle.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Add Vehicle Button - Fixed at bottom */}
        <div className="flex items-center justify-center ">
          <button className="font-inter w-[437px]  px-6 py-4 bg-[#2FEB009E] border border-[#38EF0A] hover:bg-[#2FEB00] text-white font-medium rounded-[12px] transition-colors box-shadow: 0px 2px 4.9px 0px #00000033;
 ">
            Add Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}