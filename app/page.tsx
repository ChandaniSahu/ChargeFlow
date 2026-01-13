import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel"; 

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HeroSection/>
      <Carousel />

      <InfoCards />

      <Footer />
    </>
  );
}
