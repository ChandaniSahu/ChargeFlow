import Image from "next/image";
import { Play } from "lucide-react";

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
        <div className="pt-28 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-green-400">
            Power Your EV Journey
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Smart, reliable and profitable EV charging made simple
          </p>
        </div>

        {/* MIDDLE : Map (LEFT) */}
        {/* <div className="flex-1 flex items-center border border-black"> */}
          <div className="w-full">
            <div className="bg-[#E5E5E5] border rounded-2xl p-4 max-w-md shadow-xl">
              
              {/* Search */}
              <div className="flex items-center gap-2 mb-3">
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

              {/* Map */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-3">
                <Image
                  src="/images/map.png"
                  alt="Map"
                  fill
                  className="object-cover"
                />
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold">
                Location Nearest Station
              </button>
            </div>
                   {/* BOTTOM : RIGHT SIDE CONTENT */}
        <div className="pb-12 flex justify-end">
          <div className="max-w-xl text-right text-white space-y-6">
            
            <p className="text-gray-200">
              ChargeFlow connects EV hosts and drivers, making charging accessible
              and reliable. Our platform simplifies the process while ensuring
              every charge is profitable.
            </p>

            <div className="flex items-center justify-end gap-6">
              <button className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-black font-semibold">
                <Play className="w-5 h-5" />
                Watch Video
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
        {/* </div> */}

 

      </div>
    </section>
  );
}
