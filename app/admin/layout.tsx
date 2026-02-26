import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/Dashboard";
import Image from "next/image";
import { Toaster } from "react-hot-toast";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative md:h-[130vh]">
      <Toaster position="top-right" />
      {/* Background */}
      <Image
        src="/images/adminbgcut.jpg"
        alt="EV Station"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col ">
        {/* <div className="absolute inset-0  backdrop-blur-sm" /> */}
        {/* Navbar (fixed height) */}
        <Navbar />
        <div className="desktop:hidden  border-b-[1px] border-[#a9a9a3] max-w-max mx-2 ">
          <Sidebar/>
        </div>
        
        {/* Main Area */}
        <div className="z-0 mt-3 desktop:flex-row flex flex-col max-w-[1220px] md:h-[100vh] w-full overflow-auto 
    bg-[linear-gradient(123.84deg,rgba(255,255,255,0.49)_0%,rgba(124,124,124,0.42)_100%)] mx-auto desktop:rounded-[30px] rounded-[10px]  mb-2">
          <div className="hidden desktop:flex"><Sidebar /></div>
          {/* <Dashboard /> */}
          {children}
        </div>
      </div>
    </div>
  );
}