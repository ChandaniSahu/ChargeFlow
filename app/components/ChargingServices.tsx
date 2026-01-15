import React from 'react';
import { Home, Zap, Calendar, CreditCard, Headphones, BarChart3, ArrowRight } from 'lucide-react';
// import { HomeIcon ,BatteryChargerIcon ,CalendarIcon ,WalletIcon ,SupportIcon ,AnalysisIcon } from './icons';
const ChargingServices = () => {
//   const servicesData = [
//     {
//       icon: HomeIcon,
//       title: "Host Registration",
//       description: "Join our growing network as a charging host, register your location in minutes, set your own rules, and start welcoming ev drivers to your station.",
//       link: "#"
//     },
//     {
//       icon: BatteryChargerIcon,
//       title: "Charger Management",
//       description: "Stay in full control of your infrastructure, monitor charger health, track energy usage, and manage multiple charging points from a single, smart dashboard.",
//       link: "#"
//     },
//     {
//       icon: CalendarIcon,
//       title: "Booking System",
//       description: "Eliminate wait times with our smart scheduling tool, allow users to reserve charging slots in advance, ensuring a smooth and organized flow at your station.",
//       link: "#"
//     },
//     {
//       icon: WalletIcon,
//       title: "Payment Processing",
//       description: "Experience fast and secure automated billing, our system supports multiple payment modes and provides instant digital receipts for every successful session.",
//       link: "#"
//     },
//     {
//       icon: SupportIcon,
//       title: "Customer App",
//       description: "We are here to help you 24/7, our dedicated support team ensures that both hosts and drivers get immediate assistance whenever they face any technical issues.",
//       link: "#"
//     },
//     {
//       icon: AnalysisIcon,
//       title: "Revenue Analytics",
//       description: "Gain deep insights into your business performance, track your daily earnings, peak usage hours, and growth trends with easy-to-read visual reports.",
//       link: "#"
//     }
//   ];
  const servicesData = [
    {
      icon: Home,
      title: "Host Registration",
      description: "Join our growing network as a charging host, register your location in minutes, set your own rules, and start welcoming ev drivers to your station.",
      link: "#"
    },
    {
      icon: Zap,
      title: "Charger Management",
      description: "Stay in full control of your infrastructure, monitor charger health, track energy usage, and manage multiple charging points from a single, smart dashboard.",
      link: "#"
    },
    {
      icon: Calendar,
      title: "Booking System",
      description: "Eliminate wait times with our smart scheduling tool, allow users to reserve charging slots in advance, ensuring a smooth and organized flow at your station.",
      link: "#"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Experience fast and secure automated billing, our system supports multiple payment modes and provides instant digital receipts for every successful session.",
      link: "#"
    },
    {
      icon: Headphones,
      title: "Customer App",
      description: "We are here to help you 24/7, our dedicated support team ensures that both hosts and drivers get immediate assistance whenever they face any technical issues.",
      link: "#"
    },
    {
      icon: BarChart3,
      title: "Revenue Analytics",
      description: "Gain deep insights into your business performance, track your daily earnings, peak usage hours, and growth trends with easy-to-read visual reports.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="relative w-[22px] h-[22px] flex items-center justify-center">
          <div className="absolute w-[22px] h-[22px] rounded-full border-2 border-green-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
            <span className="text-gray-800 font-medium">Our Core Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Complete EV Charging Solutions
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-green-500">
            That Deliver Real Value
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#DEFBD6] border-[1.5px] border-[#38EF0A] rounded-[15px] flex flex-col items-center justify-center  p-6 transition-all duration-300 hover:bg-[linear-gradient(141.25deg,_#48FE1A_8.79%,_#1F9900_100%)] cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[linear-gradient(135deg,_#70FF4C_10%,_#27C300_100%)]
 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br from-white to-white transition-colors duration-300">
                     <IconComponent className="w-8 h-8 text-white group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-roboto font-normal text-[15px] leading-[1.3] tracking-normal text-justify mb-4 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* View Details Link */}
                <a
                  href={service.link}
                  className="mb-1 inline-flex items-center gap-2 text-gray-700 font-medium group-hover:text-white transition-colors duration-300"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChargingServices;