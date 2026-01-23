import React from "react";
import SelectVehicle from "../components/SelectVehicle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VehicleSelectorePage = () => {
  return(
    <div className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-1">
    <SelectVehicle />
  </main>
  <Footer />
</div>
  )
}

export default VehicleSelectorePage;