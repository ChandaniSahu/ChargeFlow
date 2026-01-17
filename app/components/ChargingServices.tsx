import React from 'react';
import {  ArrowRight } from 'lucide-react';
import { HomeIcon  } from './icons';
import { Icon } from "@iconify/react";
import { FaChargingStation } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";

const ChargingServices = () => {
  const servicesData = [
    {
      icon: <HomeIcon textColor="#ffffff" hoverColor="#38EF0A" />,
      title: "Host Registration",
      description: "Join our growing network as a charging host, register your location in minutes, set your own rules, and start welcoming ev drivers to your station.",
      link: "#"
    },
    {
      icon: <FaChargingStation  className='w-10 h-10 text-white group-hover:text-[#38EF0A]' />,
      title: "Charger Management",
      description: "Stay in full control of your infrastructure, monitor charger health, track energy usage, and manage multiple charging points from a single, smart dashboard.",
      link: "#"
    },
    {
      icon: <TbCalendarTime className='w-10 h-10 text-white group-hover:text-[#38EF0A]' />,
      title: "Booking System",
      description: "Eliminate wait times with our smart scheduling tool, allow users to reserve charging slots in advance, ensuring a smooth and organized flow at your station.",
      link: "#"
    },
    {
      icon: <Icon icon="fluent:payment-28-filled" className='w-10 h-10 text-white group-hover:text-[#38EF0A]' />,
      title: "Payment Processing",
      description: "Experience fast and secure automated billing, our system supports multiple payment modes and provides instant digital receipts for every successful session.",
      link: "#"
    },
    {
      icon: <Icon icon="streamline:customer-support-1-solid"  className='w-10 h-10 text-white group-hover:text-[#38EF0A]' />,
      title: "Customer App",
      description: "We are here to help you 24/7, our dedicated support team ensures that both hosts and drivers get immediate assistance whenever they face any technical issues.",
      link: "#"
    },
    {
      icon: <Icon icon="ix:dashboard-filled" className='w-10 h-10 text-white group-hover:text-[#38EF0A]' />,
      title: "Revenue Analytics",
      description: "Gain deep insights into your business performance, track your daily earnings, peak usage hours, and growth trends with easy-to-read visual reports.",
      link: "#"
    }
  ];
  // const servicesData = [
  //   {
  //     icon: Home,
  //     title: "Host Registration",
  //     description: "Join our growing network as a charging host, register your location in minutes, set your own rules, and start welcoming ev drivers to your station.",
  //     link: "#"
  //   },
  //   {
  //     icon: Zap,
  //     title: "Charger Management",
  //     description: "Stay in full control of your infrastructure, monitor charger health, track energy usage, and manage multiple charging points from a single, smart dashboard.",
  //     link: "#"
  //   },
  //   {
  //     icon: Calendar,
  //     title: "Booking System",
  //     description: "Eliminate wait times with our smart scheduling tool, allow users to reserve charging slots in advance, ensuring a smooth and organized flow at your station.",
  //     link: "#"
  //   },
  //   {
  //     icon: CreditCard,
  //     title: "Payment Processing",
  //     description: "Experience fast and secure automated billing, our system supports multiple payment modes and provides instant digital receipts for every successful session.",
  //     link: "#"
  //   },
  //   {
  //     icon: Headphones,
  //     title: "Customer App",
  //     description: "We are here to help you 24/7, our dedicated support team ensures that both hosts and drivers get immediate assistance whenever they face any technical issues.",
  //     link: "#"
  //   },
  //   {
  //     icon: BarChart3,
  //     title: "Revenue Analytics",
  //     description: "Gain deep insights into your business performance, track your daily earnings, peak usage hours, and growth trends with easy-to-read visual reports.",
  //     link: "#"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-white pb-16 desktop:px-14 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center desktop:mb-16 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="relative w-[22px] h-[22px] flex items-center justify-center">
          <div className="absolute w-[22px] h-[22px] rounded-full border-2 border-green-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
         </div>
            <span className="font-roboto text-[#333333] font-semibold text-[20px] leading-[100%] tracking-[0] capitalize">Our Core Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#171717]">
            Complete EV Charging Solutions
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2CDE00]">
            That Deliver Real Value
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 desktop:gap-y-[25px] gap-x-14">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#DEFBD6] border-[1.5px] border-[#38EF0A] rounded-[15px] flex flex-col items-center justify-center p-4  desktop:p-6 transition-all duration-300 hover:bg-[linear-gradient(141.25deg,_#48FE1A_8.79%,_#1F9900_100%)] cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="group w-16 h-16 bg-[linear-gradient(135deg,_#70FF4C_10%,_#27C300_100%)]
 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br from-white to-white transition-colors duration-300">
                     {service.icon}
                     {/* <IconComponent className="w-8 h-8 text-white group-hover:text-green-600 transition-colors duration-300" /> */}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-inter text-[22px] desktop:text-[24px] font-semibold mb-2 text-[#171717] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-roboto  text-[15px] leading-[109%] tracking-[0.01em] text-justify text-[#434343]  mb-5 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* View Details Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[18px] text-[#364153] font-[600] group-hover:text-white transition-colors duration-300"
                >
                  View Details
                  <ArrowRight className="w-5 h-5 text-[#38EF0A]  group-hover:text-white transition-colors duration-300" />
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