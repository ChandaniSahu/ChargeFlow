"use client";
import "@stianlarsen/border-beam/css";
import { BorderBeam } from "@stianlarsen/border-beam";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { DiamondIcon, LeafIcon, StarShieldIcon } from './icons';


const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans = [
    {
     
      icon : <LeafIcon/>,
      heading: 'Basic Plans',
      monthlyPrice: '₹499/Month',
      yearlyPrice: '₹399/Year',
      dollarPrice: '$6 / Month',
      features: [
        'Basic Charger Management',
        'Up To 2 Chargers',
        '24/7 Digital Assistant',
        'Monthly Performance Report'
      ],
      isPremium: false
    },
    {
     
      icon : <StarShieldIcon/>,
      heading: 'Premium Plans',
      monthlyPrice: '₹1,399/Month',
      yearlyPrice: '₹2,399/Month',
      dollarPrice: '$17 / Month',
      features: [
        'Up To 10 Chargers',
        'Advanced Management Tools',
        'Weekly Performance Reports',
        'Detailed Revenue Insights',
        'Automated Invoicing'
      ],
      isPremium: true
    },
    {
     
      icon : <DiamondIcon/>,
      heading: 'Pro Plans',
      monthlyPrice: '₹1,499/Month',
      yearlyPrice: '₹2,499/Month',
      dollarPrice: '$18 / Month',
      features: [
        'Complete Charger Management Suite',
        'Unlimited Chargers',
        'Dedicated Account Manager',
        'Advanced Analytics & Reporting',
        'Custom Pricing Strategies',
        'Weekly Performance Insights'
      ],
      isPremium: false,
      isDiamond: true
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-[22px] h-[22px] flex items-center justify-center">
          <div className="absolute w-[22px] h-[22px] rounded-full border-2 border-green-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
            <span className="font-roboto text-[#333333] font-semibold text-[20px] leading-[100%] tracking-[0] capitalize">Pricing Plans</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#171717] ">
            Flexible Plans For Every
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2CDE00] mb-8">
            Charging Need
          </h1>

          {/* Toggle */}
          <div className="inline-flex bg-[#F0F9EE] rounded-full p-2">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-9 py-2 rounded-full font-medium text-[20px] transition-all ${
                !isYearly 
                  ? 'bg-[#38EF0A] text-white shadow-lg' 
                  : 'text-[#364153] cursor-pointer'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-9 py-2 rounded-full font-medium text-[20px] transition-all ${
                isYearly 
                  ? 'bg-[#38EF0A] text-white shadow-lg ' 
                  : 'text-[#364153] cursor-pointer'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid desktop:grid-cols-3 tablat:grid-cols-2 mobile:grid-cols-1 gap-8 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-6  transition-all duration-300 flex flex-col items-center shadow-[0px_3px_6.2px_0px_#00000033] ${
                plan.isPremium
                  ? 'bg-[linear-gradient(157.4deg,_#3FFF52_1.97%,_#06B30B_98.88%)] text-white shadow-2xl premium-inner-glow'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl moving-gradient-border '
              }`}
             >
       
             {/* The Moving Border Component */}
      {!plan.isPremium &&<BorderBeam 
        size={500} 
        duration={5} 
        colorFrom="#3FFF52" 
        colorTo="#06B30B" 
        borderWidth={2}
      />}
         
  
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-white shadow-[0px_3px_5.6px_0px_#0000002E]
                 `}>
                {plan.icon}
              </div>

              {/* Heading */}
              <h3 className={`text-[30px] lg:text-[35px] font-bold  ${
                plan.isPremium ? 'text-white' : 'text-[#364153]'
              }`}>
                {plan.heading}
              </h3>

              {/* Price */}
              <div className={`text-[40px] lg:text-[48px] font-bold mb-4 ${
                plan.isPremium ? 'text-white' : 'text-[#171717]'
              }`}>
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                {/* <span className="text-lg font-normal">/Month</span> */}
              </div>

              {/* Features */}
              <div className={`space-y-3 mb-8`}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start  gap-3">
                    <div className={`mt-1 ${
                      plan.isPremium ? 'text-white' : 'text-green-500'
                    }`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className={`text-[19px] font-[00] ${
                      plan.isPremium ? 'text-white' : 'text-[#49454F]'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Select Plan Button */}
              <button
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group mt-auto w-full py-4 rounded-full font-[500] transition-all duration-300 text-[20px] text-[#364153] shadow-[0px_3px_5.3px_0px_#00000026]
                ${
                  plan.isPremium
                    ? 'bg-white  hover:bg-gray-50'
                    : 'bg-white border-[1.5] border-[#2EDE02]  hover:bg-[linear-gradient(157.4deg,#3FFF52_1.97%,#06B30B_98.88%)] hover:text-white transition-colors duration-300'

                }`}
              >
                {!plan.isPremium && hoveredCard === index ? plan.dollarPrice : 'Select Plan'}

              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;