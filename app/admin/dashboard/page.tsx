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
import data from "../admin-data.json";
/* ---------- DATA ---------- */


const statsConfig = [
  {
    key: "totalUsers",
    title: "Total Users",
    topIcon: MdOutlinePeopleAlt,
    bottomIcon: MdOutlinePeopleAlt,
  },
  {
    key: "totalHosts",
    title: "Total Hosts",
    topIcon: Home,
    bottomIcon: Home,
  },
  {
    key: "activeChargers",
    title: "Active Chargers",
    topIcon: RiChargingPileLine,
    bottomIcon: Car,
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    topIcon: RiMoneyRupeeCircleFill,
    bottomIcon: SiSimpleanalytics,
    isCurrency: true,
  },
];

const actionConfig = [
  {
    key: "kyc",
    title: "KYC Verifications",
    btn: "Review Now",
    btnIcon: AiOutlineArrowRight,
    icon: CheckCircle,
  },
  {
    key: "addCharger",
    title: "Add New Chargers",
    sub: "Setup and Configure",
    btn: "Configure",
    btnIcon: Settings,
    icon: FaChargingStation,
  },
  {
    key: "booking",
    title: "Booking Overview",
    btn: "View All",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: TbCalendarTime,
  },
  {
    key: "payout",
    title: "Payouts Transactions",
    btn: "Manage Payout",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: CreditCard,
  },
  {
    key: "support",
    title: "Support Tickets",
    btn: "View Tickets",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: MessageCircleQuestionMark,
  },
];

const subtitleRenderer = {
  kyc: (data) => (
    <div className="flex items-center gap-[0.3rem]">
      <span className="text-[15px] font-semibold text-small">
        {data.pending}
      </span>
      <span className="font-medium text-[10px] text-small">
        Pending Approvals
      </span>
    </div>
  ),

  booking: (data) => (
    <div className="flex items-center gap-[0.3rem] reduced-gap">
      <span className="text-[8px] text-small">Upcoming:</span>
      <span className="font-semibold text-[#EA4335] num-reduce">
        {data.upcoming}
      </span>
      <span className="text-[8px] text-small">| Cancelled:</span>
      <span className="font-semibold text-[#EA4335] num-reduce">
        {data.cancelled}
      </span>
    </div>
  ),

  payout: (data) => (
    <>
      <span className="font-semibold text-[14px]">
        ₹{data.pendingAmount.toLocaleString()}
      </span>
      <span className="text-[10px]">
        {" "}Pending Payout
      </span>
    </>
  ),

  support: (data) => (
    <div className="flex items-center gap-[0.3rem]">
      <span className="text-[9px]">Open:</span>
      <span className="font-semibold text-[#EA4335]">
        {data.open}
      </span>
      <span className="text-[9px]">| Resolved:</span>
      <span className="font-semibold text-[#EA4335]">
        {data.resolved}
      </span>
    </div>
  ),
};

// const revenueData = [
//   { month: "Jan", revenue: 20000 },
//   { month: "Feb", revenue: 32000 },
//   { month: "Mar", revenue: 28000 },
//   { month: "Apr", revenue: 45000 },
//   { month: "May", revenue: 40000 },
//   { month: "Jun", revenue: 60000 },
// ];

// const utilizationData = [
//   { level: "0%", value: 35 },
//   { level: "26%", value: 55 },
//   { level: "51%", value: 80 },
//   { level: "100%", value: 90 },
// ];

// const chargerStatus = [
//   { name: "Active", value: 260, color: "#00C637" },
//   { name: "Offline", value: 45, color: "#E30004" },
//   { name: "Maintenance", value: 65, color: "#FFD700" },
// ];

