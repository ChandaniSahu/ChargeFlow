import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";


export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full">
      <Image
        src="/images/herobg.png"
        alt="hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <LoginPage />
      </div>
    </section>
  );
}
