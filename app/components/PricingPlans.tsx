"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { DiamondIcon, LeafIcon, StarShieldIcon } from './icons';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      // icon: (
      //   <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      //     <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" fill="#10b981" stroke="#10b981" strokeWidth="1"/>
      //     <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      //   </svg>
      // ),
      icon : <LeafIcon/>,
      heading: 'Basic Plans',
      monthlyPrice: '₹499',
      yearlyPrice: '₹4,990',
      dollarPrice: '$6',
      features: [
        'Basic Charger Management',
        'Up To 2 Chargers',
        '24/7 Digital Assistant',
        'Monthly Performance Report'
      ],
      isPremium: false
    },
    {
      // icon: (
      //   <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      //     <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" fill="white" stroke="white" strokeWidth="1"/>
      //     <path d="M12 7l1.545 3.13L17 10.764l-2.5 2.436.59 3.436L12 15.13l-3.09 1.506.59-3.436L7 10.764l3.455-.634L12 7z" fill="#10b981"/>
      //   </svg>
      // ),
      icon : <StarShieldIcon/>,
      heading: 'Premium Plans',
      monthlyPrice: '₹1,399',
      yearlyPrice: '₹13,990',
      dollarPrice: '$17',
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
      // icon: (
      //   <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      //     <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 18.5c-4.28-1.05-7.5-5.48-7.5-10.5V8.3l7.5-4.3 7.5 4.3v1.7c0 5.02-3.22 9.45-7.5 10.5z" fill="#10b981"/>
      //     <path d="M12 8l-2 6h4l-2 6" fill="#10b981"/>
      //   </svg>
      // ),
      icon : <DiamondIcon/>,
      heading: 'Pro Plans',
      monthlyPrice: '₹1,499',
      yearlyPrice: '₹14,990',
      dollarPrice: '$18',
      features: [
        'Complete Charger Management Suite',
        'Unlimited Chargers',
        'Dedicated Account Manager',
        'Advanced Analytics & Reporting',
        'Custom Pricing Strategies',
        'Weekly Performance Insights'
      ],
      isPremium: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-[22px] h-[22px] flex items-center justify-center">
          <div className="absolute w-[22px] h-[22px] rounded-full border-2 border-green-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
            <span className="text-gray-700 font-medium">Pricing Plans</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
            Flexible Plans For Every
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-8">
            Charging Need
          </h1>

          {/* Toggle */}
          <div className="inline-flex bg-green-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                !isYearly 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                isYearly 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'text-gray-700'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col items-center ${
                plan.isPremium
                  ? 'bg-green-500 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-900 border-2 border-green-500 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                plan.isPremium ? 'bg-white' : 'bg-gray-50'
              }`}>
                {plan.icon}
              </div>

              {/* Heading */}
              <h3 className={`text-2xl font-bold mb-2 ${
                plan.isPremium ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.heading}
              </h3>

              {/* Price */}
              <div className={`text-4xl font-bold mb-8 ${
                plan.isPremium ? 'text-white' : 'text-gray-900'
              }`}>
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-lg font-normal">/Month</span>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${
                      plan.isPremium ? 'text-white' : 'text-green-500'
                    }`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className={`text-sm ${
                      plan.isPremium ? 'text-white' : 'text-gray-700'
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
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                  plan.isPremium
                    ? 'bg-white text-green-500 hover:bg-gray-50'
                    : 'bg-white border-2 border-green-500 text-green-500 hover:bg-green-50'
                }`}
              >
                {hoveredCard === index ? plan.dollarPrice : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;