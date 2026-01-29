"use client";
import {
  Home,
  Users,
  Plug,
  Calendar,
  CreditCard,
  Headphones,
  BarChart2,
  Settings,
} from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";

const menu = [
  { title: "Dashboard", icon: LuLayoutDashboard, active: true },
  { title: "User Management", icon: Users },
  { title: "Host Management", icon: Home },
  { title: "Charger Management", icon: Plug },
  { title: "Booking Management", icon: Calendar },
  { title: "Payments & Revenue", icon: CreditCard },
  { title: "Support Tickets", icon: BiSupport },
  { title: "Analytics & Reports", icon: BarChart2 },
  { title: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[290px] m-4 py-4 px-2 bg-white rounded-[20px] shadow-xl overflow-y-auto no-scrollbar">
      <div className="space-y-2">
        {menu.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-2 py-3 w-[250px] rounded-[7px] cursor-pointer transition shadow-[0px_0px_4.8px_0px_#0000002E]
              ${
                item.active
                  ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
                  : "hover:bg-green-50 text-gray-700"
              }`}
            >
              <Icon className="h-7 w-7" />
              <span className="font-inter text-[18px] font-medium">{item.title}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
