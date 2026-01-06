import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>

      <InfoCards />

      {/* <LoginPage /> */}

      <Footer />
    </>
  );
}
