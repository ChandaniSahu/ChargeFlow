import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/Dashboard";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/adminbg.jpg"
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

        {/* Main Area */}
        <div className="flex w-[1285px] overflow-hidden    backdrop-blur-[23.700000762939453px]
    bg-[linear-gradient(123.84deg,rgba(255,255,255,0.49)_0%,rgba(124,124,124,0.42)_100%)] py-2  mx-auto rounded-[30px] mb-2">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}