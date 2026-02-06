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
import { RiChargingPileLine, RiMoneyRupeeCircleFill } from "react-icons/ri";
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

import { Clock, Zap, FileText, DollarSign } from 'lucide-react';
import Image from 'next/image';

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
    topIcon: RiChargingPileLine,
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
    btnIcon: MdOutlineKeyboardArrowRight,
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
    btnIcon: MdOutlineKeyboardArrowRight,
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
    btnIcon: MdOutlineKeyboardArrowRight,
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
  { level: "0%", value: 35 },
  { level: "26%", value: 55 },
  { level: "51%", value: 80 },
  { level: "100%", value: 90 },
];

const chargerStatus = [
  { name: "Active", value: 260, color: "#00C637" },
  { name: "Offline", value: 45, color: "#E30004" },
  { name: "Maintenance", value: 65, color: "#FFD700" },
];

const bookingStatus = [
  { name: "Completed", value: 70, color: "#22c55e" },
  { name: "Upcoming", value: 20, color: "#3b82f6" },
  { name: "Cancelled", value: 10, color: "#ef4444" },
];


interface ActivityItem {
  id: number;
  name: string;
  description: string;
  time: string;
  status: 'pending' | 'completed' | 'upcoming';
  amount?: string;
  icon?: React.ReactNode;
  imageUrl: string;
}


const activities: ActivityItem[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    description: "New Booking - AC 22kW Charger",
    time: "6 hours ago",
    status: "upcoming",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 2,
    name: "Singh Charging Station",
    description: "KYC Approved - 3 Chargers Activated",
    time: "8 hours ago",
    status: "completed",
    imageUrl: "/images/user1.jpg",
  },
  {
    id: 3,
    name: "Sharm Charging Station",
    description: "KYC Approved - 3 Chargers Activated",
    time: "9 hours ago",
    status: "completed",
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 4,
    name: "Sharma Power Solutions",
    description: "New host KYC submitted",
    time: "2 hours ago",
    status: "pending",
    imageUrl: "/images/user3.jpg",
  },
  {
    id: 5,
    name: "Priya Sharma",
    description: "Completed Charging Session - DC Fast Charger",
    time: "3 hours ago",
    status: "completed",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 6,
    name: "Patel Energy Network",
    description: "Payout Processed - ₹2,450.00",
    time: "5 hours ago",
    status: "completed",
    amount: "₹2,450.00",
    imageUrl: "/images/user1.jpg",
  },
  {
    id: 7,
    name: "Verma EV Hub",
    description: "New Booking - AC Charger",
    time: "7 hours ago",
    status: "upcoming",
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 8,
    name: "GreenVolt Station",
    description: "KYC Approved - 2 Chargers Activated",
    time: "10 hours ago",
    status: "completed",
    imageUrl: "/images/user3.jpg",
  },
];


