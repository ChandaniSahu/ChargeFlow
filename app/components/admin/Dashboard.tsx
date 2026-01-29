// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// const stats = [
//   { title: "Total Users", value: "12,459", growth: "+12.5%" },
//   { title: "Total Hosts", value: "847", growth: "+8.2%" },
//   { title: "Active Chargers", value: "3,284", growth: "+12.5%" },
//   { title: "Total Revenue", value: "₹78,450", growth: "+12.5%" },
// ];

// const actions = [
//   { title: "KYC Verifications", sub: "25 Pending Approvals", btn: "Review Now" },
//   { title: "Add New Chargers", sub: "Setup & Configure", btn: "Configure" },
//   { title: "Booking Overview", sub: "Upcoming: 40 | Cancelled: 8", btn: "View All" },
//   { title: "Payout Transactions", sub: "₹12,500 Pending", btn: "Manage Payout" },
//   { title: "Support Tickets", sub: "Open: 10 | Resolved: 45", btn: "View Tickets" },
// ];

// export default function Dashboard() {
//   return (
//     <div className=" my-4 mr-4 overflow-y-auto no-scrollbar">
//       <h1 className=" font-inter font-semibold text-[36px] text-white leading-[100%]
//     tracking-[0%] capitalize mb-1">Dashboard</h1>
//        <p className="font-arial font-[400] text-[20px] text-white leading-[100%] tracking-[0%] mb-3">Welcome back! Here's what's happening with ChargeFlow today.</p>
//         <div className="space-y-6">
//           {/* STATS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center"
//               >
//                 <div>
//                   <p className="text-sm text-gray-500">{s.title}</p>
//                   <h2 className="text-2xl font-bold">{s.value}</h2>
//                   <p className="text-green-500 text-xs mt-1">{s.growth} vs last month</p>
//                 </div>
//                 <div className="w-12 h-12 bg-green-100 rounded-full" />
//               </div>
//             ))}
//           </div>

//           {/* ACTION CARDS */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
//             {actions.map((a, i) => (
//               <div key={i} className="bg-white p-4 rounded-2xl shadow-lg">
//                 <h3 className="font-semibold text-sm">{a.title}</h3>
//                 <p className="text-xs text-gray-500 mt-1">{a.sub}</p>
//                 <button className="mt-3 px-4 py-2 text-xs bg-green-500 text-white rounded-lg">
//                   {a.btn}
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* CHARTS + STATUS */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
//             {/* Revenue Graph */}
//             <div className="xl:col-span-2 bg-white rounded-2xl shadow-lg p-4">
//               <h3 className="font-semibold mb-3">Revenue Trend</h3>
//               <div className="h-56 bg-green-50 rounded-xl flex items-center justify-center text-gray-400">
//                 Graph Placeholder
//               </div>
//             </div>

//             {/* Booking Status */}
//             <div className="bg-white rounded-2xl shadow-lg p-4">
//               <h3 className="font-semibold mb-3">Booking Status</h3>
//               <div className="h-56 rounded-full border-[12px] border-green-400 border-r-blue-400 border-b-red-400 mx-auto w-40" />
//               <div className="mt-4 text-sm space-y-1">
//                 <p className="text-green-500">● Completed</p>
//                 <p className="text-blue-500">● Upcoming</p>
//                 <p className="text-red-500">● Cancelled</p>
//               </div>
//             </div>
//           </div>

//           {/* CHARGER STATUS */}
//           <div className="bg-white rounded-2xl shadow-lg p-4 max-w-md">
//             <h3 className="font-semibold mb-3">Charger Status</h3>
//             <div className="h-40 rounded-full border-[12px] border-green-500 border-r-yellow-400 border-b-red-400 mx-auto w-32" />
//             <div className="flex justify-between text-sm mt-4">
//               <span className="text-green-500">Active: 220</span>
//               <span className="text-red-500">Offline: 45</span>
//               <span className="text-yellow-500">Maintenance: 65</span>
//             </div>
//           </div>
//         </div>
    
//     </div>
//   );
// }

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
} from "lucide-react";

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
  { title: "Total Users", value: "12,459", growth: "+12.5%", icon: Users },
  { title: "Total Hosts", value: "847", growth: "+8.2%", icon: Home },
  { title: "Active Chargers", value: "3,284", growth: "+12.5%", icon: Car },
  { title: "Total Revenue", value: "₹78,450", growth: "+12.5%", icon: TrendingUp },
];

const actions = [
  { title: "KYC Verifications", sub: "25 Pending Approvals", btn: "Review Now", icon: CheckCircle },
  { title: "Add New Chargers", sub: "Setup & Configure", btn: "Configure", icon: Plug },
  { title: "Booking Overview", sub: "Upcoming: 40 | Cancelled: 8", btn: "View All", icon: Calendar },
  { title: "Payouts Transactions", sub: "₹12,500 Pending Payout", btn: "Manage Payout", icon: CreditCard },
  { title: "Support Tickets", sub: "Open: 10 | Resolved: 45", btn: "View Tickets", icon: Headphones },
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
      {/* Top section with stats and booking status */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-3">
        {/* Stats Cards - 4 columns */}
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <Icon className="text-green-500" size={20} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-1 font-medium">{s.title}</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{s.value}</h2>
              <div className="flex items-center gap-1">
                <TrendingUp className="text-green-500" size={12} />
                <span className="text-green-500 text-xs font-semibold">{s.growth}</span>
                <span className="text-gray-400 text-xs">Vs Last Month</span>
              </div>
            </div>
          );
        })}

        {/* Booking Status - 1 column */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-md border border-gray-100">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Booking Status</h3>
          <div className="flex items-center justify-center mb-2">
            <PieChart width={120} height={120}>
              <Pie
                data={bookingStatus}
                dataKey="value"
                innerRadius={35}
                outerRadius={55}
                paddingAngle={0}
              >
                {bookingStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="space-y-1">
            {bookingStatus.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-gray-600 font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-3">
        {actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-50 p-1.5 rounded-md">
                  <Icon size={14} className="text-green-500" />
                </div>
                <h3 className="font-bold text-xs text-gray-800">{a.title}</h3>
              </div>
              <p className="text-[10px] text-gray-500 mb-3 leading-tight">{a.sub}</p>
              <button className="w-full px-3 py-1.5 text-[11px] font-semibold bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors">
                {a.btn}
              </button>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Revenue Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4 border border-gray-100">
          <h3 className="font-bold text-sm text-gray-700 mb-3">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <XAxis 
                dataKey="month" 
                stroke="#9ca3af"
                style={{ fontSize: '11px' }}
                tickLine={false}
              />
              <YAxis 
                stroke="#9ca3af"
                style={{ fontSize: '11px' }}
                tickFormatter={(value) => `${value/1000}k`}
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
                formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
              />
              <Line 
                type="monotone"
                dataKey="revenue" 
                stroke="#22c55e" 
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Charger Status */}
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
          <h3 className="font-bold text-sm text-gray-700 mb-3">Charger Status</h3>
          <div className="flex items-center justify-center mb-3">
            <PieChart width={180} height={180}>
              <Pie
                data={chargerStatus}
                dataKey="value"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={0}
              >
                {chargerStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="flex justify-between text-[11px] font-medium">
            {chargerStatus.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: s.color }}
                />
                <span style={{ color: s.color }}>
                  {s.name}: {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charger Utilization */}
      <div className="mt-3 bg-white rounded-xl shadow-md p-4 border border-gray-100">
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
      </div>
    </div>
  );
}