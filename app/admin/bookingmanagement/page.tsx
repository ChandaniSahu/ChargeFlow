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
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  X,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell ,Area, CartesianGrid } from "recharts";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCalendarMonth  } from "react-icons/bs";
import { Bolt } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import data from '../admin-data.json'


// import Image from "next/image";

/* ================= DATA ================= */
const StatsConfig = [
  {
    key: "totalBooking",
    title: "Total Booking",
    sub: "All-time count",
    topIcon: CalendarDays,
    bottomIcon: CalendarDays
  },
  {
    key: "activeSessions",
    title: "Active Sessions",
    sub: "Currently Charging",
    topIcon: BiSolidZap,
    bottomIcon: BiSolidZap
  },
  {
    key: "successRate",
    title: "Success Rate",
    sub: "Completed vs Cancelled",
    topIcon: CheckCircle,
    bottomIcon: CheckCircle,
    isPercentage: true
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    sub: "Lifetime Earnings",
    topIcon: RiMoneyRupeeCircleFill,
    bottomIcon: SiSimpleanalytics,
    isCurrency: true
  }
];

const ActionConfig = [
  {
    key: "manageBooking",
    title: "Manage All Booking",
    sub: "Bookings",
    icon: CalendarDays,
    btn: "View All"
  },
  {
    key: "upcomingBooking",
    title: "Upcoming Booking",
    sub: "Upcoming",
    icon: TbCalendarTime,
    btn: "View Schedule"
  },
  {
    key: "completedSessions",
    title: "Completed Sessions",
    sub: "Completed",
    icon: CheckCircle,
    btn: "View History"
  },
  {
    key: "cancelledBooking",
    title: "Cancelled Booking",
    sub: "Cancelled",
    icon: X,
    btn: "Manage Disputes"
  }
];

export const chargerStatus = [
  { name: "Active", value: 220, color: "#22c55e" },
  { name: "Offline", value: 45, color: "#ef4444" },
  { name: "Maintenance", value: 65, color: "#facc15" },
];

export interface ActivityItem {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  time: string;
  amount?: string;
}

export const activities = [
  {
    id: 1,
    heading: "New Booking",
    name: "Rajesh Kumar",
    chargerName: "Tesla Supercharger #42",
    time: "5 minutes ago",
    amount: "₹560.00",
  },
  {
    id: 2,
    heading: "Booking Completed",
    name: "Priya Sharma",
    chargerName: "Downtown Hub - Station A",
    time: "15 minutes ago",
    amount: "₹430.00",
  },
  {
    id: 3,
    heading: "Booking Cancelled",
    name: "Neha Gupta",
    chargerName: "QuickCharge Express - Unit 5",
    time: "1 hour ago",
    amount: "",
  },
  {
    id: 4,
    heading: "New Booking",
    name: "Vikram Singh",
    chargerName: "Tesla Supercharger #42",
    time: "2 hours ago",
    amount: "₹350.00",
  },
  {
    id: 5,
    heading: "Booking Completed",
    name: "Amit Patel",
    chargerName: "Mike's EV - Charger 2",
    time: "3 hour ago",
    amount: "₹340.00",
  },
  {
    id: 6,
    heading: "Booking Completed",
    name: "Rohit Singh",
    chargerName: "AC Charger",
    time: "4 hour ago",
    amount: "₹440.00",
  },
  {
    id: 7,
    heading: "Booking Completed",
    name: "Priya Singh",
    chargerName: "Premium AC Charger",
    time: "7 hour ago",
    amount: "₹540.00",
  },
];

const getIcon = (heading: string) => {
  switch (heading) {
    case "New Booking":
      return CalendarDays;
    case "Booking Completed":
      return CheckCircle;
    case "Booking Cancelled":
      return X;
    default:
      return CalendarDays;
  }
};