const getStatusStyles = (status: ActivityItem['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'completed':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'upcoming':
      return 'bg-blue-100 text-blue-700 border-blue-50';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

const getStatusText = (status: ActivityItem['status']) => {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'completed':
      return 'Completed';
    case 'upcoming':
      return 'Upcoming';
    default:
      return status;
  }
};

const getStatusIcon = (status: ActivityItem['status']) => {
  return status === "pending" || status === "upcoming"
    ? Clock
    : CheckCircle;
};
/* ---------- COMPONENT ---------- */

export default function Dashboard() {
  return (

    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2  flex flex-col">
      {/* HEADER */}
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white ">
        Dashboard
      </h1>
      <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
        Welcome Back! Here's What's Happening With ChargeFlow today.
      </p> 
      </div>
     
      {/* <div className="space-y-2 flex-1 h-[82vh] overflow-y-auto no-scrollbar mb-4 red "> */}

      <div className="space-y-2 flex-1  overflow-y-auto no-scrollbar mb-4">
        {/* ROW 1: Stats/Actions + Booking Status */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">

          {/* COLUMN 1: Stats + Actions (4 columns) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.5rem]">
              {stats.map((s, i) => {
                const TopIcon = s.topIcon;
                const BottomIcon = s.bottomIcon;

                return (
                  <div
                    key={i}
                    className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* TOP ICON */}
                    <div className="flex gap-[1rem] items-center mb-2">
                      <TopIcon className="text-[#38EF0A]" size={30} />
                      <p className="font-inter text-[13px] text-[#364153] font-medium">{s.title}</p>
                    </div>

                    {/* TEXT */}
                    <h2 className="font-inter text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">{s.value}</h2>

                    {/* GROWTH */}
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="font-inter text-[#25BB00] text-[14px] font-regular flex items-center gap-[0.5rem] ">
                        <TrendingUp size={15} className="text-green-500 " />
                        {s.growth}
                      </span>
                      <span className="font-inter font-regular text-[#757575] text-[10px] -mt-1">Vs Last Month</span>
                    </div>

                    {/* BOTTOM ICON (LIGHT GREEN, ROUNDED) */}
                    <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-[#2CDE0026] rounded-full flex items-center justify-center">
                      <BottomIcon className="text-[#38EF0A]" size={40} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions Cards - Added margin-top for spacing between Stats and Actions */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[0.3rem] mt-3 ">
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
                    <p className="font-inter font-medium text-[#333333] mb-3 border-t-[1.5px] border-[#DFDFDF]">
                      {a.sub}
                    </p>

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

          {/* COLUMN 2: Booking Status (1 column) */}
          <div className="lg:col-span-1">
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 py-2 shadow-md border border-gray-100 h-full flex flex-col">
              <h3 className="font-inter text-[20px] font-semibold text-gray-700 mb-1">Booking Status</h3>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-center mb-1">
                  <PieChart width={140} height={140}>
                    <Pie data={bookingStatus}
                      dataKey="value"
                      innerRadius={40}
                      outerRadius={65}
                      startAngle={-90}
                      endAngle={-460}   // 👈 clockwise
                      paddingAngle={4}>
                      {bookingStatus.map((e, i) => (
                        <Cell key={i} fill={e.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                <div className="space-y-1 mt-2">
                  {bookingStatus.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="font-inter text-[15px] text-gray-600 font-regular">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Revenue/Utilization + Charger Status */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-6">

          {/* COLUMN 1: Revenue Trend + Charger Utilization (4 columns) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
              {/* Revenue Trend - 3/5 width */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 h-full">
                <h3 className="font-semibold text-[20px] font-inter  text-gray-700 mb-6">Revenue Trend</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" tickLine={false} />
                    <YAxis tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Charger Utilization - 2/5 width */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 h-full">
                <h3 className="font-semibold text-[20px] font-inter text-gray-700 mb-6">Charger Utilization</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={utilizationData}>
                    <XAxis dataKey="level" />
                    <YAxis />
                    <Tooltip cursor={false} />
                    <Bar dataKey="value" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Charger Status (1 column) */}
          <div className="lg:col-span-1">
            <div className="text-center bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 h-full flex flex-col">
              <h3 className="font-inter text-[20px] font-semibold text-gray-700 mb-1">Charger Status</h3>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-center mb-3">
                  <PieChart width={160} height={160} className="outline-none">
  <Pie
    data={chargerStatus}
    dataKey="value"
    innerRadius={45}
    outerRadius={70}
    startAngle={-90}
    endAngle={-460}
    paddingAngle={4}
    isAnimationActive={false}
  >
    {chargerStatus.map((e, i) => (
      <Cell
        key={i}
        fill={e.color}
        stroke="none"
        tabIndex={-1}
        style={{ outline: "none" }}
      />
    ))}
  </Pie>
  <Tooltip />
</PieChart>

                </div>
                <div className="space-y-1">
                  {chargerStatus.map((s, i) => (
                    <div key={i} className="flex items-center  gap-2  text-xs">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="font-inter text-[15px] text-gray-600 font-medium">{s.name}{" : "}<span className="font-inter font-semibold text-[15px]">{s.value}</span></span>
                      {/* <span className="ml-auto font-bold">{s.value}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-3 py-4 md:py-3 bg-white rounded-[10px]">
          {/* Header - Fixed */}
          <h1 className="text-xl mb-2 md:text-2xl font-semibold text-gray-900">
            Recent Activity
          </h1>


          {/* Scrollable Card Container */}
          {/* <div className="bg-white rounded-[10px] shadow-md overflow-hidden red"> */}
          <div className="max-h-[300px] overflow-y-auto mt-1 no-scrollbar">
            {activities.map((activity) => {
              const Icon = getStatusIcon(activity.status);
              return(<div
                key={activity.id}
                className="relative px-6 py-4 hover:bg-gray-50 transition-colors duration-200 border border-gray-300 rounded-[10px] mb-2"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left: Avatar/Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        {activity.imageUrl ? (
                          <img src={activity.imageUrl} />
                        ) : (
                          <div className="text-gray-600 font-medium text-sm">
                            {activity.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Name, Description, Time (Column) */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {activity.name}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-1">
                      {activity.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                      <span>{activity.time}</span>
                    </div>
                  </div>

                  {/* Right: Status Badge */}
                  <div className="hidden sm:block flex-shrink-0">
                    <span className={`font-inter inline-flex items-center justify-center py-2 w-[125px] gap-[0.4rem] rounded-[10px] text-[15px] font-medium border ${getStatusStyles(activity.status)}`}>
                      <Icon size={14} />
                      {getStatusText(activity.status)}
                    </span>
                  </div>
                  <div className="sm:hidden absolute right-0 bottom-0 flex-shrink-0">
                    <span className={`font-inter inline-flex items-center justify-center py-2 w-[125px] gap-[0.4rem] rounded-[10px] text-[15px] font-medium border ${getStatusStyles(activity.status)}`}>
                      <Icon size={14} />
                      {getStatusText(activity.status)}
                    </span>
                  </div>
                </div>
              </div>
)})}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}