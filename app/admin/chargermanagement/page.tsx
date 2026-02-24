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
  PlusSquare,
  Wrench,
  AlertTriangle,
  Zap,
  Power,
  PowerCircle,
  ZapOff,
} from "lucide-react";
import { FaBoltLightning } from "react-icons/fa6";
import { BiSolidPlug } from "react-icons/bi";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import {
  MdBlock,
  MdEvStation,
  MdOutlineBuildCircle,
  MdOutlineKeyboardArrowRight,
  MdOutlinePeopleAlt,
  MdOutlineWifiTethering,
  MdWarningAmber,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TiLocation } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import data from "../admin-data.json";
// import Image from "next/image";

/* ================= DATA ================= */
const StatsConfig = [
  {
    key: "totalChargers",
    title: "Total Chargers",
    icon: FaChargingStation,
    bottomIcon: FaChargingStation,
    theme: "green",
    type: "totalWithBreakdown"
  },
  {
    key: "inactiveChargers",
    title: "Inactive Chargers",
    icon: RiAlertFill,
    bottomIcon: RiAlertFill,
    theme: "orange",
    type: "growth"
  },
  {
    key: "activeChargers",
    title: "Active Chargers",
    icon: Radio,
    bottomIcon: Radio,
    theme: "green",
    type: "growth"
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    icon: RiMoneyRupeeCircleFill,
    bottomIcon: SiSimpleanalytics,
    theme: "green",
    type: "currencyGrowth"
  }
];

const ActionConfig = [
  {
    key: "manageChargers",
    title: "Manage Chargers",
    icon: IoMdSettings,
    btn: "Manage",
    type: "manage",
    sub: "AC / DC / Fast chargers"
  },
  {
    key: "chargerStatus",
    title: "Charger Status",
    icon: FaChargingStation,
    btn: "View Status",
    type: "status"
  },
  {
    key: "maintenance",
    title: "Maintenance Mode",
    icon: MdOutlineBuildCircle,
    btn: "Manage",
    type: "maintenance",
    sub: "requires attention"
  },
  {
    key: "blocked",
    title: "Blocked Chargers",
    icon: MdBlock,
    btn: "Manage List",
    type: "blocked",
    sub: "offline / blocked"
  }
];

export const chargerStatus = [
  { name: "Active", value: 220, color: "#22c55e" },
  { name: "Offline", value: 45, color: "#ef4444" },
  { name: "Maintenance", value: 65, color: "#facc15" },
];

const chartData = [
  {
    city: "Delhi",
    chargers: 3,
    utilization: 75,
  },
  {
    city: "Mumbai",
    chargers: 0.8,
    utilization: 72,
  },
  {
    city: "Bengaluru",
    chargers: 3,
    utilization: 75,
  },
  {
    city: "Chennai",
    chargers: 2.2,
    utilization: 85,
  },
  {
    city: "Hyderabad",
    chargers: 0.9,
    utilization: 45,
  },
];





export interface ActivityItem {
  id: number;
  name: string;        // Charger name
  location: string;    // City, State
  title: string;       // Main message
  subTitle: string;    // Description
  time: string;
  status:
  | "alert"
  | "session"
  | "maintenance"
  | "offline"
  | "booking"
  | "online";
  amount?: string;     // 92%, 45 kWh, Scheduled, etc.
  imageUrl: string;
}



export const activities: ActivityItem[] = [
  {
    id: 1,
    name: "DC Fast - MG Road Metro",
    location: "Bengaluru, Karnataka",
    title: "High Utilization Alert",
    subTitle: "running at 92% capacity · consider adding more units",
    time: "10 minutes ago",
    amount: "92%",
    status: "alert",
    imageUrl: "/images/host1.jpg",
  },
  {
    id: 2,
    name: "Fast Charger - Connaught Place",
    location: "New Delhi, Delhi",
    title: "Session Completed",
    subTitle: "charged tata nexon ev · 45 kWh delivered",
    time: "25 minutes ago",
    amount: "45 kWh",
    status: "session",
    imageUrl: "/images/host2.jpg",
  },
  {
    id: 3,
    name: "Ultra Fast DC - IGI Airport",
    location: "New Delhi, Delhi",
    title: "Maintenance Scheduled",
    subTitle: "monthly preventive maintenance starting tomorrow",
    time: "1 hour ago",
    amount: "Scheduled",
    status: "maintenance",
    imageUrl: "/images/host3.jpg",
  },
  {
    id: 4,
    name: "DC Fast - NH-44 Highway",
    location: "Hyderabad Toll Plaza",
    title: "Charger Offline",
    subTitle: "connection issue detected · technician dispatched",
    time: "2 hours ago",
    amount: "Critical",
    status: "offline",
    imageUrl: "/images/host2.jpg",
  },
  {
    id: 5,
    name: "AC Charger - Phoenix Mall",
    location: "Mumbai, Maharashtra",
    title: "New Booking",
    subTitle: "MG ZS EV scheduled for 4:30 PM today",
    time: "3 hours ago",
    amount: "Upcoming",
    status: "booking",
    imageUrl: "/images/host1.jpg",
  },
  {
    id: 6,
    name: "Fast Charger - Banjara Hills",
    location: "Hyderabad, Telangana",
    title: "Charger Online",
    subTitle: "successfully went online after installation",
    time: "5 hours ago",
    amount: "Active",
    status: "online",
    imageUrl: "/images/host3.jpg",
  },
];





export const getStatusStyles = (status: ActivityItem["status"]) => {
  switch (status) {
    case "alert":
      return "bg-[#fff0e5] text-[#b45309] ";
    case "session":
      return "bg-[#96FF7B30] text-[#29B605] ";
    case "maintenance":
      return "bg-[#fff0e5] text-[#b45309]";
    case "offline":
      return "bg-[#ffdbd6] text-[#fb2c2f] ";
    case "booking":
      return "bg-[#f3ebfe] text-[#8a38f5] ";
    case "online":
      return "bg-blue-50 text-blue-600 ";
    default:
      return "bg-gray-50 text-gray-600 ";
  }
};




export const getStatusText = (status: ActivityItem["status"]) => {
  switch (status) {
    case "alert":
      return "Alert";
    case "session":
      return "Session";
    case "maintenance":
      return "Maintenance";
    case "offline":
      return "Offline";
    case "booking":
      return "Booking";
    case "online":
      return "Online";
    default:
      return status;
  }
};





export const getStatusIcon = (status: ActivityItem["status"]) => {
  switch (status) {
    case "alert":
      return AlertTriangle;
    case "session":
      return Zap;
    case "maintenance":
      return Wrench;
    case "offline":
      return Power;
    case "booking":
      return Calendar;
    case "online":
      return PowerCircle;
    default:
      return Clock;
  }
};



