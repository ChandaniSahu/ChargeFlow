import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col overflow-hidden">
      
      {/* Background */}
      <Image
        src="/images/afterloginherobg.jpg"
        alt="EV Station"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full px-6 lg:px-20">

        {/* TOP : Heading */}
        <div className="pt-28 text-center ">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-green-400">
            Power Your EV Journey
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Smart, reliable and profitable EV charging made simple
          </p>
        </div>

       {/* MIDDLE : Map + Bottom Right Content */}
<div className="flex-1 flex items-end mb-10">
  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* LEFT : MAP */}
    <div className="flex items-end">
      <div className="bg-[#87807b] border rounded-2xl p-4 max-w-md shadow-xl">
        
        {/* Search */}
        <div className="flex items-center gap-2 mb-3 border border-gray-300 bg-white px-2 py-1 rounded-lg">
          <input
            type="text"
            placeholder="Search for your Location"
            className="w-full px-4 py-2 rounded-lg outline-none text-sm"
          />
          <button className="bg-white p-2 rounded-lg">⚙️</button>
        </div>

        {/* Pills */}
        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="bg-white px-3 py-1 rounded-full text-xs">🚗 Tata Nexon EV</span>
          <span className="bg-white px-3 py-1 rounded-full text-xs">⚡ Offers</span>
          <span className="bg-white px-3 py-1 rounded-full text-xs">📍 Nearest</span>
        </div>

 <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-3">
  <Image
    src="/images/map.png"
    alt="Map"
    fill
    // sizes="(max-width: 768px) 100vw, 400px"
    className="object-cover"
  />

  <button
    type="button"
    className="absolute bottom-3 left-1/2 -translate-x-1/2
               bg-green-500 hover:bg-green-600
               text-white px-6 py-2.5
               rounded-full font-semibold
               shadow-lg z-10 whitespace-nowrap"
  >
    Location Nearest Station
  </button>
</div>


        
      </div>
    </div>

    {/* RIGHT : BOTTOM DESCRIPTION */}
    <div className="flex items-end justify-end">
      <div className="max-w-xl text-right text-white space-y-6 pb-6">
        
        <p className="text-gray-200 line-clamp-2">
          ChargeFlow connects EV hosts and drivers, making charging accessible
          and reliable. Our platform simplifies the process while ensuring
          every charge is profitable.
        </p>

        <div className="flex items-center justify-center gap-6">
          <button className="flex items-center gap-3 bg-[linear-gradient(141.25deg,#48FE1A_8.79%,#1F9900_100%)]
 hover:bg-green-600 p-4 rounded-full text-black font-semibold border-2 border-white shadow-[0_0_16.1px_#38EF0A]">
            <FaPlay className="w-5 h-5 text-white" />
            
          </button>

          <div className="flex -space-x-3">
            {["user1.png", "user2.png", "user3.png"].map((img) => (
              <div
                key={img}
                className="relative w-10 h-10 rounded-full border-2 border-green-400 overflow-hidden"
              >
                <Image src={`/images/${img}`} alt="user" fill />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

        

 

      </div>
    </section>
  );
}
