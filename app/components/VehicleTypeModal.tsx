"use client";
import React from "react";

const vehicles = [
  { type: "twowheeler", label: "Two Wheeler", image: "/vehicletype/scooter.png" },
  { type: "threewheeler", label: "Three Wheeler", image: "/vehicletype/rickshaw.png" },
  { type: "fourwheeler", label: "Four Wheeler", image: "/vehicletype/car.png" },
  { type: "commercial", label: "Commercial", image: "/vehicletype/truck.png" },
];

const VehicleTypeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const handleVehicleClick = (vehicleType: string) => {
    if (vehicleType === "fourwheeler") {
      window.location.href = "/selectvehicle";
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 z-[150]" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[150] px-4 sm:px-0">
        <div   className="
    font-roboto bg-white rounded-[20px]
    p-4 sm:p-6 pb-8 sm:pb-12
    w-full max-w-[942px]
    max-h-[90vh] overflow-y-auto
    sm:max-h-none sm:overflow-visible
  ">
          
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-5">
              <svg
                onClick={onClose}
                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>

              <h1 className="text-[22px] sm:text-[36px] font-semibold text-[#1E1E1E]">
                Select Type Of Vehicle
              </h1>
            </div>

            <p className="text-[#8E8E93] text-[14px] sm:text-[20px] ml-0 sm:ml-10 mt-1">
              Please Select The Type Of Vehicle You Want To Charge
            </p>
          </div>

          {/* Vehicle Cards */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-6 sm:gap-x-10 max-w-full sm:max-w-[440px] place-items-center">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.type}
                onClick={() => handleVehicleClick(vehicle.type)}
                className="group w-full sm:w-[198px] h-[150px] sm:h-[170px]
                  bg-white hover:bg-[#e3ffdb]
                  border-2 border-transparent hover:border-[#38ef0a]
                  rounded-[17px]
                  shadow-[0px_2.84px_7.67px_0px_rgba(0,0,0,0.2)]
                  p-4 cursor-pointer
                  hover:scale-105 transition"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-[110px] sm:w-[136px] h-[80px] sm:h-[96px] flex items-center justify-center">
                    <img
                      src={vehicle.image}
                      alt={vehicle.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[16px] sm:text-[20px] font-[500] text-[#121212] mt-2">
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
