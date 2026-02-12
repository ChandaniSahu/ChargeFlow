"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  BarChart2,
  Settings,
} from "lucide-react";
import { LuBadgeIndianRupee, LuLayoutDashboard } from "react-icons/lu";
import { RiChargingPileLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const menu = [
  { title: "Dashboard", icon: LuLayoutDashboard, path: "/admin/dashboard" },
  { title: "User Management", icon: Users, path: "/admin/usermanagement" },
  { title: "Host Management", icon: Home, path: "/admin/hostmanagement" },
  { title: "Charger Management", icon: RiChargingPileLine, path: "/admin/chargermanagement" },
  { title: "Booking Management", icon: Calendar, path: "/admin/bookingmanagement" },
  { title: "Payments & Revenue", icon: LuBadgeIndianRupee, path: "/admin/payments" },
  { title: "Support Tickets", icon: BiSupport, path: "/admin/support" },
  { title: "Analytics & Reports", icon: BarChart2, path: "/admin/analytics" },
  { title: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* 🔹 Mobile / Tablet Horizontal Menu */}
      <div className="desktop:hidden overflow-x-auto custom-scrollbar">
        <div className="flex gap-3 min-w-max py-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                href={item.path}
                key={i}
                className={`flex flex-col items-center gap-1 min-w-[140px] py-2 rounded-lg cursor-pointer whitespace-nowrap
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
                      : "bg-white/80 text-gray-700"
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 🔹 Desktop Vertical Sidebar */}
      <div className="desktop:block hidden min-w-[212px] mx-2 my-4 py-4 px-1 bg-white overflow-auto no-scrollbar rounded-[20px] shadow-xl">
        <div className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                href={item.path}
                key={i}
                className={`flex items-center gap-2 px-3 py-3 rounded-[7px] cursor-pointer transition shadow-[0px_0px_4.8px_0px_#0000002E]
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
                      : "hover:bg-green-50 text-gray-700"
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[14.5px] font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}