const getIconBg = (heading: string) => {
  switch (heading) {
    case "New Booking":
      return "bg-green-100 text-green-500";
    case "Booking Completed":
      return "bg-green-100 text-green-500";
    case "Booking Cancelled":
      return "bg-red-100 text-red-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
};

const bookingData = [
  {
    id: 1,
    userName: "Priya Singh",
    email: "priyasingh@gmail.com",
    bookingId: "#BK-2025-0156",
    charger: "Premium AC Charger",
    date: "31/01/2026",
    time: "11:00 AM - 12:15 PM",
    duration: "1h 15m",
    amount: 580,
    paymentStatus: "Pending",
    status: "Upcoming",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 2,
    userName: "Rohit Singh",
    email: "rohitsingh@gmail.com",
    bookingId: "#BK-2025-0155",
    charger: "AC Charger",
    date: "31/01/2026",
    time: "09:00 AM - 10:30 PM",
    duration: "1h 30m",
    amount: 580,
    paymentStatus: "Success",
    status: "Completed",
    imageUrl: "/images/user3.jpg",
  },
  {
    id: 3,
    userName: "Amit Sharma",
    email: "amitsharma@gmail.com",
    bookingId: "#BK-2025-0154",
    charger: "Premium AC Charger",
    date: "30/01/2026",
    time: "09:00 AM - 10:30 PM",
    duration: "1h 30m",
    amount: 580,
    paymentStatus: "Refunded",
    status: "Cancelled",
    imageUrl: "/images/user1.jpg",
  },

  // 🔽 Added Items

  {
    id: 4,
    userName: "Sneha Kapoor",
    email: "snehakapoor@gmail.com",
    bookingId: "#BK-2025-0153",
    charger: "Premium AC Charger",
    date: "14/02/2026",
    time: "09:00 AM - 10:15 PM",
    duration: "1h 15m",
    amount: 580,
    paymentStatus: "Pending",
    status: "Upcoming",
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 5,
    userName: "Rahul Mehta",
    email: "rahulmehta@gmail.com",
    bookingId: "#BK-2025-0152",
    charger: "Tesla Supercharger",
    date: "28/02/2026",
    time: "10:00 AM - 11:30 AM",
    duration: "1h 30m",
    amount: 620,
    paymentStatus: "Success",
    status: "Completed",
    imageUrl: "/images/user3.jpg",
  },
  {
    id: 6,
    userName: "Neha Gupta",
    email: "nehagupta@gmail.com",
    bookingId: "#BK-2025-0151",
    charger: "AC Charger",
    date: "15/02/2026",
    time: "02:00 PM - 03:00 PM",
    duration: "1h",
    amount: 400,
    paymentStatus: "Refunded",
    status: "Cancelled",
    imageUrl: "/images/user1.jpg",
  },
  {
    id: 7,
    userName: "Arjun Verma",
    email: "arjunverma@gmail.com",
    bookingId: "#BK-2025-0150",
    charger: "Premium AC Charger",
    date: "03/02/2026",
    time: "08:30 AM - 09:45 AM",
    duration: "1h 15m",
    amount: 560,
    paymentStatus: "Success",
    status: "Completed",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 8,
    userName: "Kavya Nair",
    email: "kavyanair@gmail.com",
    bookingId: "#BK-2025-0149",
    charger: "DC Fast Charger",
    date: "13/02/2026",
    time: "06:00 PM - 07:00 PM",
    duration: "1h",
    amount: 650,
    paymentStatus: "Pending",
    status: "Upcoming",
    imageUrl: "/images/user2.jpg",
  },
];


const getBadge = (value: string) => {
  const v = value.toLowerCase();

  if (v === "completed" || v === "success") {
    return {
      className: "bg-[#e1ffd9] text-[#29b605]",
      icon: <CheckCircle size={16} className="text-[#29b605]" />,
    };
  }

  if (v === "pending" || v === "upcoming") {
    return {
      className: "bg-[#f9e8db] text-[#b45309]",
      icon: <Clock size={16} className="text-[#b45309]" />,
    };
  }

  if (v === "cancelled") {
    return {
      className: "bg-[#ffdbd6] text-[#fb2c2f]",
      icon: <RxCross2 size={16} className="text-[#fb2c2f]" />,
    };
  }

  if (v === "refunded") {
    return {
      className: "bg-[#dbeafe] text-[#3b82f6]",
      icon: <RotateCcw size={16} className="text-[#3b82f6]" />,
    };
  }

  return { className: "", icon: null };
};



const bookingTrendData = [
  { date: "25 Jan", bookings: "17", revenue: 50000 },
  { date: "26 Jan", bookings: "20", revenue: 65000 },
  { date: "27 Jan", bookings: "20", revenue: 63000 },
  { date: "28 Jan", bookings: "25", revenue: 78000 },
  { date: "29 Jan", bookings: "28", revenue: 86000 },
  { date: "30 Jan", bookings: "26", revenue: 82000 },
  { date: "31 Jan", bookings: "32", revenue: 100000 },
];


/* ================= COMPONENT ================= */
export default function UserManagementDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const [typeFilter, setTypeFilter] = useState("All Dates");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [openIndex, setOpenIndex] = useState<number | null>(null);



 const filteredUsers = bookingData.filter((item) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    item.bookingId.toLowerCase().includes(search) ||
    item.userName.toLowerCase().includes(search) ||
    item.charger.toLowerCase().includes(search);

  const matchesStatus =
    statusFilter === "All Status" || item.status === statusFilter;

/* ✅ DATE FILTER LOGIC */
let matchesDate = true;

if (typeFilter !== "All Dates") {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // reset time
  console.log('today',today)
  console.log('item.date',item.date)
  const [day, month, year] = item.date.split("/");
  const itemDate = new Date(Number(year), Number(month) - 1, Number(day));
  itemDate.setHours(0, 0, 0, 0);

  if (typeFilter === "This Week") {
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay());
    firstDayOfWeek.setHours(0, 0, 0, 0);

    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    lastDayOfWeek.setHours(23, 59, 59, 999);

    matchesDate =
      itemDate.getTime() >= firstDayOfWeek.getTime() &&
      itemDate.getTime() <= lastDayOfWeek.getTime();
  }

  if (typeFilter === "This Month") {
    matchesDate =
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear();
  }
}

  return matchesSearch && matchesStatus && matchesDate;
});




  return (
    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2 flex flex-col desktop:w-[1010px] ">
      {/* HEADER */}
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">Booking Management</h1>
        <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
          View and manage all charging session bookings
        </p>
      </div>

      <div className="space-y-3 flex-1 h-[82vh] overflow-y-auto overflow-x-hidden no-scrollbar mb-4">
        {/* STATS + ACTIONS + CHARGER STATUS */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch  w-full">
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-3 h-full">
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.6rem]">
{StatsConfig.map((card, i) => {
  const statData = data.booking.stats[card.key];
  console.log('statData', statData)
  const TopIcon = card.topIcon;
  const BottomIcon = card.bottomIcon;

  let formattedValue = statData.value.toLocaleString();

  if (card.isCurrency) {
    formattedValue = `₹${statData.value.toLocaleString()}`;
  }

  if (card.isPercentage) {
    formattedValue = `${statData.value}%`;
  }

  return (
    <div
      key={i}
      className="font-inter relative bg-white rounded-xl p-4 pb-13 shadow-md border border-gray-100 overflow-hidden"
    >
      {/* TOP ICON */}
      <div className="flex gap-4 items-center mb-1">
        <TopIcon className="text-[#38EF0A]" size={30} />
        <p className="text-[13px] text-[#364153] font-medium">
          {card.title}
        </p>
      </div>

      {/* VALUE */}
      <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">
        {formattedValue}
      </h2>

      {/* SUB */}
      <div className="font-inter font-medium text-[#7C7C7C] text-[10px]">
        {card.sub}
      </div>

      {/* BOTTOM ICON */}
      <div className="absolute -bottom-12 -right-4 w-26 h-26 bg-[#2CDE0026] rounded-full flex pt-3 justify-center">
        <BottomIcon className="text-[#38EF0A] w-10 h-10" />
      </div>
    </div>
  );
})}
            </div>

            {/* ACTION CARDS */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.6rem] mt-3">
{ActionConfig.map((card, i) => {
  const Icon = card.icon;
  const actionData = data.booking.actions[card.key];

  return (
    <div
      key={i}
      className="font-inter bg-white px-3 py-2 rounded-xl shadow-md border border-gray-100"
    >
      {/* TOP ICON + TITLE */}
      <div className="flex items-center gap-2 mb-2">
        <Icon size={18} className="text-[#2CDE00]" />
        <h3 className="text-[13px] font-semibold text-[#364153]">
          {card.title}
        </h3>
      </div>

      {/* VALUE + SUB */}
      <div className="flex items-center gap-1 border-t-[1.5px] border-[#DFDFDF] pt-1 mb-1">
        <div className="text-[20px] font-bold text-[#333333]">
          {actionData.value.toLocaleString()}
        </div>
        <div className="text-[12px] text-[#666666]">
          {card.sub}
        </div>
      </div>

      {/* BUTTON */}
      <button className="flex items-center justify-center gap-1 w-[130px] py-1.5 text-[12px] font-semibold bg-[#38EF0A] text-white rounded-md">
        {card.btn}
        <ChevronRight size={14} />
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
  <h3 className="text-[22px] font-semibold text-[#364153] mb-3">
    Recent Activity
  </h3>

  <div className="max-h-[260px] overflow-y-auto no-scrollbar -mx-4 border-t border-[#DEDEDE]">
    {activities.map((a) => {
      const Icon = getIcon(a.heading);

      return (
        <div
          key={a.id}
          className="flex items-center justify-between border-b-2 border-[#DEDEDE] py-4 px-4"
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div
              className={`w-[45px] h-[45px] flex items-center justify-center rounded-full ${getIconBg(
                a.heading
              )}`}
            >
              <Icon size={19} />
            </div>

            <div>
              <p className="font-medium font-roboto text-[16px] text-[#364153]">
                {a.heading}
              </p>
              <p className="text-[14px] text-[#6B7280]">{a.name}</p>
              <p className="text-[13px] text-[#9CA3AF]">
                {a.chargerName}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            {a.amount && (
              <p className="text-[#29B605] font-semibold text-[15px]">
                {a.amount}
              </p>
            )}
            <p className="text-[13px] text-[#9CA3AF]">
              {a.time}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>



          {/* USER REVENUE CONTRIBUTION */}
     <div className="bg-white rounded-2xl p-5 shadow-md">
  <h3 className="font-inter text-[#434343] text-[20px] font-semibold mb-4">
    Daily Booking Trend
  </h3>

  <ResponsiveContainer width="110%" height={260} className="flex items-center ">
    <LineChart data={bookingTrendData}>
      
      {/* Gradient */}
      <defs>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
        </linearGradient>
      </defs>

      {/* Grid */}
      <CartesianGrid strokeDasharray="3 3" vertical={false} />

      {/* X Axis */}
      <XAxis
        dataKey="date"
        tick={{ fontSize: 12 }}
        axisLine={{ stroke: "#d1d5db" }}
        tickLine={{ stroke: "#d1d5db" }}
      />

      {/* Left Y Axis */}
      <YAxis
        yAxisId="left"
         domain={['dataMin - 14', 'dataMax + 14']}
        tick={{ fontSize: 12 }}
        axisLine={{ stroke: "#d1d5db" }}
        tickLine={{ stroke: "#d1d5db" }}
      />

      {/* Right Y Axis */}
      <YAxis
        yAxisId="right"
        orientation="right"
        domain={['dataMin - 10000', 'dataMax + 10000']}
        tickFormatter={(v) => `${v / 1000}k`}
        tick={{ fontSize: 12 }}
        axisLine={{ stroke: "#d1d5db" }}
        tickLine={{ stroke: "#d1d5db" }}
      />

      <Tooltip
      formatter={(value: number, name: string) => {
    if (name === "revenue") {
      return `₹${(value / 1000).toFixed(1)}K`;
    }
    return value; // bookings normal
    }} />

      {/* Area (Revenue Background) */}
      <Area
        yAxisId="right"
        type="monotone"
        dataKey="revenue"
        stroke="none"
        fill="url(#greenGradient)"
         tooltipType="none"
      />

      {/* Blue Line (Bookings) */}
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="bookings"
        stroke="#3b82f6"
        strokeWidth={3}
        dot={{ r: 5, fill: "#3b82f6", stroke: "#3b82f6" }}
        activeDot={{ r: 7 }}
      />

      {/* Green Line (Revenue) */}
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="revenue"
        stroke="#22c55e"
        strokeWidth={3}
        dot={{ r: 5, fill: "#22c55e", stroke: "#22c55e" }}
        activeDot={{ r: 7 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

        </div>

        {/* search & filter functionality */}
        <div className="bg-white p-2 md:p-4 w-full
desktop:w-[973px] rounded-[16px]">
           <div className="pb-4 sticky top-0 z-10 bg-white md:flex-row flex flex-col gap-3">
            <div className="relative flex-1 flex items-center  w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full px-4 pl-9  py-3 border border-[#B7B7B7] hover:ring-[0.8px] hover:ring-[#38EF0A] focus:outline-none focus:ring-[0.6px]  focus:ring-[#38EF0A] shadow-[0px_2px_6.3px_0px_#00000026] rounded-[10px]"
              placeholder="Search by Booking Id , user or charger..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <button
                onClick={() => {setIsTypeDropdownOpen(!isTypeDropdownOpen);
                  setIsStatusDropdownOpen(false)
                }}
                className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] desktop:w-[200px] w-full  justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700 font-inter text-[20px]">
                    {typeFilter}
                  </span>
                </div>

                <ChevronDown
                  className={`transition-transform ${isTypeDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isTypeDropdownOpen && (
                <div className="absolute right-0 mt-2 md:w-48 w-43  p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-[999] overflow-hidden shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">

                  {["All Dates", "This Week", "This Month"].map((type) => (
                    <button
                      key={type}
                      className={`font-inter md:text-[20px] text-[16px]  w-full rounded-[10px] text-left px-4 py-3 hover:bg-[#e1ffd9] flex items-center justify-between ${typeFilter === type
                        ? "bg-[#e1ffd9] font-medium"
                        : "text-black"
                        }`}
                      onClick={() => {
                        setTypeFilter(type);
                        setIsTypeDropdownOpen(false);
                      }}
                    >
                      {type}
                      {typeFilter === type && <IoCheckmarkSharp size={20} />}
                    </button>
                  ))}

                </div>
              )}
            </div>



            <div className="relative">
              <button
                onClick={() => {setIsStatusDropdownOpen(!isStatusDropdownOpen);
                  setIsTypeDropdownOpen(false);
                }}
                className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] desktop:w-[200px] w-full justify-between"
              >
                <span className="font-medium text-gray-700 font-inter text-[20px]">
                  {statusFilter}
                </span>

                <ChevronDown
                  className={`transition-transform ${isStatusDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isStatusDropdownOpen && (
                <div className="absolute right-0  mt-2 md:w-48 w-45 p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-20">
                  {["All Status", "Upcoming", "Completed", "Cancelled"].map((status) => (
                    <button
                      key={status}
                      className={`font-inter md:text-[18px] text-[16px] w-full rounded-[10px] text-left px-4 py-3 hover:bg-[#e1ffd9] flex items-center justify-between ${statusFilter === status
                        ? "bg-[#e1ffd9] font-medium"
                        : "text-black"
                        }`}
                      onClick={() => {
                        setStatusFilter(status);
                        setIsStatusDropdownOpen(false);
                      }}
                    >
                      {status}
                      {statusFilter === status && <IoCheckmarkSharp size={20} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            <div className="overflow-x-auto no-scrollbar max-h-[420px] overflow-auto">
              <table className="min-w-max w-full text-left border-collapse">
                <thead className="sticky top-0  bg-white">
                  <tr className="font-inter border-b-[1.6px] border-[#E9E9E9] bg-white">
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px]">User Name</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Booking ID</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Charger</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Date</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Time</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Duration</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Amount</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Payment Status</th>
                    <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">Status</th>
                  </tr>
                </thead>

               <tbody className="font-arial  divide-y-[1.3px] divide-gray-100">
  {filteredUsers.map((item) => {
    const payment = getBadge(item.paymentStatus);
    const status = getBadge(item.status);

    return (
      <tr key={item.id} className="hover:bg-gray-50 text-gray-800 transition-colors">

        {/* USER NAME */}
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={item.imageUrl} className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-[#364153] text-[14px] font-medium">
                {item.userName}
              </div>
              <div className="text-[12px] text-gray-400">
                {item.email}
              </div>
            </div>
          </div>
        </td>

        {/* BOOKING ID */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.bookingId}
        </td>

        {/* CHARGER */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.charger}
        </td>

        {/* DATE */}
        <td className="px-6 py-4 text-center text-[14px] text-gray-500">
          {item.date}
        </td>

        {/* TIME */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.time}
        </td>

        {/* DURATION */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.duration}
        </td>

        {/* AMOUNT */}
        <td className="px-6 py-4 text-center font-medium text-[14px]">
          ₹{item.amount}
        </td>

        {/* PAYMENT STATUS */}
        <td className="px-6 py-4 text-center">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-[14px] ${payment.className}`}>
            {payment.icon}
            {item.paymentStatus}
          </span>
        </td>

        {/* STATUS */}
        <td className="px-6 py-4 text-center">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-[14px] ${status.className}`}>
            {status.icon}
            {item.status}
          </span>
        </td>
      </tr>
    );
  })}
</tbody>


              </table>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}