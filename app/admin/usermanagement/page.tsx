"use client";
import { useState } from "react";
import {
  Users, CircleDashed, ChevronDown, CheckCircle, Radio, DollarSign, FileCheck, Wallet, FileText, UserX, Calendar, CreditCard, TrendingUp, Clock, User,
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
  MdOutlineKeyboardArrowRight,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
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
        <span className="text-[12px] font-medium">Pending Approvals</span>
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
        <span className="text-[15px] font-semibold">₹45,200</span>
        <span className="text-[12px]">Success</span>
      </div>
    ),
    btn: "View All",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: Wallet,
  },
  {
    title: "Payment History",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[15px] font-semibold">145</span>
        <span className="text-[12px]">Successful Payments</span>
      </div>
    ),
    btn: "View Reports",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: FileText,
  },
  {
    title: "Blocked Users",
    sub: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[15px] font-semibold">07</span>
        <span className="text-[12px]">Blocked Accounts</span>
      </div>
    ),
    btn: "Manage List",
    btnIcon: MdOutlineKeyboardArrowRight,
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
      return "bg-[#3771C81A] text-[#1877F2] border-[#1877F23D]";
    case "payment":
      return "bg-[#96FF7B30] text-[#29B605] border-[#38EF0A66]";
    case "profile":
      return "bg-[#fff0e5] text-[#b45309] border-[#e8bfa0]";
    case "login":
      return "bg-[#f2f2f2] text-[#757575] border-[#d6d6d7]";
    case "registration":
      return "bg-[#f3ebfe] text-[#8a38f5] border-[#e2cefd]";
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
  { id: 1, name: 'Priya Singh', email: 'priyasingh@gmail.com', contact: '+91 5678903488', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success', imageUrl: "/images/user.jpg", },
  { id: 2, name: 'Rohit Singh', email: 'rohitsingh@gmail.com', contact: '+91 5778433390', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Pending', imageUrl: "/images/user3.jpg", },
  { id: 3, name: 'Sneha Kapoor', email: 'snehakapoor@gmail.com', contact: '+91 1258444907', status: 'Inactive', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Pending', imageUrl: "/images/user1.jpg", },
  { id: 4, name: 'Neha Singh', email: 'nehasingh@gmail.com', contact: '+91 3279333487', status: 'Failed', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Failed', imageUrl: "/images/user2.jpg", },
  { id: 5, name: 'Rahul Sharma', email: 'rahulsharma@gmail.com', contact: '+91 7576329420', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success', imageUrl: "/images/user.jpg", },
  { id: 6, name: 'Krishna Thakur', email: 'krishna@gmail.com', contact: '+91 7576329420', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Pending', imageUrl: "/images/user3.jpg", },
  { id: 7, name: 'Antara Mishra', email: 'antaramishra@gmail.com', contact: '+91 7576329420', status: 'Active', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success', imageUrl: "/images/user1.jpg", },
];

// 2. ICON SWITCH CASE HELPER
const GetStatusIcon = (type: string, status: string) => {
  switch (status.toLowerCase()) {
    case 'success':
    case 'active':
      return <CheckCircle size={16} className="text-[#29b605]" />;
    case 'pending':
      return <Clock size={16} className="text-[#b45309]" />;
    case 'failed':
      return <RxCross2 size={16} className="text-[#fb2c2f]" />;
    case 'blocked':
      return <XCircle size={16} className="text-[#fb2c2f]" />;
    case 'inactive':
      return <CircleDashed size={16} className="text-[#7d7d7d]" />
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
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">User Management</h1>
        <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
          Manage and monitor all platform users
        </p>
      </div>

      <div className="space-y-3 flex-1 h-[82vh] overflow-y-auto no-scrollbar mb-4">
        {/* STATS + ACTIONS + CHARGER STATUS */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch  w-full">
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
                    className="font-inter relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* TOP ICON */}
                    <div className="flex gap-4 items-center mb-2">
                      <TopIcon className="text-[#38EF0A]" size={30} />
                      <p className=" text-[13px] text-[#364153] font-medium">
                        {s.title}
                      </p>
                    </div>

                    {/* VALUE */}
                    <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-2">
                      {s.value}
                    </h2>

                    {/* GROWTH */}
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="font-regular  text-[#25BB00] text-[14px] flex items-center gap-2">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.6rem] mt-3">
              {actionCards.map((a, i) => {
                const TopIcon = a.icon;
                const BtnIcon = a.btnIcon;

                return (
                  <div
                    key={i}
                    className="font-inter bg-white p-2 rounded-xl shadow-md border border-gray-100"
                  >
                    {/* TOP ICON + TITLE */}
                    <div className="flex items-center gap-1 mb-2">
                      <TopIcon size={17} className="text-[#2CDE00]" />
                      <h3 className="text-[11px] font-semibold text-[#364153]">
                        {a.title}
                      </h3>
                    </div>

                    {/* SUB TEXT */}
                    <div className="font-medium text-[#333333] mb-3 border-t-[1.5px] border-[#DFDFDF] pt-1 text-sm">
                      {a.sub}
                    </div>

                    {/* BUTTON */}
                    <button className="flex items-center justify-center gap-1 w-[110px] py-1.5 text-[11px] font-semibold bg-[#38EF0A]  text-white rounded-md">
                      {a.btn}
                      {BtnIcon && <BtnIcon size={14} />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CHARGER STATUS */}
          <div className="w-full lg:w-[220px]  bg-white rounded-xl shadow px-3 py-2 h-full flex flex-col">
            <h3 className="font-inter text-center text-[20px] font-semibold text-[#434343] mb-1">
              Charger Status
            </h3>

            <div className="flex flex-col flex-1 justify-center fix-graph items-center">
              <div className="flex justify-center">
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
                  <Tooltip />
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
        </div>

        {/* RECENT ACTIVITY + REVENUE CONTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,65%)_minmax(0,35%)] gap-3">
          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-inter text-[24px] font-semibold text-[#364153] mb-3">Recent Activity</h3>

            {/* LIST WRAPPER */}
            <div className="max-h-[260px] overflow-y-auto no-scrollbar -mx-4 border-t border-[#DEDEDE]">
              {activities.map((a) => {
                const StatusIcon = getStatusIcon(a.status);

                return (
                  <div
                    key={a.id}
                    className="relative flex items-center  justify-between border-b-2 border-[#DEDEDE] py-4 px-4 last:border-b-0"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-3 pl-2 desktop:pl-0">
                      <img
                        src={a.imageUrl}
                        alt={a.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-roboto font-semibold text-[16px] text-[#364153]">{a.name}</p>
                        <p className="font-roboto font-regular text-[15px] text-[#848484]">{a.title}</p>
                        <p className="font-inter font-regular text-[12px] text-[#707274]">{a.subTitle}</p>
                        <div className="desktop:hidden">
                          {a.amount && <p className="font-roboto text-[#29B605] text-[15px]">
                            {a.amount}
                          </p>}
                          <p className="font-inter text-[12px] text-[#707274]">{a.time}</p>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">
                      <div className="hidden desktop:block text-right">
                        {a.amount && <p className="font-roboto text-[#29B605] text-[15px]">
                          {a.amount}
                        </p>}
                        <p className="font-inter text-[12px] text-[#707274]">{a.time}</p>
                      </div>

                      <span
                        className={`hidden md:flex font-roboto  items-center gap-2 md:w-[133px] justify-center py-2 text-[16px] border rounded-md ${getStatusStyles(
                          a.status
                        )}`}
                      >
                        <StatusIcon size={19} />
                        {getStatusText(a.status)}
                      </span>
                      <span
                        className={`md:hidden absolute bottom-0 right-1 font-roboto  flex items-center gap-2 w-[120px] justify-center py-2 text-[14px] border rounded-md ${getStatusStyles(
                          a.status
                        )}`}
                      >
                        <StatusIcon size={16} />
                        {getStatusText(a.status)}
                      </span>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* USER REVENUE CONTRIBUTION */}
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-inter text-[#434343] text-[20px] font-semibold mb-3">User Revenue Contribution</h3>
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

        {/* search & filter functionality */}
        <div className="bg-white p-2 md:p-4 w-full
         desktop:w-[973px]  rounded-[16px] ">
          <div className="flex gap-2 md:gap-4 mb-6 items-center">
            <div className="relative flex-1  w-full">
              <Search className="absolute md:left-3 left-1 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full md:pl-9 pl-7 pr-4 py-2.5 rounded-[10px] border border-[#B7B7B7] shadow-[0px_2px_6.3px_0px_#00000026] hover:ring-[0.8px] hover:ring-[#38EF0A] focus:outline-none focus:ring-2 focus:ring-green-200"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 md:gap-4  md:px-4 px-1 py-2 md:py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] min-w-[70px] md:min-w-[140px] justify-between"
              >
                <div className="flex items-center md:gap-2 gap-1">
                  <Filter size={18} className="text-gray-500" />
                  <span className="font-medium text-gray-700 font-inter text-[20px]">
                    <span className="inline sm:hidden">
                      {filterStatus === 'All Status' ? 'All' : filterStatus}
                    </span>

                    <span className="hidden sm:inline">
                      {filterStatus}
                    </span>
                  </span>

                </div>
                < ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                {/* <span >▼</span> */}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]
">
                  {['All Status', 'Active', 'Inactive', 'Failed'].map((status) => (
                    <button
                      key={status}
                      className={`font-inter text-[20px] w-full rounded-[10px] text-left px-4 py-3 hover:bg-[#e1ffd9] flex items-center justify-between ${filterStatus === status ? 'bg-[#e1ffd9] font-semibold' : 'text-black'}`}
                      onClick={() => { setFilterStatus(status); setIsDropdownOpen(false); }}
                    >
                      {status}
                      {filterStatus === status && <IoCheckmarkSharp size={20} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* TABLE CONTAINER */}
          {filteredUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[300px] text-center">

              {/* SVG */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>


              {/* Text */}
              <h3 className="text-sm font-semibold text-gray-600">
                No items found
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Try changing search or filter
              </p>

            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md border border-[#DDDDE1] shadow-[0px_2px_6.3px_0px_#00000026] overflow-hidden">
              {/* Horizontal Scroll wrapper */}
              <div className="overflow-x-auto no-scrollbar max-h-[420px] overflow-y-auto">
                <table className="min-w-max w-full text-left border-collapse">
                  <thead className="sticky top-0 z-10 bg-white">
                    <tr className="font-inter border-b-[1.6px] border-[#E9E9E9] bg-white">
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px]">User Name</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Contact</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Status</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Date</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Total Bookings</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Total Amount</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Payment Status</th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Actions</th>
                    </tr>
                  </thead>


                  <tbody className="font-arial divide-y-[1.3px] divide-gray-100 overflow-y-auto">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={user.imageUrl} className="w-12 h-12 rounded-full" />
                            <div>
                              <div className="text-gray-800 text-[14px]">{user.name}</div>
                              <div className="text-[12px] text-gray-400">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[14px] text-gray-600 text-center font-medium">{user.contact}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-roboto inline-flex items-center gap-1 w-[90px] justify-center text-[14px] py-1 rounded-md ${user.status === "Active"
                            ? "bg-[#e1ffd9] text-[#29b605]"
                            : user.status === "Inactive"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-[#ffdbd6] text-[#fb2c2f]"
                            }`}>
                            {GetStatusIcon('status', user.status)}
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[14px] text-gray-500 text-center">{user.date}</td>
                        <td className="px-6 py-4 text-[14px] text-gray-500 text-center">{user.bookings}</td>
                        <td className="px-6 py-4 text-[14px] text-gray-800 text-center">{user.amount}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-roboto inline-flex items-center gap-1 w-[90px] justify-center text-[14px] py-1 rounded-md  ${user.paymentStatus === 'Success' ? 'bg-[#e1ffd9] text-[#29b605] ' :
                            user.paymentStatus === 'Pending' ? 'bg-[#f9e8db] text-[#b45309]' :
                              'bg-[#ffdbd6] text-[#fb2c2f]'
                            }`}>
                            {GetStatusIcon('payment', user.paymentStatus)}
                            {user.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-roboto flex items-center gap-2 justify-center">
                            <button className="flex items-center gap-1 w-[90px] justify-center text-[14px] py-1.5 bg-[#ffdbd6] text-[#fb2c2f] rounded-md ">
                              <Ban size={14} /> Blocked
                            </button>
                            <button className="flex items-center gap-1 w-[90px] justify-center text-[14px] py-1.5 bg-[#e1ffd9] text-[#29b605] rounded-md">
                              <Unlock size={14} /> Unblock
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  );
}