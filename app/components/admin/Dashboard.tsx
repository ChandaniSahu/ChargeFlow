// "use client";

// import {
//   Users,
//   Home,
//   Plug,
//   IndianRupee,
//   CheckCircle,
//   Calendar,
//   CreditCard,
//   Headphones,
// } from "lucide-react";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// /* ---------- DATA ---------- */

// const stats = [
//   { title: "Total Users", value: "12,459", growth: "+12.5%", icon: Users },
//   { title: "Total Hosts", value: "847", growth: "+8.2%", icon: Home },
//   { title: "Active Chargers", value: "3,284", growth: "+12.5%", icon: Plug },
//   { title: "Total Revenue", value: "₹78,450", growth: "+12.5%", icon: IndianRupee },
// ];

// const actions = [
//   { title: "KYC Verifications", sub: "25 Pending Approvals", btn: "Review Now", icon: CheckCircle },
//   { title: "Add New Chargers", sub: "Setup & Configure", btn: "Configure", icon: Plug },
//   { title: "Booking Overview", sub: "Upcoming: 40 | Cancelled: 8", btn: "View All", icon: Calendar },
//   { title: "Payout Transactions", sub: "₹12,500 Pending", btn: "Manage Payout", icon: CreditCard },
//   { title: "Support Tickets", sub: "Open: 10 | Resolved: 45", btn: "View Tickets", icon: Headphones },
// ];

// const revenueData = [
//   { month: "Jan", revenue: 20000 },
//   { month: "Feb", revenue: 32000 },
//   { month: "Mar", revenue: 28000 },
//   { month: "Apr", revenue: 45000 },
//   { month: "May", revenue: 40000 },
//   { month: "Jun", revenue: 60000 },
// ];

// const utilizationData = [
//   { level: "25%", value: 40 },
//   { level: "50%", value: 65 },
//   { level: "75%", value: 85 },
//   { level: "100%", value: 70 },
// ];

// const chargerStatus = [
//   { name: "Active", value: 220, color: "#22c55e" },
//   { name: "Offline", value: 45, color: "#ef4444" },
//   { name: "Maintenance", value: 65, color: "#eab308" },
// ];

// /* ---------- COMPONENT ---------- */

// export default function Dashboard() {
//   return (
//     <div className="flex-1 my-4 mr-4 overflow-y-auto no-scrollbar">
//       {/* HEADER */}
//       <h1 className="font-inter font-semibold text-[36px] text-white mb-1">
//         Dashboard
//       </h1>
//       <p className="text-white text-[20px] mb-4">
//         Welcome back! Here's what's happening with ChargeFlow today.
//       </p>

//       <div className="space-y-6">
//         {/* STATS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//           {stats.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <div key={i} className="bg-white rounded-2xl p-4 shadow flex justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">{s.title}</p>
//                   <h2 className="text-2xl font-bold">{s.value}</h2>
//                   <p className="text-green-500 text-xs">{s.growth} vs last month</p>
//                 </div>
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                   <Icon className="text-green-600" size={20} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ACTIONS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
//           {actions.map((a, i) => {
//             const Icon = a.icon;
//             return (
//               <div key={i} className="bg-white p-4 rounded-2xl shadow">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Icon size={16} className="text-green-500" />
//                   <h3 className="font-semibold text-sm">{a.title}</h3>
//                 </div>
//                 <p className="text-xs text-gray-500">{a.sub}</p>
//                 <button className="mt-3 px-4 py-2 text-xs bg-green-500 text-white rounded-lg">
//                   {a.btn}
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* CHARTS */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
//           {/* Revenue */}
//           <div className="xl:col-span-2 bg-white rounded-2xl shadow p-4">
//             <h3 className="font-semibold mb-3">Revenue Trend</h3>
//             <ResponsiveContainer width="100%" height={220}>
//               <LineChart data={revenueData}>
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line dataKey="revenue" stroke="#22c55e" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Charger Utilization */}
//           <div className="bg-white rounded-2xl shadow p-4">
//             <h3 className="font-semibold mb-3">Charger Utilization</h3>
//             <ResponsiveContainer width="100%" height={220}>
//               <BarChart data={utilizationData}>
//                 <XAxis dataKey="level" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#22c55e" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* CHARGER STATUS */}
//         <div className="bg-white rounded-2xl shadow p-4 max-w-md">
//           <h3 className="font-semibold mb-3">Charger Status</h3>
//           <PieChart width={220} height={220} className="mx-auto">
//             <Pie
//               data={chargerStatus}
//               dataKey="value"
//               innerRadius={60}
//               outerRadius={90}
//             >
//               {chargerStatus.map((s, i) => (
//                 <Cell key={i} fill={s.color} />
//               ))}
//             </Pie>
//           </PieChart>

