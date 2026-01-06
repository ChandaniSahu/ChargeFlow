import Image from "next/image";
import LoginPage from "./LoginPage";


export default function HeroSection() {
  return (
    <div className="relative h-[100vh] w-full">
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

     <div className="absolute bg-white p-2 rounded-full bottom-10 right-10 hidden md:block">
        <Image src="/icons/support.svg" alt="support" width={40} height={40} />
     </div>
      
    </div>
  );
}
