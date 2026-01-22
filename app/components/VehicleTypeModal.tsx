"use client";
import React from "react";

const vehicles = [
  {
    type: "twowheeler",
    label: "Two Wheeler",
    image: "/vehicletype/scooter.png",
  },
  {
    type: "threewheeler",
    label: "Three Wheeler",
    image: "/vehicletype/rickshaw.png",
  },
  {
    type: "fourwheeler",
    label: "Four Wheeler",
    image: "/vehicletype/car.png",
  },
  {
    type: "commercial",
    label: "Commercial",
    image: "/vehicletype/truck.png",
  },
];

const VehicleTypeModal = ({open, onClose}: {open: boolean, onClose: () => void}) => {
  const handleVehicleClick = (vehicleType: string) => {
    if (vehicleType === "fourwheeler") {
      window.location.href = "/selectvehicle";
    }
  };
if(!open) return null;
 return (
  <>
    {/* Black Background Overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[150]"></div>

    {/* Modal Box */}
    <div className="fixed inset-0 flex items-center justify-center z-[150]">
      <div className="font-roboto bg-white rounded-[20px] p-6 w-full max-w-[942px] ">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-5">
            <svg
              onClick={onClose}
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>

            <h1 className="text-[36px] font-semibold text-[#1E1E1E]">
              Select Type Of Vehicle
            </h1>
          </div>

          <p className="text-[#8E8E93] text-[20px] ml-10">
            Please Select The Type Of Vehicle You Want To Charge
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-1">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.type}
              className="group w-[198px] h-[170px] bg-white hover:bg-[#e3ffdb] border-2 border-transparent hover:border-[#38ef0a] rounded-[17px] shadow-[0px_2.84px_7.67px_0px_rgba(0,0,0,0.2)] p-4 cursor-pointer hover:scale-105 transition"
              onClick={() => handleVehicleClick(vehicle.type)}
            >
              <div className="flex flex-col items-center">
                <div className="w-[136px] h-[96px] flex items-center justify-center">
                  <img
                    src={vehicle.image}
                    alt={vehicle.label}
                    className="w-full h-full object-contain "
                  />
                </div>
                <h3 className="text-[20px] font-[500] text-[#121212]">
                  {vehicle.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

};

export default VehicleTypeModal;
