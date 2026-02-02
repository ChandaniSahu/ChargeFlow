// "use client";
// import {
//   Home,
//   Users,
//   Calendar,
//   BarChart2,
//   Settings,
// } from "lucide-react";
// import { LuBadgeIndianRupee, LuLayoutDashboard } from "react-icons/lu";
// import { RiChargingPileLine } from "react-icons/ri";
// import { BiSupport } from "react-icons/bi";

// const menu = [
//   { title: "Dashboard", icon: LuLayoutDashboard, active: true },
//   { title: "User Management", icon: Users },
//   { title: "Host Management", icon: Home },
//   { title: "Charger Management", icon: RiChargingPileLine },
//   { title: "Booking Management", icon: Calendar },
//   { title: "Payments & Revenue", icon: LuBadgeIndianRupee },
//   { title: "Support Tickets", icon: BiSupport },
//   { title: "Analytics & Reports", icon: BarChart2 },
//   { title: "Settings", icon: Settings },
// ];

// export default function Sidebar() {
//   return (
//     <>
//       {/* 🔹 Mobile / Tablet Horizontal Menu */}
//       <div className="desktop:hidden overflow-x-auto no-scrollbar">
//         <div className="flex gap-3 min-w-max">
//           {menu.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap
//                   ${
//                     item.active
//                       ? "bg-green-500 text-white"
//                       : "bg-white/80 text-gray-700"
//                   }`}
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-xs font-medium">{item.title}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* 🔹 Desktop Vertical Sidebar */}
//       <aside className="desktop:block hidden min-w-[220px] mx-2 my-4 py-4 px-1 bg-white rounded-[20px] shadow-xl overflow-y-auto no-scrollbar">
//         <div className="space-y-2">
//           {menu.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className={`flex items-center gap-2 px-3 py-3 rounded-[7px] cursor-pointer transition  shadow-[0px_0px_4.8px_0px_#0000002E]
//                   ${
//                     item.active
//                       ? "bg-gradient-to-r from-[#30EF0A] to-[#25D402] text-white"
//                       : "hover:bg-green-50 text-gray-700"
//                   }`}
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-[14.5px] font-medium">{item.title}</span>
//               </div>
//             );
//           })}
//         </div>
//       </aside>
//     </>
//   );
// }

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
  { title: "Booking Management", icon: Calendar, path: "/admin/bookings" },
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
      <div className="desktop:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-3 min-w-max p-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                href={item.path}
                key={i}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap
                  ${
                    isActive
                      ? "bg-green-500 text-white"
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
      <aside className="desktop:block hidden min-w-[220px] mx-2 my-4 py-4 px-1 bg-white rounded-[20px] shadow-xl overflow-y-auto no-scrollbar">
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
      </aside>
    </>
  );
}