// 1. DATA ARRAY
const userData = [
  { id: 1, name: 'Priya Singh', email: 'priyasingh@gmail.com', contact: '+91 5678903488', status: 'Approved', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success', imageUrl: "/images/user.jpg", },
  { id: 2, name: 'Rohit Singh', email: 'rohitsingh@gmail.com', contact: '+91 5778433390', status: 'Approved', date: '2024-11-15', bookings: 14, amount: '₹2450', paymentStatus: 'Pending', imageUrl: "/images/user3.jpg", },
  { id: 3, name: 'Sneha Kapoor', email: 'snehakapoor@gmail.com', contact: '+91 1258444907', status: 'Pending', date: '2024-11-15', bookings: 9, amount: '₹4550', paymentStatus: 'Pending', imageUrl: "/images/user1.jpg", },
  { id: 4, name: 'Neha Singh', email: 'nehasingh@gmail.com', contact: '+91 3279333487', status: 'Failed', date: '2024-11-15', bookings: 30, amount: '₹4950', paymentStatus: 'Failed', imageUrl: "/images/user2.jpg", },
  { id: 5, name: 'Rahul Sharma', email: 'rahulsharma@gmail.com', contact: '+91 7576329420', status: 'Approved', date: '2024-11-15', bookings: 23, amount: '₹6450', paymentStatus: 'Success', imageUrl: "/images/user.jpg", },
  { id: 6, name: 'Krishna Thakur', email: 'krishna@gmail.com', contact: '+91 7576329420', status: 'Approved', date: '2024-11-15', bookings: 40, amount: '₹450', paymentStatus: 'Pending', imageUrl: "/images/user3.jpg", },
  { id: 7, name: 'Antara Mishra', email: 'antaramishra@gmail.com', contact: '+91 7576329420', status: 'Approved', date: '2024-11-15', bookings: 28, amount: '₹450', paymentStatus: 'Success', imageUrl: "/images/user1.jpg", },
];

// chargerData.ts
export type ChargerMode = "online" | "offline" | "maintenance";
export type ChargerState = "block" | "unblock";

export interface ChargerCard {
  title: string;
  sub: string;
  location: string;
  capacity: string;
  type1: string;
  type: "AC" | "DC";
  utilization: number;
  state: ChargerState;
  mode: ChargerMode;
  image: string;
}

export const chargerData: ChargerCard[] = [
  {
    title: "DC Fast - MG Road Metro",
    sub: "Reddy Fast Charge",
    location: "MG Road Metro Station, Bengaluru, Karnataka",
    capacity: "150kW",
    type1: "Type2",
    type: "DC",
    utilization: 92,
    state: "unblock",
    mode: "online",
    image: "/images/charger1.png",
  },
  {
    title: "Standard AC - Viman Nagar",
    sub: "Kumar EV Solutions",
    location: "Viman Nagar, Pune, Maharashtra",
    capacity: "7kW",
    type1: "CSS2",
    type: "AC",
    utilization: 38,
    state: "unblock",
    mode: "online",
    image: "/images/charger2.png",
  },
  {
    title: "Fast Charger - Banjara Hills",
    sub: "Gupta Charging Hub",
    location: "Road No. 12, Banjara Hills, Hyderabad",
    capacity: "120kW",
    type1: "CSS2",
    type: "DC",
    utilization: 78,
    state: "unblock",
    mode: "online",
    image: "/images/charger3.png",
  },
  {
    title: "AC Charger - Indiranagar",
    sub: "Singh Charging Station",
    location: "100 Feet Road, Indiranagar, Bengaluru",
    capacity: "22kW",
    type1: "Type2",
    type: "AC",
    utilization: 55,
    state: "unblock",
    mode: "online",
    image: "/images/charger2.png",
  },
  {
    title: "DC SuperFast - Whitefield",
    sub: "Singh Charging Hub",
    location: "ITPL Road, Whitefield, Bengaluru",
    capacity: "60kW",
    type1: "CSS2",
    type: "DC",
    utilization: 85,
    state: "unblock",
    mode: "online",
    image: "/images/charger1.png",
  },
  {
    title: "AC Charger - Koramangala",
    sub: "Singh Smart Charge",
    location: "80 Feet Road, 4th Block, Koramangala, Bengaluru",
    capacity: "7.4kW",
    type1: "Type2",
    type: "AC",
    utilization: 30,
    state: "unblock",
    mode: "online",
    image: "/images/charger3.png",
  },
  {
    title: "DC Fast - Electronic City",
    sub: "GreenVolt Charging",
    location: "Phase 1, Electronic City, Bengaluru",
    capacity: "100kW",
    type1: "Type1",
    type: "DC",
    utilization: 88,
    state: "unblock",
    mode: "online",
    image: "/images/charger1.png",
  },
  {
    title: "AC Charger - Andheri West",
    sub: "Urban EV Network",
    location: "Link Road, Andheri West, Mumbai",
    capacity: "11kW",
    type1: "CSS2",
    type: "AC",
    utilization: 42,
    state: "unblock",
    mode: "offline",
    image: "/images/charger2.png",
  },
  {
    title: "DC Fast - Sector 62",
    sub: "ChargeNow India",
    location: "Sector 62, Noida, Uttar Pradesh",
    capacity: "120kW",
    type1: "CSS2",
    type: "DC",
    utilization: 67,
    state: "block",
    mode: "maintenance",
    image: "/images/charger3.png",
  },

];

export const getAmountTextStyle = (status: ActivityItem["status"]) => {
  switch (status) {
    case "alert":
      return "text-[#b45309]";      // same as alert

    case "session":
      return "text-[#29B605]";      // green

    case "online":
      return "text-[#29B605]";       // green/blue used for online

    case "maintenance":
      return "text-blue-600";       // blue

    case "offline":
      return "text-[#fb2c2f]";      // red

    case "booking":
      return "text-[#8a38f5]";      // purple

    default:
      return "text-gray-600";
  }
};




/* ================= COMPONENT ================= */
export default function UserManagementDashboard() {
  const [chargers, setChargers] = useState<ChargerCard[]>(chargerData);
  const [search, setSearch] = useState("");
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const [typeFilter, setTypeFilter] = useState("All Type");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  /* ---------------- FILTER LOGIC ---------------- */
const filteredChargers = chargers.filter((c) => {
  const searchText = search.toLowerCase();

  const matchSearch =
    c.location.toLowerCase().includes(searchText) ||
    c.type.toLowerCase().includes(searchText) ||
    c.type1.toLowerCase().includes(searchText) ||
    c.capacity.toLowerCase().includes(searchText)||
    c.title.toLowerCase().includes(searchText);

  const matchType =
    typeFilter === "All Type" ||
    c.type.toLowerCase() === typeFilter.toLowerCase();

  const matchStatus =
    statusFilter === "All Status" ||
    c.mode.toLowerCase() === statusFilter.toLowerCase();

  return matchSearch && matchType && matchStatus;
});


  /* ---------------- STATE HANDLERS ---------------- */
  const toggleState = (index: number, state: "block" | "unblock") => {
    setChargers((prev) =>
      prev.map((c, i) => (i === index ? { ...c, state } : c))
    );
  };

  const changeMode = (
    index: number,
    mode: "online" | "offline" | "maintenance"
  ) => {
    setChargers((prev) =>
      prev.map((c, i) => (i === index ? { ...c, mode } : c))
    );
  };


  return (
    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2 flex flex-col desktop:w-[1010px]">
      {/* HEADER */}
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">Charger Management</h1>
        <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
          Monitor and manage all charging stations
        </p>
      </div>

      <div className="space-y-3 flex-1 h-[82vh] overflow-y-auto no-scrollbar mb-4">
        {/* STATS + ACTIONS + CHARGER STATUS */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch  w-full">
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-3 h-full">
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.6rem]">
              {StatsConfig.map((card) => {
  const stat = data.charger.stats[card.key];
  const TopIcon = card.icon;
  const BottomIcon = card.bottomIcon;

  const isPositive = stat.growth >= 0;

  return (
    <div
      key={card.key}
      className="font-inter relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
    >
      {/* TOP ICON */}
      <div className="flex gap-2 items-center mb-2">
        <TopIcon
          size={30}
          className={
            card.theme === "green"
              ? "text-[#38EF0A]"
              : "text-[#FF8A00]"
          }
        />
        <p className="text-[12px] text-[#364153] font-medium">
          {card.title}
        </p>
      </div>

      {/* VALUE */}
      <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">
        {card.type === "currencyGrowth"
          ? `₹${stat.total.toLocaleString()}`
          : stat.total}
      </h2>

      {/* META SECTION */}
      <div className="flex flex-col gap-1 mt-2">

        {/* TYPE 1 → Total With Breakdown */}
        {card.type === "totalWithBreakdown" && (
          <div className="max-w-[85px] font-medium flex flex-wrap gap-x-1 gap-y-1 text-[9px] text-[#7C7C7C] text-center mt-1">
            <span>
              AC: <span className="font-semibold text-[#38EF0A]">{stat.ac}</span>
            </span>
            <span className="text-[#DFDFDF]">|</span>
            <span>
              DC: <span className="font-semibold text-[#38EF0A]">{stat.dc}</span>
            </span>
            <span className="mx-auto">
              Fast: <span className="font-semibold text-[#38EF0A]">{stat.fast}</span>
            </span>
          </div>
        )}

        {/* TYPE 2 → Growth */}
        {(card.type === "growth" || card.type === "currencyGrowth") && (
          <>
            <span
              className={`text-[14px] flex items-center gap-2 font-medium ${
                isPositive ? "text-[#25BB00]" : "text-red-500"
              }`}
            >
              <TrendingUp size={15} />
              {isPositive ? "+" : ""}
              {stat.growth}%
            </span>
            <span className="text-[#757575] text-[10px] -mt-1">
              Vs Yesterday
            </span>
          </>
        )}
      </div>

      {/* BOTTOM ICON */}
      <div
        className={`absolute -bottom-6 -right-4 w-24 h-24 rounded-full flex items-center justify-center ${
          card.theme === "green"
            ? "bg-[#2CDE0026]"
            : "bg-[#FF8A0026]"
        }`}
      >
        <BottomIcon
          size={40}
          className={
            card.theme === "green"
              ? "text-[#38EF0A]"
              : "text-[#FF8A00]"
          }
        />
      </div>
    </div>
  );
})}

            </div>

            {/* ACTION CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.6rem] mt-3">
{ActionConfig.map((card) => {
  const TopIcon = card.icon;
  const action = data.charger.actions[card.key];

  return (
    <div
      key={card.key}
      className="font-inter bg-white p-2 rounded-xl shadow-md border border-gray-100 flex flex-col"
    >
      {/* TOP ICON + TITLE */}
      <div className="flex items-center gap-1 mb-2">
        <TopIcon size={17} className="text-[#2CDE00]" />
        <h3 className="text-[11px] font-semibold text-[#364153]">
          {card.title}
        </h3>
      </div>

      {/* SUB TEXT */}
      <div className="font-medium text-[#333333] border-t-[1.5px] border-[#DFDFDF] pt-1 text-[10px]">

        {card.type === "manage" && (
          <>
            <div className="flex items-center gap-[0.3rem]">
              <span className="text-[12px] font-medium">
                Total Chargers:
              </span>
              <span className="text-[15px] font-semibold">
                {action.total}
              </span>
            </div>
            {/* <div className="text-[9px] text-[#8E8E93] mt-1">
              AC / DC / Fast chargers
            </div> */}
          </>
        )}

        {card.type === "status" && (
          <div className="flex items-center gap-[0.3rem]">
            <span className="text-[12px] font-medium">
              Active :
            </span>
            <span className="text-[15px] font-semibold text-[#38EF0A]">
              {action.active}
            </span>
            <span className="text-[#DFDFDF]">|</span>
            <span className="text-[12px] font-medium">
              Offline :
            </span>
            <span className="text-[15px] font-semibold text-[#38EF0A]">
              {action.offline}
            </span>
          </div>
        )}

        {card.type === "maintenance" && (
          <>
            <div className="flex items-center gap-[0.3rem]">
              <span className="text-[12px] font-medium">
                Under Maintenance :
              </span>
              <span className="text-[15px] font-semibold">
                {action.underMaintenance}
              </span>
            </div>
            {/* <div className="text-[9px] text-[#8E8E93] mt-1">
              requires attention
            </div> */}
          </>
        )}

        {card.type === "blocked" && (
          <>
            <div className="flex items-center gap-[0.3rem]">
              <span className="text-[15px] font-semibold">
                {action.blockedCount}
              </span>
              <span className="text-[12px] font-medium">
                Chargers Blocked
              </span>
            </div>
            {/* <div className="text-[9px] text-[#8E8E93] mt-1">
              offline / blocked
            </div> */}
          </>
        )}
          {card.sub && (
    <div className="text-[9px] text-[#8E8E93] mb-1 capitalize">
      {card.sub}
    </div>
  )}

      </div>

      {/* BUTTON */}
      <button className="mt-auto flex gap-1 items-center justify-center w-[110px] py-1.5 text-[11px] font-semibold bg-[#38EF0A] text-white rounded-md">
        {card.btn} <MdOutlineKeyboardArrowRight size={14} />
      </button>
    </div>
  );
})}
            </div>
          </div>

          {/* CHARGER STATUS */}
          <div className="w-full lg:w-[220px]  bg-white rounded-xl shadow px-3 py-2 h-full flex flex-col">
            <h3 className="text-center font-inter text-[20px] font-semibold text-[#434343] mb-1">
              Charger Status
            </h3>

            <div className="flex-1 flex flex-col justify-center items-center fix-graph">
              <PieChart width={160} height={160} className="flex justify-center">
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

                      <div >
                        <p className="font-roboto font-semibold text-[16px] text-[#364153]">{a.name}</p>
                        <div className="flex items-center gap-[0.1rem]">
                          <IoLocationSharp className="w-3 h-3  text-[#38EF0A]" />
                          <span className="font-roboto font-regular text-[11px] text-[#848484]">{a.location}</span>
                        </div>

                        <p className="font-roboto font-regular text-[13px] text-[#848484]">{a.title}</p>
                        <p className="font-inter font-regular text-[10px] text-[#707274]">{a.subTitle}</p>
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
                        {a.amount && <p className={`font-roboto ${getAmountTextStyle(a.status)}  text-[15px]`}>
                          {a.amount}
                        </p>}
                        <p className="font-inter text-[12px] text-[#707274]">{a.time}</p>
                      </div>

                      <span
                        className={`hidden desktop:flex font-roboto items-center gap-2 desktop:w-[133px] justify-center py-1.5 text-[14px] rounded-md ${getStatusStyles(
                          a.status
                        )}`}
                      >
                        <StatusIcon size={16} />
                        {getStatusText(a.status)}
                      </span>
                      <span
                        className={`desktop:hidden absolute bottom-0 right-1 font-roboto flex items-center gap-2 w-[120px] justify-center py-1.5 text-[14px] rounded-md ${getStatusStyles(
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
          <div className="bg-white rounded-xl pt-2 shadow">
            <h3 className="font-inter text-[#434343] text-[20px] font-semibold mb-3 text-center">City-wise Charger Distribution</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData} barGap={6}>

                <XAxis dataKey="city" />

                {/* Left Y-Axis (Chargers) */}
                <YAxis yAxisId="left" />

                {/* Right Y-Axis (Utilization %) */}
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />

                <Tooltip cursor={false}/>

                <Bar
                  yAxisId="left"
                  dataKey="chargers"
                  name="Chargers"
                  fill="#3B82F6"
                  radius={[6, 6, 0, 0]}
                />

                <Bar
                  yAxisId="right"
                  dataKey="utilization"
                  name="Avg Utilization"
                  fill="#22C55E"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="font-inter text-[#434343] justify-center flex gap-6">
              <div className="flex items-center gap-2 ">
                <span className="w-3 h-3 rounded-full bg-[#03DF48]"></span>
                <span>Chargers</span>
              </div>

              <div className="flex items-center gap-2 ">
                <span className="w-3 h-3 rounded-full bg-[#2886FF]"></span>
                <span>Avg Utilization</span>
              </div>
            </div>
          </div>
        </div>

        {/* search & filter functionality */}
        <div className="bg-white  px-4  rounded-[20px] overflow-hidden">
          {/* ================= FILTER BAR ================= */}
          <div className="py-4 sticky top-0 z-10 bg-white md:flex-row flex flex-col gap-3">
            <div className="relative flex-1 flex items-center  w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full px-4 pl-9  py-3 border border-[#B7B7B7] hover:ring-[0.8px] hover:ring-[#38EF0A] focus:outline-none focus:ring-[0.6px]  focus:ring-[#38EF0A] shadow-[0px_2px_6.3px_0px_#00000026] rounded-[10px]"
              placeholder="Search by location or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            </div>
            <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <button
                onClick={() => {setIsTypeDropdownOpen(!isTypeDropdownOpen);
                  setIsStatusDropdownOpen(false)}
                }
                className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] desktop:w-[200px] w-full  justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700 font-inter md:text-[20px] text-[18px]">
                    {typeFilter}
                  </span>
                </div>

                <ChevronDown
                  className={`transition-transform ${isTypeDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isTypeDropdownOpen && (
                <div className="absolute right-0  mt-2 md:w-48 w-40  p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">

                  {["All Type", "DC", "AC"].map((type) => (
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
                 onClick={() => {setIsTypeDropdownOpen(false);
                  setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                }
                className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] desktop:w-[200px] w-full justify-between"
              >
                <span className="font-medium text-gray-700 font-inter md:text-[20px] text-[18px]">
                  {statusFilter}
                </span>

                <ChevronDown
                  className={`transition-transform ${isStatusDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isStatusDropdownOpen && (
                <div className="absolute right-0 mt-2 md:w-48 w-45 p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-20">
                  {["All Status", "Online", "Offline", "Maintenance"].map((status) => (
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
         

          {/* ================= CARDS ================= */}
          {filteredChargers.length === 0 ? (
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
      No chargers found
    </h3>
    <p className="text-xs text-gray-400 mt-1">
      Try changing search or filter
    </p>

  </div>
) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 overflow-y-auto max-h-[450px] no-scrollbar">
            {filteredChargers.map((c, i) => (
              <div
                key={i}
                className="bg-white   rounded-2xl shadow-md p-3 relative border border-[#D4D4D4] shadow-[0px_2.41px_5.86px_0px_#00000036]
                 hover:border-[#38EF0A] hover:border-[1.5px] transition duration-300 flex flex-col"
              >
                {/* -------- MODE DROPDOWN -------- */}
                {/* -------- MODE DROPDOWN -------- */}
                <div className="absolute top-3 right-5 font-roboto text-[10px] ">

                  {/* Selected Button */}
                  <div
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className={`px-1 py-1.5 rounded-[5px]  flex justify-center items-center gap-1 w-[90px] shadow-sm
                    ${c.state==="block" ?'':'cursor-pointer'}
                    ${c.state==="block" && c.mode==="online" && "bg-green-100 text-gray-400"}
                    ${c.state==="unblock" && c.mode === "online" && "bg-[#38EF0A] text-white"}
                    ${c.mode === "offline" && "bg-[#DDE5D6] text-[#7B8573]"}
                    ${c.mode === "maintenance" && "bg-[#D25B0032] text-[#B45309] text-[8px]"}
                  `}
                  >
                    {c.mode === "online" && <Zap size={12} className="shrink-0" />}
                    {c.mode === "offline" && <ZapOff size={12} className="shrink-0" />}
                    {c.mode === "maintenance" && <Wrench size={10} className="shrink-0" />}

                    <span className="capitalize ">{c.mode}</span>

                    <ChevronDown size={10} className="ml-1" />
                  </div>

                  {/* Dropdown Options */}
                  {openIndex === i && c.state !=='block' &&(
                    <div className="absolute right-0 mt-2 w-full bg-transparent space-y-1 overflow-hidden z-50">

                      <div
                        onClick={() => {
                          changeMode(i, "online");
                          setOpenIndex(null);
                        }}
                        className="text-[10px] px-4 py-1 bg-green-100 hover:bg-[#38EF0A] hover:text-white cursor-pointer flex gap-2 rounded-[5px] items-center text-gray-400"
                      >
                        <Zap size={12} className="shrink-0" />
                        Online
                      </div>

                      <div
                        onClick={() => {
                          changeMode(i, "offline");
                          setOpenIndex(null);
                        }}
                        className="text-[10px] px-4 py-1 bg-gray-100 hover:bg-gray-200 hover:text-[11px]  cursor-pointer flex gap-2 rounded-[5px] items-center text-gray-400"
                      >
                        <ZapOff size={12} className="shrink-0" />
                        Offline
                      </div>

                      <div
                        onClick={() => {
                          changeMode(i, "maintenance");
                          setOpenIndex(null);
                        }}
                        className="text-[8px] hover:text-[8.5px] px-4 py-1  bg-[#D25B0026] hover:bg-[#D25B0032] hover:text-[#B45309] cursor-pointer flex gap-2 rounded-[5px] items-center text-[#B45309]"
                      >
                        <Wrench size={12} className="shrink-0" />
                        Maintenance
                      </div>

                    </div>
                  )}
                </div>



                {/* -------- IMAGE -------- */}
                <img
                  src={c.image}
                  className="mt-8 w-[266px] h-[120px] shadow-[0px_1.61px_3.77px_0px_#0000002E] rounded-[9px] mx-auto object-contain mb-2 "
                  alt=""
                />

                {/* -------- INFO -------- */}
                <h3 className="font-inter font-semibold text-[#757575] text-[16px] ">{c.title}</h3>
                <p className=" font-roboto font-medium text-[12px] text-[#8E8E93] mb-2">{c.sub}</p>
                <div className="flex items-center gap-1 mb-1">
                  <IoLocationSharp className="w-3 h-3  text-[#38EF0A]" />
                  <p className="font-roboto text-[11px] text-[#8E8E93] ">{c.location}</p>
                </div>


                <div className="font-arial text-[11px] text-[#8E8E93] flex items-center gap-1 mb-1">
                  <div className="bg-[#00000012] rounded-full p-1 inline-flex items-center justify-center">
                    <FaBoltLightning className="w-2 h-2 text-[#38EF0A]" />
                  </div>
                  {c.type}{" "}Fast - {c.capacity}
                </div>

                <div className="flex items-center  gap-1 mb-3">
                  <div className="bg-[#00000012] rounded-full p-1 inline-flex items-center justify-center">
                  <BiSolidPlug className="w-[10px] h-[10px] text-[#38EF0A]" />
                  </div>
                  <p className="font-roboto text-[11px] text-[#8E8E93]">{c.type1}</p>
                </div>


                {/* -------- UTILIZATION -------- */}
               {c.utilization > 0 && c.mode !== "maintenance" && c.mode !== "offline" && (
                  <div className="mb-3">
                    <div className="font-roboto flex justify-between text-[12px] text-[#8E8E93] ">
                      <span>Utilization</span>
                      <span>{c.utilization}%</span>
                    </div>
                    <div className="h-2 bg-[#C5FFB6] rounded-full">
                      <div
                        className="h-[8px] bg-[#2CDE00] rounded-full"
                        style={{ width: `${c.utilization}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* -------- ACTION BUTTONS -------- */}
                <div className="flex justify-center gap-3 mt-auto">
                  <button
                    onClick={() => toggleState(i, "unblock")}
                    className={`w-[93px] py-1 font-inter font-medium text-[12px]  rounded-[6px] flex items-center justify-center gap-1
                  ${c.state === "unblock"
                        ? "bg-[#38EF0A] text-white"
                      : "bg-white text-[#38EF0A] border-[1.5px] border-[#38EF0A]"
                      }
                `}
                  ><Ban size={14} />
                    Unblock
                  </button>

                  <button
                    onClick={() => toggleState(i, "block")}
                    className={`w-[93px] py-1 font-inter font-medium text-[12px] rounded-[6px] flex items-center justify-center gap-1
                  ${c.state === "block"
                        ? "bg-[#FA2023] text-white"
                        : "bg-[#FA20232E] border-[#FA202354] border-[1.3px] text-[#FA2023]"
                      }
                `}
                  ><Ban size={14} />
                    Block
                  </button>
                </div>
              </div>
            ))}
          </div>)}
      </div>
    </div>
    </div>
  );
}