//           <div className="flex justify-between text-sm mt-4">
//             {chargerStatus.map((s, i) => (
//               <span key={i} style={{ color: s.color }}>
//                 {s.name}: {s.value}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import {
  Users,
  Home,
  Plug,
  IndianRupee,
  CheckCircle,
  Calendar,
  CreditCard,
  Headphones,
  TrendingUp,
  Car,
   BarChart2,
    Settings,
  MessageCircleQuestionMark,
} from "lucide-react";
import { TbCalendarTime } from "react-icons/tb";
import { FaChargingStation } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------- DATA ---------- */


const stats = [
  {
    topIcon: MdOutlinePeopleAlt,
    title: "Total Users",
    value: "12,459",
    growth: "+12.5%",
    bottomIcon: MdOutlinePeopleAlt,
  },
  {
    topIcon: Home,
    title: "Total Hosts",
    value: "847",
    growth: "+8.2%",
    bottomIcon: Home,
  },
  {
    topIcon: FaChargingStation ,
    title: "Active Chargers",
    value: "3,284",
    growth: "+12.5%",
    bottomIcon: Car,
  },
  {
    topIcon: RiMoneyRupeeCircleFill,
    title: "Total Revenue",
    value: "₹78,450",
    growth: "+12.5%",
    bottomIcon: SiSimpleanalytics,
  },
];

const actions = [
  {
    title: "KYC Verifications",
    sub: (
      <>
      <div className=" flex items-center gap-[0.3rem] ">
        <span className="text-[15px] font-semibold ">25</span>{" "}
        <span className="font-medium  text-[10px]">Pending Approvals</span>
      </div>
      </>
    ),
    btn: "Review Now",
    btnIcon: AiOutlineArrowRight,
    icon: CheckCircle,
  },
  {
    title: "Add New Chargers",
    sub: <span className="text-[11px]">Setup & Configure</span>,
    btn: "Configure",
    btnIcon: Settings,
    icon: FaChargingStation,
  },
  {
    title: "Booking Overview",
    sub: (
      <>
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[8px]">Upcoming:</span>{" "}
        <span className="font-semibold text-[#EA4335]">40</span>{" "}
        <span className="text-[8px]">| Cancelled:</span>{" "}
        <span className="font-semibold text-[#EA4335]">8</span>
      </div>
     
      </>
    ),
    btn: "View All",
    btnIcon:MdOutlineKeyboardArrowRight,
    icon: TbCalendarTime,
  },
  {
    title: "Payouts Transactions",
    sub: (
      <>
        <span className="font-semibold text-[14px]">₹12,500</span>&nbsp;
        <span className="text-[10px]">Pending Payout</span>
      </>
    ),
    btn: "Manage Payout",
    btnIcon:MdOutlineKeyboardArrowRight,
    icon: CreditCard,
  },
  {
    title: "Support Tickets",
    sub: (
      <>
        <div className="flex items-center gap-[0.3rem]">
          <span className="text-[9px]">Open{" "}:</span>{" "}
        <span className="font-semibold text-[#EA4335]">10</span>{" "}
        <span className="text-[9px]">| Resolved{" "}:</span>{" "}
        <span className="font-semibold text-[#EA4335]">45</span> 
        </div>
       
      </>
    ),
    btn: "View Tickets",
    btnIcon:MdOutlineKeyboardArrowRight,
    icon: MessageCircleQuestionMark,
  },
];

const revenueData = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 32000 },
  { month: "Mar", revenue: 28000 },
  { month: "Apr", revenue: 45000 },
  { month: "May", revenue: 40000 },
  { month: "Jun", revenue: 60000 },
];

const utilizationData = [
  { level: "0%-25%", value: 35 },
  { level: "26%-50%", value: 55 },
  { level: "51%-75%", value: 80 },
  { level: "76%-100%", value: 90 },
];

const chargerStatus = [
  { name: "Active", value: 260, color: "#22c55e" },
  { name: "Offline", value: 45, color: "#3b82f6" },
  { name: "Maintenance", value: 65, color: "#eab308" },
];

const bookingStatus = [
  { name: "Completed", value: 70, color: "#22c55e" },
  { name: "Upcoming", value: 20, color: "#3b82f6" },
  { name: "Cancelled", value: 10, color: "#ef4444" },
];

/* ---------- COMPONENT ---------- */

