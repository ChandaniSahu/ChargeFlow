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
    <div className="flex flex-wrap gap-2 bg-white/70 rounded-full p-2 w-fit">
      {tabs.map((tab) => {
        const isActive = active === tab.key;

        return (
          <Link
            key={tab.key}
            href={`/admin/settings?type=${tab.key}`}
            className={`px-6 py-2 rounded-full text-[15px] font-medium transition-all
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