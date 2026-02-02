"use client";
import { useState } from "react";
import {
  Users, CheckCircle, Radio, DollarSign, FileCheck, Wallet, FileText, UserX, Calendar, CreditCard, TrendingUp, Clock, User,
  LogIn,
  UserPlus,
  XCircle,
  Ban,
  Unlock,
  Search,
  Filter,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";

// import Image from "next/image";

/* ================= DATA ================= */
export const userStats = [
  {
    topIcon: MdOutlinePeopleAlt,
    title: "Total Users",
    value: "1,459",
    growth: "+12.5%",
    bottomIcon: MdOutlinePeopleAlt,
  },
  {
    topIcon: CheckCircle,
    title: "User Verified",
    value: "1,120",
    growth: "+10%",
    bottomIcon: CheckCircle,
  },
  {
    topIcon: Radio,
    title: "Active User",
    value: "156",
    growth: "+10%",
    bottomIcon: Radio,
  },
  {
    topIcon: RiMoneyRupeeCircleFill,
    title: "Total Revenue",
    value: "₹2,85,450",
    growth: "+14.5%",
    bottomIcon: SiSimpleanalytics,
  },
];

const actionCards = [
  {
    title: "KYC Verifications",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[15px] font-semibold">28</span>
        <span className="text-[10px] font-medium">Pending Approvals</span>
      </div>
    ),
    btn: "Review Now",
    btnIcon: AiOutlineArrowRight,
    icon: CheckCircle,
  },
  {
    title: "Wallet",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[14px] font-semibold">₹45,200</span>
        <span className="text-[10px]">Success</span>
      </div>
    ),
    btn: "View All",
    btnIcon: AiOutlineArrowRight,
    icon: Wallet,
  },
  {
    title: "Payment History",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[14px] font-semibold">145</span>
        <span className="text-[10px]">Successful Payments</span>
      </div>
    ),
    btn: "View Reports",
    btnIcon: AiOutlineArrowRight,
    icon: FileText,
  },
  {
    title: "Blocked Users",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[14px] font-semibold text-[#EA4335]">07</span>
        <span className="text-[10px]">Blocked Accounts</span>
      </div>
    ),
    btn: "Manage List",
    btnIcon: AiOutlineArrowRight,
    icon: UserX,
  },
];

export const chargerStatus = [
  { name: "Active", value: 220, color: "#22c55e" },
  { name: "Offline", value: 45, color: "#ef4444" },
  { name: "Maintenance", value: 65, color: "#facc15" },
];

export const revenueData = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 28000 },
  { month: "Mar", revenue: 24000 },
  { month: "Apr", revenue: 35000 },
  { month: "May", revenue: 38000 },
  { month: "Jun", revenue: 45000 },
  { month: "Jul", revenue: 50000 },
];




export interface ActivityItem {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  time: string;
  status: "booking" | "payment" | "profile" | "login" | "registration";
  amount?: string;
  imageUrl: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Completed Charging Session",
    subTitle: "DC fast charger · 45 kWh",
    time: "5 minutes ago",
    amount: "₹350.00",
    status: "booking",
    imageUrl: "/images/user.jpg"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    title: "New Booking Created",
    subTitle: "AC 22kW charger · scheduled for tomorrow",
    time: "12 minutes ago",
    amount: "₹220.00",
    status: "booking",
    imageUrl: "/images/user1.jpg"
  },
  {
    id: 3,
    name: "Anjali Patel",
    title: "Payment Successful",
    subTitle: "Booking #bk-2456 · ₹3,240",
    time: "28 minutes ago",
    amount: "₹450.00",
    status: "payment",
    imageUrl: "/images/user2.jpg"

  },

  /* 🔽 Added from uploaded image */

  {
    id: 4,
    name: "Vikram Singh",
    title: "Profile Updated",
    subTitle: "Updated payment method and address",
    time: "1 hour ago",
    status: "profile",
    imageUrl: "/images/user3.jpg"

  },
  {
    id: 5,
    name: "Neha Reddy",
    title: "Logged In",
    subTitle: "Active on web",
    time: "1 hour ago",
    status: "login",
    imageUrl: "/images/user.jpg"
  },
  {
    id: 6,
    name: "Arjun Verma",
    title: "Booking Cancelled",
    subTitle: "Refund processed · ₹550",
    time: "2 hours ago",
    amount: "₹550.00",
    status: "booking",
    imageUrl: "/images/user1.jpg"
  },
  {
    id: 7,
    name: "Kavya Nair",
    title: "New Account Created",
    subTitle: "Registered via email",
    time: "3 hours ago",
    status: "registration",
    imageUrl: "/images/user3.jpg"
  },
];



