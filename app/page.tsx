import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel"; 
import ExpertiseSection from "./components/Expertise";
import ChooseChargeFlow from "./components/ChooseChargeFlow";
import DashboardHero from "./components/DashboardHero";
import ChargingServices from "./components/ChargingServices";
import PricingPlans from "./components/PricingPlans";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* <HeroSection/> */}
      <DashboardHero/>
      <div className="-mb-20 -mt-15">
       <Carousel /> 
      </div>
      
      <ExpertiseSection/>
      {/* <InfoCards /> */}
      <ChooseChargeFlow />
      <ChargingServices />
      <PricingPlans/>
      <Footer />
    </>
  );
}
