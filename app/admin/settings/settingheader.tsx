"use client";

import Link from "next/link";

const tabs = [
  { name: "General", key: "general" },
  { name: "Commission", key: "commission" },
  { name: "Roles", key: "roles" },
  { name: "Notification", key: "notification" },
  { name: "Security", key: "security" },
];

export default function SettingsHeader({ active }: { active: string }) {
  return (
    <div className="flex  justify-around items-center bg-white  rounded-full py-2">
      {tabs.map((tab) => {
        const isActive = active === tab.key;

        return (
          <Link
            key={tab.key}
            href={`/admin/settings?type=${tab.key}`}
            className={`font-inter flex items-center  justify-center md:w-[170px] overflow-x-auto no-scrollbar py-2 rounded-full text-[20px] font-medium transition-all
              ${
                isActive
                  ? "bg-[#30EF0A] text-white"
                  : "text-gray-700 hover:bg-green-100"
              }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}