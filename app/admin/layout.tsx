import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/Dashboard";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen">
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
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar (fixed height) */}
        <Navbar />
        <div className="desktop:hidden pb-1 border-b-[1px] border-gray-100 max-w-max mx-1 ">
          <Sidebar/>
        </div>
        
        {/* Main Area */}
        <div className="mt-5 desktop:flex-row flex flex-col max-w-[1220px] w-full overflow-y-auto backdrop-blur-[23.700000762939453px]
    bg-[linear-gradient(123.84deg,rgba(255,255,255,0.49)_0%,rgba(124,124,124,0.42)_100%)] mx-auto desktop:rounded-[30px] rounded-[10px]  mb-2">
          
          <Sidebar />
          {/* <Dashboard /> */}
          {children}
        </div>
      </div>
    </div>
  );
}