"use client";
import { useState } from 'react';
import data from '../data/admin-data.json';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { ChevronDown } from 'lucide-react';

export default function General() {
  const generalData = data.settings.general;

   const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);

    const [formData, setFormData] = useState({
    platformName: generalData.platformSettings.platformName,
    supportEmail: generalData.platformSettings.supportEmail,
    defaultCurrency: generalData.platformSettings.defaultCurrency,
    timezone: generalData.platformSettings.timezone,
    maintenanceMode: generalData.toggles.maintenanceMode,
    autoApproveHosts: generalData.toggles.autoApproveHosts,
  });

  const currencyOptions = [
    "INR - Indian Rupee",
    "USD - US Dollar",
    "EUR - Euro",
    "GBP - British Pound",
  ];

  const timezoneOptions = [
    "IST - Indian Standard Time",
    "UTC - Coordinated Universal Time",
    "EST - Eastern Standard Time",
    "PST - Pacific Standard Time",
  ];

  const handleInputChange = (field: string, value: string) => {
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
        Platform Settings
      </h2>
      <p className="font-inter text-[#7C7C7C] text-[18px] mb-6">
        Configure Basic Platform Information
      </p>

      <div className="grid md:grid-cols-2 gap-6 font-medium">

        {/* Platform Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[20px] text-[#364153]">
            Platform Name
          </label>
          <input
            type="text"
            value={formData.platformName}
            onChange={(e) =>
              handleInputChange("platformName", e.target.value)
            }
            className="border border-[#AAAAAA] rounded-[10px] px-4 py-3 text-[18px] text-[#434343] focus:outline-none focus:ring-[1px] focus:ring-[#30EF0A]"
          />
        </div>

        {/* Support Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[20px] text-[#364153]">
            Support Email
          </label>
          <input
            type="text"
            value={formData.supportEmail}
            onChange={(e) =>
              handleInputChange("supportEmail", e.target.value)
            }
            className="border border-[#AAAAAA] rounded-[10px] px-4 py-3 text-[18px] text-[#434343] focus:outline-none focus:ring-[1px] focus:ring-[#30EF0A]"
          />
        </div>

        {/* Currency Dropdown */}
        <div className="relative">
          <label className="text-[20px] text-[#364153]">
            Default Currency
          </label>

          <button
            onClick={() => {
              setIsCurrencyOpen(!isCurrencyOpen);
              setIsTimezoneOpen(false);
            }}
            className="mt-2 flex items-center px-4 py-3 bg-white border border-[#AAAAAA] rounded-[10px] w-full justify-between"
          >
            <span className="text-[16px]">
              {formData.defaultCurrency}
            </span>
            <ChevronDown
              className={`transition-transform ${
                isCurrencyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCurrencyOpen && (
            <div className="absolute mt-2 w-full p-2 bg-white border rounded-xl shadow-xl z-50">
              {currencyOptions.map((option) => (
                <button
                  key={option}
                  className={`w-full text-left px-4 py-3 rounded-[10px] hover:bg-[#e1ffd9] flex justify-between ${
                    formData.defaultCurrency === option
                      ? "bg-[#e1ffd9] font-medium"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("defaultCurrency", option);
                    setIsCurrencyOpen(false);
                  }}
                >
                  {option}
                  {formData.defaultCurrency === option && (
                    <IoCheckmarkSharp size={20} />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Timezone Dropdown */}
        <div className="relative">
          <label className="text-[20px] text-[#364153]">
            Timezone
          </label>

          <button
            onClick={() => {
              setIsTimezoneOpen(!isTimezoneOpen);
              setIsCurrencyOpen(false);
            }}
            className="mt-2 flex items-center px-4 py-3 bg-white border border-[#AAAAAA] rounded-[10px] w-full justify-between"
          >
            <span className="text-[16px]">
              {formData.timezone}
            </span>
            <ChevronDown
              className={`transition-transform ${
                isTimezoneOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isTimezoneOpen && (
            <div className="absolute mt-2 w-full p-2 bg-white border rounded-xl shadow-xl z-50">
              {timezoneOptions.map((option) => (
                <button
                  key={option}
                  className={`w-full text-left px-4 py-3 rounded-[10px] hover:bg-[#e1ffd9] flex justify-between ${
                    formData.timezone === option
                      ? "bg-[#e1ffd9] font-medium"
                      : ""
                  }`}
                  onClick={() => {
                    handleInputChange("timezone", option);
                    setIsTimezoneOpen(false);
                  }}
                >
                  {option}
                  {formData.timezone === option && (
                    <IoCheckmarkSharp size={20} />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t-[1px] border-[#C9C8C8] my-8" />

      <Toggle
        title="Maintenance Mode"
        subtitle="Temporarily disable the platform for maintenance"
        enabled={formData.maintenanceMode}
        onToggle={() => handleToggleChange("maintenanceMode")}
      />

      <Toggle
        title="Auto-approve Hosts"
        subtitle="Automatically approve new host applications"
        enabled={formData.autoApproveHosts}
        onToggle={() => handleToggleChange("autoApproveHosts")}
      />

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => console.log(formData)}
          className="bg-[#2FEB00] text-[20px] font-medium text-white hover:bg-green-500 rounded-[10px] md:w-[461px] px-4 py-2.5"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Toggle({ title, subtitle, enabled, onToggle }: any) {
  return (
    <div className="font-inter flex items-center justify-between py-4">
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