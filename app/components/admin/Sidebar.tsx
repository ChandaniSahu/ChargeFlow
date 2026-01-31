// "use client";
// import {
//   Home,
//   Users,
//   Plug,
//   Calendar,
//   CreditCard,
//   Headphones,
//   BarChart2,
//   Settings,
// } from "lucide-react";
// import { LuBadgeIndianRupee } from "react-icons/lu";
// import { FaChargingStation } from "react-icons/fa6";
// import { RiChargingPileLine } from "react-icons/ri";
// import { BiSupport } from "react-icons/bi";
// import { LuLayoutDashboard } from "react-icons/lu";

// const menu = [
//   { title: "Dashboard", icon: LuLayoutDashboard, active: true },
//   { title: "User Management", icon: Users },
//   { title: "Host Management", icon: Home },
//   { title: "Charger Management", icon: RiChargingPileLine   },
//   { title: "Booking Management", icon: Calendar },
//   { title: "Payments & Revenue", icon: LuBadgeIndianRupee},
//   { title: "Support Tickets", icon: BiSupport },
//   { title: "Analytics & Reports", icon: BarChart2 },
//   { title: "Settings", icon: Settings },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="hidden lg:block w-[258px] m-4 py-4 px-2 bg-white rounded-[20px] shadow-xl overflow-y-auto no-scrollbar">
//       <div className="space-y-2">
//         {menu.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={i}
//               className={`flex items-center gap-1 px-2 py-3 w-[236px] rounded-[7px] cursor-pointer transition shadow-[0px_0px_4.8px_0px_#0000002E]
//               ${
//                 item.active
//                   ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
//                   : "hover:bg-green-50 text-gray-700"
//               }`}
//             >
//               <Icon className="h-7 w-7" />
//               <span className="font-inter text-[18px] font-medium">{item.title}</span>
//             </div>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }


"use client";
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
  { title: "Dashboard", icon: LuLayoutDashboard, active: true },
  { title: "User Management", icon: Users },
  { title: "Host Management", icon: Home },
  { title: "Charger Management", icon: RiChargingPileLine },
  { title: "Booking Management", icon: Calendar },
  { title: "Payments & Revenue", icon: LuBadgeIndianRupee },
  { title: "Support Tickets", icon: BiSupport },
  { title: "Analytics & Reports", icon: BarChart2 },
  { title: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <>
      {/* 🔹 Mobile / Tablet Horizontal Menu */}
      <div className="desktop:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-3 min-w-max">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap
                  ${
                    item.active
                      ? "bg-green-500 text-white"
                      : "bg-white/80 text-gray-700"
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Desktop Vertical Sidebar */}
      <div className="desktop:block hidden w-[220px] mx-2 my-4 py-4 px-1 bg-white rounded-[20px] shadow-xl overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-3 rounded-[7px] cursor-pointer transition  shadow-[0px_0px_4.8px_0px_#0000002E]
                  ${
                    item.active
                      ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
                      : "hover:bg-green-50 text-gray-700"
                  }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-[16px] font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}