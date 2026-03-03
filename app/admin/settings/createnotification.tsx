"use client";

import { useState } from "react";
import {
  ChevronDown,
  Search,
  UploadCloud,
  Plus
} from "lucide-react";
import { FaCar } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";

export default function CreateNotification() {

  const [receiver, setReceiver] = useState<"host" | "user" | null>(null);

  const [titleDropdownOpen, setTitleDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const [searchTitle, setSearchTitle] = useState("");

  const [titleOptions, setTitleOptions] = useState([
    "Weekly Revenue Summary",
    "Monthly Revenue Report",
    "Payout Processed",
    "Payout Failed",
    "High Priority Support Ticket",
    "Station Approved",
    "System Maintenance Notice",
  ]);

const [hostCategories, setHostCategories] = useState([
  "Suspended Hosts",
  "Temporarily Disabled Hosts",
  "Charger In Maintenance Hosts",
  "Recent Station Approved Hosts",
  "Setup In Progress Hosts",
  "Improvement Required Hosts",
  "Top Performing Stations"
]);

const [userCategories, setUserCategories] = useState([
  "Payment Failed Users",
  "Refund Pending Users",
  "Top Charging Users",
  "Frequent Users",
  "Referral Users",
  "Suspended / Restricted Users",
  "Support Pending Users"
]);

const [searchCategory, setSearchCategory] = useState("");
const categoryList = receiver === "host"
  ? hostCategories
  : userCategories;

  const [formData, setFormData] = useState({
    receiver: "",
    category: "",
    title: "",
    message: "",
    image: null,
    inApp: false,
    website: false,
    schedule: "now",
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredCategories = categoryList.filter((c) =>
  c.toLowerCase().includes(searchCategory.toLowerCase())
);

const createNewCategory = () => {
  if (!searchCategory.trim()) return;

  if (receiver === "host") {
    setHostCategories((prev) => [...prev, searchCategory]);
  } else {
    setUserCategories((prev) => [...prev, searchCategory]);
  }

  handleChange("category", searchCategory);
  setSearchCategory("");
  setCategoryDropdownOpen(false);
};

  const filteredTitles = titleOptions.filter(t =>
    t.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const createCustomTitle = () => {
    if (!searchTitle.trim()) return;

    setTitleOptions(prev => [...prev, searchTitle]);
    handleChange("title", searchTitle);
    setSearchTitle("");
    setTitleDropdownOpen(false);
  };

  return (
    <div className="font-inter bg-white">

      {/* HEADER */}
      <h2 className="text-[26px] font-semibold text-black">
        Create Notification
      </h2>

      {/* SEND TO */}
      <div className="mt-3">

        <p className="text-[20px] font-medium text-[#364153] mb-1">Send To:</p>

        <div className="flex gap-4">

          <button
            onClick={() => {
              setReceiver("host");
              handleChange("receiver", "host");
            }}
            className={`group flex items-center justify-center gap-2 md:w-[145px] py-1.5 rounded-[8px] cursor-pointer border text-[20px] font-medium
            ${receiver === "host"
                ? "bg-[#30EF0A] text-white border-[#30EF0A]"
                : "border-[#C9C8C8] text-[#364153]"
              }`}
          >
            <FaHouseUser size={24} className={`${
              receiver === "host" ? "text-white" : "text-[#8E8E93]"
            }`} />
            Host
          </button>

          <button
            onClick={() => {
              setReceiver("user");
              handleChange("receiver", "user");
            }}
            className={`group flex items-center justify-center gap-2 md:w-[145px] py-1.5 rounded-[8px] cursor-pointer border text-[18px] font-medium
            ${receiver === "user"
                ? "bg-[#30EF0A] text-white border-[#30EF0A]"
                : "border-[#C9C8C8] text-[#364153]"
              }`}
          >
            <FaCar size={24} className={`${
              receiver === "user" ? "text-white" : "text-[#8E8E93]"
            }`} />
            User
          </button>

        </div>

      </div>

      {/* CATEGORY */}
      {receiver && (
        <div className="mt-4">

          <label className="text-[20px] text-[#364153] font-medium">
            Select {receiver === "user" ? "User" : "Host"} Category
          </label>

          <p className="text-[#7C7C7C] text-[16px] mb-3">
            Choose the type of notification for {receiver}s.
          </p>

          <div className="relative">

            <button
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className="w-full flex justify-between items-center border border-[#AAAAAA] px-4 py-3 rounded-[10px] hover:ring-[1px] hover:ring-[#30EF0A]"
            >
              {formData.category || "Select Category"}
              <ChevronDown size={18} />
            </button>

            {categoryDropdownOpen && (
  <div className="absolute w-full mt-2 bg-white border rounded-[12px] shadow-xl z-50 p-3">

    {/* SEARCH */}
    <div className="flex items-center border rounded-full px-4 py-2 mb-3 hover:ring-[1px] hover:ring-[#30EF0A]">

      <Search size={16} className="text-gray-500 mr-2" />

      <input
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
        placeholder="Search category"
        className="w-full outline-none"
      />

    </div>

    {/* OPTIONS */}
    <div className="max-h-[220px] overflow-y-auto">

      {filteredCategories.map((c) => (
        <button
          key={c}
          onClick={() => {
            handleChange("category", c);
            setCategoryDropdownOpen(false);
          }}
          className="block w-full text-left px-3 py-2 hover:bg-[#E1FFD9]"
        >
          {c}
        </button>
      ))}

    </div>

    {/* CREATE NEW */}
    {searchCategory && !categoryList.includes(searchCategory) && (

      <button
        onClick={createNewCategory}
        className="flex items-center gap-2 mt-3 text-[#30EF0A] font-medium"
      >
        <Plus size={16} />
        Create New Category
      </button>

    )}

  </div>
)}

          </div>

        </div>
      )}

      {/* TITLE */}
      <div className="mt-4">

        <label className="text-[20px] text-[#364153] font-medium">
          Notification Title
        </label>

        <div className="relative mt-2">

          <button
            onClick={() => setTitleDropdownOpen(!titleDropdownOpen)}
            className="w-full flex justify-between items-center border border-[#AAAAAA] px-4 py-3 rounded-[10px] hover:ring-[1px] hover:ring-[#30EF0A]"
          >
            {formData.title || "Select notification title"}
            <ChevronDown size={18} />
          </button>

          {titleDropdownOpen && (

            <div className="absolute w-full mt-2 bg-white border rounded-[12px] shadow-xl z-50 p-3">

              {/* SEARCH */}
              <div className="flex items-center border rounded-full px-4 py-2 mb-3">

                <Search size={16} className="text-gray-500 mr-2" />

                <input
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  placeholder="Search your notification title"
                  className="w-full outline-none"
                />

              </div>

              {/* LIST */}
              <div className="max-h-[220px] overflow-y-auto">

                {filteredTitles.map(title => (

                  <button
                    key={title}
                    onClick={() => {
                      handleChange("title", title);
                      setTitleDropdownOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-[#E1FFD9]"
                  >
                    {title}
                  </button>

                ))}

              </div>

              {/* CREATE CUSTOM */}
              {searchTitle && !titleOptions.includes(searchTitle) && (

                <button
                  onClick={createCustomTitle}
                  className="flex items-center gap-2 mt-3 text-[#30EF0A] font-medium"
                >
                  <Plus size={16} />
                  Create Custom Title
                </button>

              )}

            </div>

          )}

        </div>

      </div>

      {/* MESSAGE */}
      <div className="mt-6">

        <label className="text-[20px] text-[#364153] font-medium">
          Notification Message
        </label>

        <textarea
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Enter the notification message....."
          maxLength={1500}
          className="w-full mt-2 border border-[#AAAAAA] rounded-[10px] px-4 py-3 h-[120px] resize-none focus:outline-none focus:ring-[1px] focus:ring-[#30EF0A]"
        />

        <div className="text-right text-[14px] text-[#7C7C7C]">
          {formData.message.length}/1500
        </div>

      </div>

      {/* IMAGE UPLOAD */}
      <div className="mt-6 border rounded-[14px] p-5">

        <h3 className="text-[20px] font-medium text-[#364153]">
          Add Visual (Optional)
        </h3>

        <p className="text-[#7C7C7C] mb-4">
          Upload an image that will appear with this notification
        </p>

        <div className="border-2 border-dashed rounded-[12px] h-[140px] flex flex-col items-center justify-center bg-[#EAF7E9]">

          <UploadCloud size={34} className="text-gray-600 mb-2" />

          <p className="text-[#364153]">
            Drag and drop image here
          </p>

          <p className="text-[#7C7C7C]">
            or click to browse
          </p>

        </div>

        <div className="flex justify-between mt-3">

          <p className="text-[#7C7C7C]">
            Support Formats; JPG, PNG,GIF
          </p>

          <button className="border px-4 py-1 rounded-[8px]">
            Browse Files
          </button>

        </div>

      </div>

      {/* DELIVERY METHOD */}
      <div className="mt-6">

        <p className="text-[20px] text-[#364153] font-medium mb-3">
          Delivery Method:
        </p>

        <div className="flex gap-6">

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.inApp}
              onChange={(e) =>
                handleChange("inApp", e.target.checked)
              }
              className="peer hidden"
            />
            <div className="w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center
                  peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:[&>span]:block">

    <span className="hidden text-white">
      ✓
    </span>
    </div>
            In-App Notification
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.website}
              onChange={(e) =>
                handleChange("website", e.target.checked)
              }
              className="peer hidden"
            />
              <div className="w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center
                  peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:[&>span]:block">

    <span className="hidden text-white">
      ✓
    </span>

  </div>
            Website Notification
          </label>

        </div>

      </div>

      {/* SCHEDULE */}
      <div className="mt-6 border-t pt-4">

        <p className="text-[20px] text-[#364153] font-medium mb-3">
          Schedule:
        </p>

        <div className="flex gap-6">

          {["now", "later", "automation"].map(option => (

            <label key={option} className="flex items-center gap-2">

              <input
                type="radio"
                name="schedule"
                checked={formData.schedule === option}
                onChange={() => handleChange("schedule", option)}
                className="peer hidden"
              />
              <div className="w-5 h-5 rounded-full border-2 border-gray-300
                  peer-checked:border-[5px] peer-checked:border-green-500">
  </div>

              {option === "now"
                ? "Send Now"
                : option === "later"
                  ? "Schedule for Later"
                  : "Set Automation"}

            </label>

          ))}

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4 mt-8">

        <button className="border px-6 py-2 rounded-[10px]">
          Cancel
        </button>

        <button className="bg-[#30EF0A] text-white px-6 py-2 rounded-[10px]">
          Send Notification
        </button>

      </div>

    </div>
  );
}