export default function Dashboard() {
  return (
    <div className="flex-1 my-4 mr-4 overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-3">
  
  {/* LEFT SIDE: Stats + Actions (4 columns) */}
  <div className="lg:col-span-4 space-y-3">

    {/* Stats Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[0.5rem]">
  {stats.map((s, i) => {
    const TopIcon = s.topIcon;
    const BottomIcon = s.bottomIcon;

    return (
      <div
        key={i}
        className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
      >
        {/* TOP ICON */}
        <div className="flex gap-[1rem] items-center mb-2 ">
          
            <TopIcon className="text-[#38EF0A]" size={30} />
            <p className="font-inter text-[13px] text-[#364153] font-medium">{s.title}</p>
        </div>
        
        {/* TEXT */}
        
        <h2 className="font-inter text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">{s.value}</h2>

        {/* GROWTH */}
        <div className="flex flex-col  gap-1 mt-1">
          
          <span className="font-inter text-[#25BB00] text-[14px] font-regular flex items-center gap-[0.5rem] ">
            <TrendingUp size={15} className="text-green-500" />
            {s.growth}
          </span>
          <span className="font-inter font-regular text-[#757575] text-[10px]">Vs Last Month</span>
        </div>

        {/* BOTTOM ICON (LIGHT GREEN, ROUNDED) */}
        <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-[#2CDE0026] rounded-full flex items-center justify-center">
          <BottomIcon className="text-[#38EF0A]" size={40} />
        </div>
      </div>
    );
  })}
</div>

    {/* Actions Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[0.3rem]">
      {actions.map((a, i) => {
  const TopIcon = a.icon;
  const BtnIcon = a.btnIcon;

  return (
    <div
      key={i}
      className="bg-white p-2 rounded-xl shadow-md border border-gray-100"
    >
      {/* TOP ICON + TITLE */}
      <div className="flex items-center gap-1 mb-2">
        <TopIcon size={17} className="text-[#2CDE00]" />
        <h3 className="font-inter font-semibold text-[11px] text-[#364153]">
          {a.title}
        </h3>
      </div>

      {/* SUB TEXT */}
      <p className="font-inter font-medium text-[#333333] mb-3">
        {a.sub}
      </p>

      {/* BUTTON */}
      <button className="flex items-center justify-center gap-1 w-[110px] py-1.5 text-[11px] font-semibold bg-[#38EF0A] hover:bg-green-600 text-white rounded-md">
        {a.btn}
        {BtnIcon && <BtnIcon size={14} />}
      </button>
    </div>
  );
})}
    </div>

  </div>

  {/* RIGHT SIDE: Booking Status (1 column) */}
  <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-md border border-gray-100">
    <h3 className="text-sm font-bold text-gray-700 mb-2">Booking Status</h3>
    <div className="flex justify-center mb-2">
      <PieChart width={120} height={120}>
        <Pie data={bookingStatus} dataKey="value" innerRadius={35} outerRadius={55}>
          {bookingStatus.map((e, i) => (
            <Cell key={i} fill={e.color} stroke="none" />
          ))}
        </Pie>
      </PieChart>
    </div>
    <div className="space-y-1">
      {bookingStatus.map((s, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
          <span className="text-gray-600 font-medium">{s.name}</span>
        </div>
      ))}
    </div>
  </div>

</div>


      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

  {/* Revenue Trend - 2/4 width */}
  <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4 border border-gray-100">
    <h3 className="font-bold text-sm text-gray-700 mb-3">Revenue Trend</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={revenueData}>
        <XAxis dataKey="month" tickLine={false} />
        <YAxis tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Charger Utilization - 1/4 width */}
  <div className="bg-white rounded-2xl shadow p-4">
    <h3 className="font-semibold mb-3">Charger Utilization</h3>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={utilizationData}>
        <XAxis dataKey="level" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Charger Status - 1/4 width */}
  <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
    <h3 className="font-bold text-sm text-gray-700 mb-3">Charger Status</h3>
    <div className="flex justify-center mb-3">
      <PieChart width={160} height={160}>
        <Pie data={chargerStatus} dataKey="value" innerRadius={45} outerRadius={70}>
          {chargerStatus.map((e, i) => (
            <Cell key={i} fill={e.color} stroke="none" />
          ))}
        </Pie>
      </PieChart>
    </div>
  </div>

</div>


      {/* Charger Utilization */}
      {/* <div className="mt-3 bg-white rounded-xl shadow-md p-4 border border-gray-100">
        <h3 className="font-bold text-sm text-gray-700 mb-3">Charger Utilization</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={utilizationData}>
            <XAxis 
              dataKey="level" 
              stroke="#9ca3af"
              style={{ fontSize: '11px' }}
              tickLine={false}
            />
            <YAxis 
              stroke="#9ca3af"
              style={{ fontSize: '11px' }}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '11px',
                padding: '6px 10px'
              }}
              formatter={(value) => [value, 'Chargers']}
            />
            <Bar 
              dataKey="value" 
              fill="#22c55e" 
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
}