// const bookingStatus = [
//   { name: "Completed", value: 70, color: "#22c55e" },
//   { name: "Upcoming", value: 20, color: "#3b82f6" },
//   { name: "Cancelled", value: 10, color: "#ef4444" },
// ];


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
  const { revenueTrend, chargerUtilization, bookingStatus, chargerStatus } = data.dashboard;
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
              {statsConfig.map((card) => {
                const statData = data.dashboard.stats[card.key];
                const TopIcon = card.topIcon;
                const BottomIcon = card.bottomIcon;

                const formattedValue = card.isCurrency
                  ? `₹${statData.value.toLocaleString()}`
                  : statData.value.toLocaleString();

                const isPositive = statData.growth >= 0;

                return (
                  <div
                    key={card.key}
                    className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* TOP ICON */}
                    <div className="flex gap-[1rem] items-center mb-2">
                      <TopIcon className="text-[#38EF0A]" size={30} />
                      <p className="font-inter text-[13px] text-[#364153] font-medium">
                        {card.title}
                      </p>
                    </div>

                    {/* VALUE */}
                    <h2 className="font-inter text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">
                      {formattedValue}
                    </h2>

                    {/* GROWTH */}
                    <div className="flex flex-col gap-1 mt-1">
                      <span
                        className={`font-inter text-[14px] flex items-center gap-[0.5rem] ${isPositive ? "text-[#25BB00]" : "text-red-500"
                          }`}
                      >
                        <TrendingUp
                          size={15}
                          className={isPositive ? "text-green-500" : "text-red-500"}
                        />
                        {isPositive ? "+" : ""}
                        {statData.growth}%
                      </span>

                      <span className="font-inter font-regular text-[#757575] text-[10px] -mt-1">
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

            {/* Actions Cards - Added margin-top for spacing between Stats and Actions */}
            <div className="flex flex-wrap items-center justify-center gap-[0.3rem] mt-3 actions-wrapper">
              {actionConfig.map((card, i) => {
                const TopIcon = card.icon;
                const BtnIcon = card.btnIcon;

                // get JSON data
                const actionData = data.dashboard.actions[card.key];

                // get renderer function
                const renderSubtitle = subtitleRenderer[card.key];

                return (
                  <div
                    key={card.key}
                    className={`flex flex-col lg:h-[110px] bg-white p-2 rounded-xl shadow-md border border-gray-100 text-[11px]
w-[calc(33.333%-0.2rem)] lg:w-[calc(20%-0.24rem)]
${(i === actionConfig.length - 1 || i === actionConfig.length - 2)
                        ? "half-width"
                        : ""}
${i <= 2 ? "text-small" : ""}
`}
                  >
                    {/* TOP ICON + TITLE */}
                    <div className="flex items-center gap-1 mb-2">
                      <TopIcon size={17} className="text-[#2CDE00]" />
                      <h3 className="font-inter font-semibold text-[#364153]">
                        {card.title}
                      </h3>
                    </div>

                    {/* SUBTITLE (JSON Driven) */}
                    <p className="font-inter font-medium text-[#333333] mb-3 border-t-[1.5px] pt-1 border-[#DFDFDF] w-full">
                      {renderSubtitle ? renderSubtitle(actionData) : card.sub || ""}
                    </p>

                    {/* BUTTON */}
                    <div className="flex mt-auto">
                      <button className="flex items-center justify-center gap-1 w-[110px] py-1.5 font-semibold bg-[#38EF0A] text-white rounded-md">
                        {card.btn}
                        {BtnIcon && <BtnIcon size={14} />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>

          {/* COLUMN 2: Booking Status (1 column) */}
          <div className="lg:col-span-1">
            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 py-2 shadow-md border border-gray-100 h-full flex flex-col">
              <h3 className="font-inter text-[20px] font-semibold text-gray-700 mb-1">Booking Status</h3>
              <div className="flex-1 flex fix-graph flex-col justify-center items-center">
                <div className="flex justify-center mb-1 ">
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
                  <LineChart data={revenueTrend}>
                    <XAxis dataKey="month" tickLine={false} />
                    <YAxis tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Charger Utilization - 2/5 width */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 h-full">
                <h3 className="font-semibold text-[20px] font-inter text-gray-700 mb-1">Charger Utilization</h3>
                <ResponsiveContainer width="100%" height={220} >
                  <BarChart margin={{ top: 0, right: 0, left: -25, bottom: 0 }} data={chargerUtilization}>
                    <XAxis dataKey="capacity" />
                    <YAxis />
                    <Tooltip cursor={false} />

                    <Bar dataKey="ac" fill="#7CFF5B" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="dc" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#7CFF5B]" />
                    <span>AC Charger</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#22c55e]" />
                    <span>DC Charger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Charger Status (1 column) */}
          <div className="lg:col-span-1">
            <div className="text-center bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 h-full flex flex-col">
              <h3 className="font-inter text-[20px] font-semibold text-gray-700 mb-1">Charger Status</h3>
              <div className="flex-1 flex flex-col fix-graph justify-center items-center">
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
                    <div key={i} className="flex items-center gap-2  text-xs">
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
              return (<div
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
                    <span className={`font-inter inline-flex items-center justify-center desktop:py-2 py-1 w-[120px] desktop:w-[125px] gap-[0.4rem] rounded-[10px] desktop:text-[15px] font-medium border ${getStatusStyles(activity.status)}`}>
                      <Icon size={14} />
                      {getStatusText(activity.status)}
                    </span>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}