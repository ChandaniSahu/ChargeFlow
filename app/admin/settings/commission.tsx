"use client";
import { useState } from "react";
import data from "../data/admin-data.json";

export default function Commission() {
  const commissionData = data.settings.commission;

  const [formData, setFormData] = useState({
    platformCommission:
      commissionData.commissionStructure.platformCommissionPercent,
    processingFee:
      commissionData.commissionStructure.paymentProcessingFeePercent,
    minBooking:
      commissionData.commissionStructure.minimumBookingAmount,
    maxBooking:
      commissionData.commissionStructure.maximumBookingAmount,
    peakHourPricing:
      commissionData.dynamicPricing.peakHourPricing,
    weekendPremium:
      commissionData.dynamicPricing.weekendPremium,
  });

  const handleInputChange = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleChange = (field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev],
    }));
  };

  return (
    <div>
      <h2 className="font-inter text-[24px] font-medium ">
        Commission Structure
      </h2>
      <p className="font-inter text-[#7C7C7C] text-[18px] mb-6">
        Configure platform commission and pricing rules
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Platform Commission (%)"
          value={formData.platformCommission}
          increament={10}
          onChange={(val:number) =>
            handleInputChange("platformCommission", val)
          }
        />

        <Input
          label="Payment Processing Fee (%)"
          value={formData.processingFee}
          onChange={(val:number) =>
            handleInputChange("processingFee", val)
          }
        />

        <Input
          label="Minimum Booking Amount (₹)"
          value={formData.minBooking}
          onChange={(val:number) =>
            handleInputChange("minBooking", val)
          }
        />

        <Input
          label="Maximum Booking Amount (₹)"
          value={formData.maxBooking}
          onChange={(val:number) =>
            handleInputChange("maxBooking", val)
          }
        />
      </div>

      <div className="border-t-[1px] border-[#C9C8C8] my-8" />
       <h4 className="font-inter text-[20px] font-medium text-[#364153]">
          Dynamic Pricing
        </h4>
      <Toggle
        title="Peak Hour Pricing"
        subtitle="Increase rates during high demand"
        enabled={formData.peakHourPricing}
        onToggle={() => handleToggleChange("peakHourPricing")}
      />

      <Toggle
        title="Weekend Premium"
        subtitle="Apply premium pricing on weekends"
        enabled={formData.weekendPremium}
        onToggle={() => handleToggleChange("weekendPremium")}
      />
        <div className='flex justify-center items-center mt-4'>
       <button className='bg-[#2FEB00] text-[20px] font-medium text-white hover:bg-green-500 rounded-[10px] flex justify-center items-center md:w-[461px] px-4  py-2.5'>Save Changes</button> 
      </div>
    </div>
  );
}

function Input({ label, value ,increament,onChange}: any) {

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[20px] text-[#364153] font-medium">
        {label}
      </label>

      <input
        type="number"
        value={value}
        step={increament || 1}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-[#AAAAAA] rounded-[10px] px-4 py-3 text-[18px] text-[#434343] focus:outline-none focus:ring-[1px] focus:ring-[#30EF0A]"
      />
    </div>
  );
}

function Toggle({ title, subtitle, enabled, onToggle }: any) {
  return (
    <div className="font-inter flex items-center justify-between py-3">
      <div>
        <h4 className="text-[20px] font-medium text-[#364153]">
          {title}
        </h4>
        <p className="text-[16px] text-[#7C7C7C]">
          {subtitle}
        </p>
      </div>

      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition ${
          enabled ? "bg-[#30EF0A]" : "bg-[#D0BCFF]"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </div>
    </div>
  );
}