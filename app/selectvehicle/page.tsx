"use client";
import { useState } from 'react';
import {carsData} from '../components/cars' 
import { Icon } from '@iconify/react';




// Company logos mapping
const companyLogos: { [key: string]: string } = {
  "Tata": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tata_Motors_Logo.svg/240px-Tata_Motors_Logo.svg.png",
  "MG": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MG_Motor.svg/240px-MG_Motor.svg.png",
  "Hyundai": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Hyundai_Motor_Company_logo.svg/240px-Hyundai_Motor_Company_logo.svg.png",
  "Mahindra": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mahindra_Auto_Logo.svg/240px-Mahindra_Auto_Logo.svg.png",
  "Mercedes": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/240px-Mercedes-Logo.svg.png",
  "Vinfast": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/VinFast_logo.svg/240px-VinFast_logo.svg.png"
};

const companies = ["All", "Tata", "MG", "Hyundai", "Mahindra", "Mercedes", "Vinfast"];

export default function VehicleSelector() {
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
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="py-4 flex items-center gap-3 border-b border-gray-200 mb-6">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Select Your Vehicle
          </h1>
        </div>
        
{/* <Icon icon="simple-icons:mercedesbenz" />
<Icon icon="simple-icons:hyundai" /> */}

        {/* Company Filter Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-3 border-b-2 border-gray-200">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`flex flex-col items-center gap-2 px-4 py-2 min-w-fit transition-all ${
                  selectedCompany === company
                    ? 'border-b-3 -mb-0.5'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {company === "All" ? (
                  <div className="text-sm font-medium text-gray-700">All</div>
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    {/* <img 
                      src={companyLogos[company]} 
                      alt={company}
                      className="h-8 w-auto object-contain"
                    /> */}
                    <span className="text-xs text-gray-600">{company}</span>
                  </div>
                )}
                {/* {selectedCompany === company && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                )} */}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for!"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Vehicle Image */}
              <div className="bg-white rounded-xl mb-3 overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img 
                  // src={vehicle.image}
                  src='/vehicletype/car.png' 
                  alt={vehicle.name}
                  className="w-full h-full object-contain"
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
                <h3 className="text-sm font-semibold text-gray-900">
                  {vehicle.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Add Vehicle Button - Fixed at bottom */}
        {/* <div className="px-4 "> */}
          <button className="w-full  px-6 py-4 bg-green-400  hover:bg-green-500 text-white font-medium rounded-xl transition-colors shadow-lg">
            Add Vehicle
          </button>
        {/* </div> */}
      </div>
    </div>
  );
}