"use client";
import React from 'react';
const VehicleType = () => {
  const handleVehicleClick = (vehicleType:any) => {
    if (vehicleType === 'fourwheeler') {
      window.location.href = '/selectvehicle';
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 ">
           {/* <button className="flex items-center text-gray-700 mb-4 hover:text-gray-900 transition-colors"> */}
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          {/* </button> */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Select Type Of Vehicle
          </h1> 
          </div>
          
          <p className="text-gray-500 text-sm sm:text-base">
            Please Select The Type Of Vesicle You Want To Charge
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Two Wheeler */}
          <div 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleVehicleClick('twowheeler')}
          >
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img 
                  src="/vehicletype/scooter.png" 
                  alt="Two Wheeler"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Two Wheeler</h3>
            </div>
          </div>

          {/* Three Wheeler */}
          <div 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleVehicleClick('threewheeler')}
          >
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img 
                  src="/vehicletype/rickshaw.png" 
                  alt="Three Wheeler"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Three Wheeler</h3>
            </div>
          </div>

          {/* Four Wheeler */}
          <div 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleVehicleClick('fourwheeler')}
          >
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img 
                  src="/vehicletype/car.png" 
                  alt="Four Wheeler"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Four Wheeler</h3>
            </div>
          </div>

          {/* Commercial */}
          <div 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleVehicleClick('commercial')}
          >
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img 
                  src="/vehicletype/truck.png" 
                  alt="Commercial"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Commercial</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VehicleType;