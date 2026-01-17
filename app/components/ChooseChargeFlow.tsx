import React from "react";
import { ArrowRight } from "lucide-react";

const cardData = [
  {
    title: "Seamless Host Onboarding",
    description:
      "Easy registration with KYC verification and bank account setup for secure payouts.",
    link: "/host-onboarding",
  },
  {
    title: "Smart Charger Management",
    description:
      "Add and manage multiple chargers with customizable availability and pricing options.",
    link: "/charger-management",
  },
  {
    title: "Secure Payment System",
    description:
      "Automated payments with transparent commission structure and instant earnings tracking.",
    link: "/secure-payments",
  },
];

const ChooseChargeFlow = () => {
  return (
    <section className="w-full bg-white text-black pb-18 desktop:px-10 px-6">
      {/* Top label */}
      <div className="flex items-center justify-center gap-2 desktop:mb-14 mb-4 ">
        <div className="relative w-[22px] h-[22px] flex items-center justify-center">
          <div className="absolute w-[22px] h-[22px] rounded-full border-2 border-green-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <p className="font-roboto text-[#333333] font-semibold text-[20px] leading-[100%] tracking-[0] capitalize">
          Why Choose ChargeFlow
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 desktop:items-start">
        {/* LEFT */}
        <div >
          <h2 className="font-roboto flex flex-col text-4xl lg:text-5xl  font-extrabold text-center  mb-4">
            <span className="text-[#171717]">Your EV </span>
            <span className="text-[#2CDE00] whitespace-nowrap">Charging Partner</span>
          </h2>

          <p className="font-inter text-[#757575] text-[16.5px] font-medium  desktop:text-center text-justify max-w-xl mb-8 mx-auto">
            We don’t just provide chargers; we provide a complete ecosystem. Our
            mission is to bridge the gap between technology and convenience,
            making electric mobility a reality for everyone, everywhere.
            Experience a smarter way to stay powered up.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {cardData.map((card, index) => {
              const isLast = index === cardData.length - 1;

              return (
                <div
                  key={index}
                  className={`flex justify-center ${isLast ? "sm:col-span-2" : ""}`}
                >
                  <div
                    className="
                      font-roboto bg-white text-black rounded-2xl  desktop:px-2 px-3 py-6 
                       flex items-center flex-col max-w-[280px] mobile:max-w-[330px]
                      shadow-[0_-2px_12.6px_0_#38EF0A47] border-[1.5] border-[#53FF28]
                    "
                   >
                    <h3 className="font-roboto font-[700] text-[20px] mb-1 ">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-5 min-w-[230px] text-center desktop:px-0 tablat:px-3">
                      {card.description}
                    </p>

                    <a
                      href={card.link}
                      className="text-[#2DE100] font-[500] flex items-center gap-2"
                    >
                      Read More <ArrowRight/>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative ">
          <div className="h-[620px] w-full rounded-3xl overflow-hidden">
            <img
              src="/images/whychoose.jpg"
              alt="Why Choose ChargeFlow"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 right-6 bg-white text-black rounded-xl px-5 py-4 max-w-xs shadow-xl">
            <p className="font-semibold text-sm mb-1">
              Join ChargeFlow & Power The
              <br />
              Future Of Mobility.
            </p>

            <a
              href="/become-host"
              className="text-green-500 font-medium text-sm flex items-center gap-2"
            >
              Become A Host Today <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseChargeFlow;
