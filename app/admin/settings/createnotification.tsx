"use client";

import { useState, useEffect } from "react";
import data from "../data/admin-data.json";
import {
  ChevronDown,
  Search,
  UploadCloud,
  Plus
} from "lucide-react";
import { FaCar } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import ScheduleNotificationModal from "./scheduleModal";
import AutomationModal from "./automationModal";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CreateNotification() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const automations = data.settings.notification.activeAutomations;

  const editingAutomation =
    automations.find((a: any) => a.id === Number(id));

  const [receiver, setReceiver] = useState<"host" | "user" | null>(null);

  const [titleDropdownOpen, setTitleDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [openAutomationModal, setOpenAutomationModal] = useState(false);
  const [titleOptions, setTitleOptions] = useState([
    "Weekly Revenue Summary",
    "Monthly Revenue Report",
    "Payout Processed",
    "Payout Failed",
    "High Priority Support Ticket",
    "Station Approved",
    "System Maintenance Notice"
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
    image: null as any,
    imageUrl: "",
    inApp: false,
    website: false,
    schedule: "now",
    start: "",
    end: "",
    time: "",
    scheduleType: ""
  });

  useEffect(() => {

    if (!editingAutomation) return;

    setReceiver(editingAutomation.receiver);

    setFormData({
      receiver: editingAutomation.receiver,
      category: editingAutomation.category,
      title: editingAutomation.title,
      message: editingAutomation.message,
      image: null,
      imageUrl: editingAutomation.imgurl,
      inApp: editingAutomation.inApp,
      website: editingAutomation.inWeb,
      schedule: "automation",
      start: editingAutomation.start,
      end: editingAutomation.end,
      time: editingAutomation.time,
      scheduleType: editingAutomation.scheduleType
    });

  }, [editingAutomation]);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File) => {
    setFormData(prev => ({
      ...prev,
      image: file,
      imageUrl: URL.createObjectURL(file)
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const filteredCategories = categoryList.filter(c =>
    c.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const createNewCategory = () => {
    if (!searchCategory.trim()) return;

    if (receiver === "host") {
      setHostCategories(prev => [...prev, searchCategory]);
    } else {
      setUserCategories(prev => [...prev, searchCategory]);
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

      <h2 className="text-[26px] font-semibold">
        {id ? "Edit Automation" : "Create Notification"}
      </h2>

      {/* SEND TO */}

      <div className="mt-3">

        <p className="text-[20px] font-medium text-[#364153] mb-1">
          Send To:
        </p>

        <div className="flex gap-4">

          <button
            onClick={() => {
              setReceiver("host");
              handleChange("receiver", "host");
            }}
            className={`group flex items-center justify-center gap-2 md:w-[145px] py-1.5 rounded-[8px] border text-[20px]
${receiver === "host"
                ? "bg-[#30EF0A] text-white border-[#30EF0A]"
                : "border-[#C9C8C8] text-[#364153]"}`}
          >

            <FaHouseUser size={24} />
            Host

          </button>

          <button
            onClick={() => {
              setReceiver("user");
              handleChange("receiver", "user");
            }}
            className={`group flex items-center justify-center gap-2 md:w-[145px] py-1.5 rounded-[8px] border text-[18px]
${receiver === "user"
                ? "bg-[#30EF0A] text-white border-[#30EF0A]"
                : "border-[#C9C8C8] text-[#364153]"}`}
          >

            <FaCar size={24} />
            User

          </button>

        </div>

      </div>

      {/* CATEGORY */}

      {receiver && (

        <div className="mt-4">

          <label className="text-[20px] font-medium text-[#364153]">
            Select {receiver === "user" ? "User" : "Host"} Category
          </label>

          <p className="text-[#7C7C7C] text-[16px] mb-3">
            Choose the type of notification for {receiver}s.
          </p>

          <div className="relative">

            <button
              onClick={() => {
                setCategoryDropdownOpen(!categoryDropdownOpen);
                setTitleDropdownOpen(false);
              }}
              className="w-full flex justify-between items-center border border-[#AAAAAA] px-4 py-3 rounded-[10px]"
            >

              {formData.category || "Select Category"}

              <ChevronDown size={18} />

            </button>

            {categoryDropdownOpen && (

              <div className="absolute w-full mt-2 bg-white border border-[#AAAAAA] rounded-[12px] shadow-xl z-50 p-3">

                <div className="flex items-center border border-[#AAAAAA] rounded-full px-4 py-2 mb-3">

                  <Search size={16} className="mr-2" />

                  <input
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    placeholder="Search category"
                    className="w-full outline-none"
                  />

                </div>

                <div className="max-h-[220px] overflow-y-auto">

                  {filteredCategories.map(c => (
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

                {searchCategory && !categoryList.includes(searchCategory) && (

                  <button
                    onClick={createNewCategory}
                    className="flex items-center gap-2 mt-3 text-[#30EF0A]"
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

        <label className="text-[20px] font-medium text-[#364153]">
          Notification Title
        </label>

        <div className="relative mt-2">

          <button
            onClick={() => {
              setTitleDropdownOpen(!titleDropdownOpen);
              setCategoryDropdownOpen(false);
            }}
            className="w-full flex justify-between items-center border border-[#AAAAAA] px-4 py-3 rounded-[10px]"
          >

            {formData.title || "Select notification title"}

            <ChevronDown size={18} />

          </button>

          {titleDropdownOpen && (

            <div className="absolute w-full mt-2 bg-white border border-[#AAAAAA] rounded-[12px] shadow-xl z-50 p-3">

              <div className="flex items-center border border-[#AAAAAA] rounded-full px-4 py-2 mb-3">

                <Search size={16} className="mr-2" />

                <input
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  placeholder="Search title"
                  className="w-full outline-none"
                />

              </div>

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

              {searchTitle && !titleOptions.includes(searchTitle) && (

                <button
                  onClick={createCustomTitle}
                  className="flex items-center gap-2 mt-3 text-[#30EF0A]"
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

        <label className="text-[20px] font-medium text-[#364153]">
          Notification Message
        </label>

        <textarea
          value={formData.message}
          placeholder="Write the content of your notification here..."
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full mt-2 border border-[#AAAAAA] rounded-[10px] px-4 py-3 h-[120px] placeholder:text-[#7C7C7C] resize-none"
        />

        <div className="text-right text-[14px] text-[#7C7C7C]">
          {formData.message.length}/1500
        </div>

      </div>

{/* IMAGE UPLOAD */}
<div className="mt-6 border border-[#AAAAAA] rounded-[14px] p-5">

<h3 className="text-[20px] font-medium text-[#364153]">
Add Visual (Optional)
</h3>

<p className="text-[#7C7C7C] mb-4">
Upload an image that will appear with this notification
</p>

{/* ------------------ BEFORE IMAGE ------------------ */}

{!formData.image && !formData.imageUrl && (

<>

<div
onDragOver={handleDragOver}
onDragLeave={handleDragLeave}
onDrop={handleDrop}
onClick={()=>document.getElementById("fileUpload")?.click()}
className={`border-2 border-dashed border-gray-300 rounded-[12px] bg-[#EAF7E9] h-[140px] flex flex-col items-center justify-center cursor-pointer`}
>

<UploadCloud size={38} className="text-gray-600 mb-2"/>

<p className="text-[#364153] text-[16px]">
Drag and drop image here
</p>

<p className="text-[#7C7C7C] text-[15px]">
or click to browse
</p>

<input
id="fileUpload"
type="file"
accept="image/png, image/jpeg, image/gif"
className="hidden"
onChange={handleFileChange}
/>

</div>

{/* SUPPORT TEXT + BUTTON */}

<div className="flex justify-between mt-3">

<p className="text-[#7C7C7C]">
Support Formats; JPG, PNG,GIF
</p>

<button
type="button"
onClick={()=>document.getElementById("fileUpload")?.click()}
className="border border-[#AAAAAA] px-4 py-1 rounded-[8px] bg-white"
>
Browse Files
</button>

</div>

</>

)}

{/* ------------------ AFTER IMAGE ------------------ */}

{(formData.image || formData.imageUrl) && (

<div className="border-2 border-dashed border-green-400 bg-[#EAF7E9] rounded-[12px] p-4">

<div className="flex gap-4 flex-wrap md:flex-nowrap items-center">

{/* IMAGE */}

<img
src={
formData.image
? URL.createObjectURL(formData.image)
: formData.imageUrl
}
className="w-[200px] h-[120px] object-cover rounded-md"
/>

{/* RIGHT SIDE */}

<div className="flex-1 ">

<h4 className="text-[18px] font-medium text-[#364153]">
{formData.image ? formData.image.name : "Charging_Banner.jpg"}
</h4>

<p className="text-[14px] text-[#7C7C7C]">
1.2 MB Uploaded <span className="text-green-600">Successfully</span>
</p>

<hr className="my-4 border-gray-300"/>

<div className="flex gap-3 justify-end">

{/* CHANGE */}

<button
type="button"
onClick={()=>document.getElementById("fileUpload")?.click()}
className="flex text-[#171717] font-medium items-center gap-2 border border-[#AAAAAA] px-4 py-2 rounded-[8px] bg-[#EEECEC]"
>
  <LuPencil size={16}/>
Change Photo
</button>

{/* REMOVE */}

<button
type="button"
onClick={()=>{
setFormData(prev=>({
...prev,
image:null,
imageUrl:""
}))
}}
className="flex items-center gap-2 border border-[#FA202342] text-[#CD0003] px-4 py-2 rounded-[8px] bg-[#FA202342]"
>
 < FaRegTrashAlt size={16}/>
Remove
</button>

<input
id="fileUpload"
type="file"
accept="image/png, image/jpeg, image/gif"
className="hidden"
onChange={handleFileChange}
/>

</div>

</div>

</div>

</div>

)}

</div>

      {/* DELIVERY */}

      <div className="mt-6">

        <p className="text-[20px] font-medium">
          Delivery Method
        </p>

      <div className="flex gap-6 mt-2">
        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={formData.inApp}
            onChange={(e) => handleChange("inApp", e.target.checked)}
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

        <label className="flex gap-2">

          <input
            type="checkbox"
            checked={formData.website}
            onChange={(e) => handleChange("website", e.target.checked)}
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
      <div className="mt-6 border-t border-[#AAAAAA] pt-4">

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
                onClick={() => {
                  if (option === "later") setOpenScheduleModal(true);
                  if (option === "automation") setOpenAutomationModal(true);
                }}
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

      {id && formData.schedule === "automation" && (

        <div className="mt-6">

          <h3 className="text-[20px] font-medium text-[#364153] mb-4">
            Scheduling
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {/* Start Date */}

            <div>

              <label className="text-[16px] text-[#364153]">
                Start Date:
              </label>

              <input
                type="date"
                value={formData.start ? formData.start.split("T")[0] : ""}
                onChange={(e) => handleChange("start", e.target.value)}
                className="w-full border border-[#AAAAAA] px-4 py-2 rounded-[8px] mt-1"
              />

            </div>

            {/* End Date */}

            <div>

              <label className="text-[16px] text-[#364153]">
                End Date:
              </label>

              <input
                type="date"
                value={formData.end ? formData.end.split("T")[0] : ""}
                onChange={(e) => handleChange("end", e.target.value)}
                className="w-full border border-[#AAAAAA] px-4 py-2 rounded-[8px] mt-1"
              />

            </div>

            {/* Time */}

            <div>

              <label className="text-[16px] text-[#364153]">
                Time:
              </label>

              <input
                type="time"
                value={formData.time ? formData.time.split("T")[1]?.slice(0, 5) : ""}
                onChange={(e) => handleChange("time", e.target.value)}
                className="w-full border border-[#AAAAAA] px-4 py-2 rounded-[8px] mt-1"
              />

            </div>

            {/* Frequency */}

            <div>

              <label className="text-[16px] text-[#364153]">
                Frequency:
              </label>

              <div className="flex gap-4 mt-2">

                {["daily", "weekly", "monthly"].map(freq => (

                  <label key={freq} className="flex items-center gap-2">

                    <input
                      type="radio"
                      name="frequency"
                      checked={formData.scheduleType === freq}
                      onChange={() => handleChange("scheduleType", freq)}
                      className="peer hidden"
                    />

                    <div className="w-5 h-5 rounded-full border-2 border-gray-300
peer-checked:border-[5px] peer-checked:border-green-500">
                    </div>

                    {freq.charAt(0).toUpperCase() + freq.slice(1)}

                  </label>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ACTIONS */}

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => router.back()}
          className="border px-6 py-2 rounded-[10px]"
        >
          Cancel
        </button>

        <button className="bg-[#30EF0A] text-white px-6 py-2 rounded-[10px]">

          {id ? "Send Changes" : "Send Notification"}

        </button>

      </div>
      <ScheduleNotificationModal open={openScheduleModal} onClose={() => setOpenScheduleModal(false)} />
      <AutomationModal open={openAutomationModal} onClose={() => setOpenAutomationModal(false)} />
    </div>

  );
}