const getStatusStyles = (status: ActivityItem['status']) => {
  switch (status) {
    case "booking":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "payment":
      return "bg-green-50 text-green-600 border-green-200";
    case "profile":
      return "bg-purple-50 text-purple-600 border-purple-200";
    case "login":
      return "bg-amber-50 text-amber-600 border-amber-200";
    case "registration":
      return "bg-indigo-50 text-indigo-600 border-indigo-200";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};


const getStatusText = (status: ActivityItem['status']) => {
  switch (status) {
    case "booking":
      return "Booking";
    case "payment":
      return "Payment";
    case "profile":
      return "Profile";
    case "login":
      return "Login";
    case "registration":
      return "Registration";
    default:
      return status;
  }
};


const getStatusIcon = (status: ActivityItem['status']) => {
  switch (status) {
    case "booking":
      return Calendar;
    case "payment":
      return Wallet;
    case "profile":
      return User;
    case "login":
      return LogIn;
    case "registration":
      return UserPlus;
    default:
      return Clock;
  }
};



// 1. DATA ARRAY
const userData = [
  { id: 1, name: 'Priya Singh', email: 'priyasingh@gmail.com', contact: '+91 5678903488', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success' },
  { id: 2, name: 'Rohit Singh', email: 'rohitsingh@gmail.com', contact: '+91 5778433390', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Pending' },
  { id: 3, name: 'Sneha Kapoor', email: 'snehakapoor@gmail.com', contact: '+91 1258444907', status: 'Inactive', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Pending' },
  { id: 4, name: 'Neha Singh', email: 'nehasingh@gmail.com', contact: '+91 3279333487', status: 'Blocked', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Failed' },
  { id: 5, name: 'Rahul Sharma', email: 'rahulsharma@gmail.com', contact: '+91 7576329420', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success' },
];

// 2. ICON SWITCH CASE HELPER
const GetStatusIcon = (type: string, status: string) => {
  switch (status.toLowerCase()) {
    case 'success':
    case 'active':
      return <CheckCircle size={16} className="text-green-500" />;
    case 'pending':
      return <Clock size={16} className="text-orange-400" />;
    case 'failed':
    case 'blocked':
    case 'inactive':
      return <XCircle size={16} className="text-red-500" />;
    default:
      return null;
  }
};



/* ================= COMPONENT ================= */
export default function UserManagementDashboard() {
  const [filterStatus, setFilterStatus] = useState('All Status');
const [searchTerm, setSearchTerm] = useState('');
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// 3. FILTER LOGIC
const filteredUsers = userData.filter(user => {
  const matchesFilter = filterStatus === 'All Status' || user.status === filterStatus;
  const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesFilter && matchesSearch;
});

  return (
    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2 flex flex-col desktop:w-[1010px]">
      {/* HEADER */}
      <div className="mb-3">
        <h1 className="text-[32px] font-semibold text-white">User Management</h1>
        <p className="text-[16px] text-white/90">
          Manage and monitor all platform users
        </p>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar green">
        {/* STATS + ACTIONS + CHARGER STATUS */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch  w-full red">
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-3 h-full">
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.6rem]">
              {userStats.map((s, i) => {
                const TopIcon = s.topIcon;
                const BottomIcon = s.bottomIcon;

                return (
                  <div
                    key={i}
                    className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* TOP ICON */}
                    <div className="flex gap-4 items-center mb-2">
                      <TopIcon className="text-[#38EF0A]" size={30} />
                      <p className="text-[13px] text-[#364153] font-medium">
                        {s.title}
                      </p>
                    </div>

                    {/* VALUE */}
                    <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-2">
                      {s.value}
                    </h2>

                    {/* GROWTH */}
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-[#25BB00] text-[14px] flex items-center gap-2">
                        <TrendingUp size={15} />
                        {s.growth}
                      </span>
                      <span className="text-[#757575] text-[10px] -mt-1">
                        Vs Last Month
                      </span>
                    </div>

                    {/* BOTTOM ICON */}
                    <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-[#2CDE0026] rounded-full flex items-center justify-center">
                      <BottomIcon className="text-[#38EF0A]" size={40} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ACTION CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.6rem] mt-3">
              {actionCards.map((a, i) => {
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
                      <h3 className="text-[11px] font-semibold text-[#364153]">
                        {a.title}
                      </h3>
                    </div>

                    {/* SUB TEXT */}
                    <div className="text-[#333333] mb-3 border-t-[1.5px] border-[#DFDFDF] pt-1 text-sm">
                      {a.sub}
                    </div>

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

          {/* CHARGER STATUS */}
          <div className="w-full lg:w-[220px]  bg-white rounded-xl shadow border px-3 py-2 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Charger Status
            </h3>

            <div className="flex flex-1 justify-center items-center">
              <PieChart width={160} height={160}>
                <Pie
                  data={chargerStatus}
                  dataKey="value"
                  innerRadius={45}
                  outerRadius={70}
                  startAngle={-90}
                  endAngle={-450}
                >
                  {chargerStatus.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="space-y-1 ">
              {chargerStatus.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: s.color }}
                  />
                  <span className="text-gray-600">
                    {s.name}: <b>{s.value}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY + REVENUE CONTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] gap-3">
          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>

            {/* LIST WRAPPER */}
            <div className="max-h-[260px] overflow-y-auto no-scrollbar -mx-4 border-t border-[#DEDEDE]">
              {activities.map((a) => {
                const StatusIcon = getStatusIcon(a.status);

                return (
                  <div
                    key={a.id}
                    className="flex items-center justify-between border-b-2 border-[#DEDEDE] py-4 px-4 last:border-b-0"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                      <img
                        src={a.imageUrl}
                        alt={a.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-semibold text-sm text-gray-900">{a.name}</p>
                        <p className="text-xs text-gray-600">{a.title}</p>
                        <p className="text-xs text-gray-400">{a.subTitle}</p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        {a.amount && <p className="text-green-600 font-semibold text-sm">
                          {a.amount}
                        </p>}
                        <p className="text-xs text-gray-400">{a.time}</p>
                      </div>

                      <span
                        className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md ${getStatusStyles(
                          a.status
                        )}`}
                      >
                        <StatusIcon size={14} />
                        {getStatusText(a.status)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* USER REVENUE CONTRIBUTION */}
          <div className="bg-white rounded-xl p-4 shadow border">
            <h3 className="text-lg font-semibold mb-3">User Revenue Contribution</h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-200"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 min-w-[140px] justify-between"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <span className="font-medium text-gray-700">{filterStatus}</span>
            </div>
            <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden">
              {['All Status', 'Active', 'Inactive', 'Blocked'].map((status) => (
                <button
                  key={status}
                  className={`w-full text-left px-4 py-3 hover:bg-green-50 flex items-center justify-between ${filterStatus === status ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-600'}`}
                  onClick={() => { setFilterStatus(status); setIsDropdownOpen(false); }}
                >
                  {status}
                  {filterStatus === status && <CheckCircle size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        {/* Horizontal Scroll wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="px-6 py-4 text-[#364153] font-bold text-sm">User Name</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Contact</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Status</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Date</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Total Bookings</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Total Amount</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Payment Status</th>
                <th className="px-6 py-4 text-[#364153] font-bold text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{user.name}</div>
                        <div className="text-xs text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center font-medium">{user.contact}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold ${
                      user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {GetStatusIcon('status', user.status)}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-center">{user.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-center">{user.bookings}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-semibold text-center">{user.amount}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold border ${
                      user.paymentStatus === 'Success' ? 'bg-green-50 text-green-600 border-green-200' :
                      user.paymentStatus === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-200' :
                      'bg-red-50 text-red-600 border-red-200'
                    }`}>
                      {GetStatusIcon('payment', user.paymentStatus)}
                      {user.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-center">
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-500 rounded-md text-xs font-bold hover:bg-red-100">
                        <Ban size={14} /> Blocked
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-500 rounded-md text-xs font-bold hover:bg-green-100">
                        <Unlock size={14} /> Unblock
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}