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
} from "lucide-react";
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
import { FaChargingStation } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";

// import Image from "next/image";

/* ================= DATA ================= */
export const StatsCards = [
  {
    title: "Total Chargers",
    value: "850",
    meta: <>
    <div className="max-w-[85px] font-inter font-medium flex flex-wrap gap-x-1 gap-y-1 text-[9px] text-[#7C7C7C] text-center mt-1">
  <span className="whitespace-nowrap">
    AC: <span className="font-semibold text-[#38EF0A]">560</span>
  </span>
  <span className="text-[#DFDFDF]">|</span>
  <span className="whitespace-nowrap">
    DC: <span className="font-semibold text-[#38EF0A]">210</span>
  </span>

  <span className="whitespace-nowrap mx-auto">
    Fast: <span className="font-semibold text-[#38EF0A]">80</span>
  </span>
</div>

    </>,
    growth: null,
    icon: FaChargingStation,
    theme: "green",
    bottomIcon : FaChargingStation,
  },
  {
    title: "Inactive Chargers",
    value: "80",
    meta: "Vs Yesterday",
    growth: "-2%",
    icon: RiAlertFill,
    theme: "orange",
    bottomIcon :RiAlertFill,
  },
  {
    title: "Active Chargers",
    value: "820",
    meta: "Vs Yesterday",
    growth: "+8%",
    icon: Radio,
    theme: "green",
    bottomIcon : Radio
  },
  {
    title: "Total Revenue",
    value: "₹4,50,890",
    meta: "Vs Last Month",
    growth: "+15%",
    icon: RiMoneyRupeeCircleFill,
    theme: "green",
    bottomIcon : SiSimpleanalytics,
  },
];

export const actionCards = [
  {
    title: "Manage Chargers",
    sub1: (
      <div className="flex items-center gap-[0.3rem]">
         <span className="text-[12px] font-medium">
          Total Chargers:
        </span>
        <span className="text-[15px] font-semibold">850</span>
       
      </div>
    ),
    sub2 : "aC / DC / Fast chargers",
    btn: "Manage",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: MdEvStation,
  },
  {
    title: "Charger Status",
    sub1: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[12px] font-medium">
          Active :
        </span>
        <span className="text-[15px] font-semibold text-[#38EF0A]">720</span>
        <span className="text-[#DFDFDF]">|</span>
        <span className="text-[12px] font-medium">
          Offline :
        </span>
        <span className="text-[15px] font-semibold text-[#38EF0A]">90</span>
        
      </div>
    ),
   
    btn: "View Status",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: MdOutlineWifiTethering,
  },
  {
    title: "Maintenance Mode",
    sub1: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[12px] font-medium">
          Under Maintenance :
        </span>
        <span className="text-[15px] font-semibold">40</span>
        
      </div>
    ),
     sub2:"requires attention",
    btn: "Manage",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: MdOutlineBuildCircle,
  },
  {
    title: "Blocked Chargers",
    sub1: (
      <div className="flex items-center gap-[0.3rem]">
        <span className="text-[15px] font-semibold">20</span>
        <span className="text-[12px] font-medium">
          Chargers Blocked
        </span>
        
        
      </div>
    ),
    sub2:"offline / blocked",
    btn: "Manage List",
    btnIcon: MdOutlineKeyboardArrowRight,
    icon: MdBlock,
  },
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
      return "bg-orange-50 text-orange-600 ";
    case "session":
      return "bg-green-50 text-green-600 ";
    case "maintenance":
      return "bg-amber-50 text-amber-600 ";
    case "offline":
      return "bg-red-50 text-red-600 ";
    case "booking":
      return "bg-purple-50 text-purple-600 ";
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

// 2. ICON SWITCH CASE HELPER
const GetStatusIcon = (type: string, status: string) => {
  switch (status.toLowerCase()) {
    case 'approved':
    case 'success':
      return <CheckCircle size={16} className="text-green-500" />;
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




// chargerData.ts
export type ChargerMode = "online" | "offline" | "maintenance";
export type ChargerState = "block" | "unblock";

export interface ChargerCard {
  title: string;
  sub: string;
  location: string;
  capacity: string;
  type: "AC" | "DC";
  utilization: number;
  state: ChargerState;
  mode: ChargerMode;
  image: string;
}

export const chargers: ChargerCard[] = [
  {
    title: "DC Fast - MG Road Metro",
    sub: "Reddy Fast Charge",
    location: "MG Road Metro Station, Bengaluru, Karnataka",
    capacity: "150kW",
    type: "DC",
    utilization: 92,
    state: "unblock",
    mode: "online",
    image: "/images/host1.jpg",
  },
  {
    title: "Standard AC - Viman Nagar",
    sub: "Kumar EV Solutions",
    location: "Viman Nagar, Pune, Maharashtra",
    capacity: "7kW",
    type: "AC",
    utilization: 38,
    state: "unblock",
    mode: "online",
    image: "/images/host2.jpg",
  },
  {
    title: "Fast Charger - Banjara Hills",
    sub: "Gupta Charging Hub",
    location: "Road No. 12, Banjara Hills, Hyderabad",
    capacity: "120kW",
    type: "DC",
    utilization: 78,
    state: "unblock",
    mode: "online",
    image: "/images/host3.jpg",
  },
  {
    title: "AC Charger - Indiranagar",
    sub: "Singh Charging Station",
    location: "100 Feet Road, Indiranagar, Bengaluru",
    capacity: "22kW",
    type: "AC",
    utilization: 55,
    state: "unblock",
    mode: "online",
    image: "/images/host2.jpg",
  },
  {
    title: "DC SuperFast - Whitefield",
    sub: "Singh Charging Hub",
    location: "ITPL Road, Whitefield, Bengaluru",
    capacity: "60kW",
    type: "DC",
    utilization: 85,
    state: "unblock",
    mode: "online",
    image: "/images/host1.jpg",
  },
  {
    title: "AC Charger - Koramangala",
    sub: "Singh Smart Charge",
    location: "80 Feet Road, 4th Block, Koramangala, Bengaluru",
    capacity: "7.4kW",
    type: "AC",
    utilization: 30,
    state: "unblock",
    mode: "online",
    image: "/images/host3.jpg",
  },
  {
  title: "DC Fast - Electronic City",
  sub: "GreenVolt Charging",
  location: "Phase 1, Electronic City, Bengaluru",
  capacity: "100kW",
  type: "DC",
  utilization: 88,
  state: "unblock",
  mode: "online",
  image: "/images/host1.jpg",
},
{
  title: "AC Charger - Andheri West",
  sub: "Urban EV Network",
  location: "Link Road, Andheri West, Mumbai",
  capacity: "11kW",
  type: "AC",
  utilization: 42,
  state: "unblock",
  mode: "offline",
  image: "/images/host2.jpg",
},
{
  title: "DC Fast - Sector 62",
  sub: "ChargeNow India",
  location: "Sector 62, Noida, Uttar Pradesh",
  capacity: "120kW",
  type: "DC",
  utilization: 67,
  state: "block",
  mode: "maintenance",
  image: "/images/host3.jpg",
},

];



/* ================= COMPONENT ================= */
export default function UserManagementDashboard() {
    const [data, setData] = useState<ChargerCard[]>(chargers);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredData = data.filter((c) => {
    const matchSearch =
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase());

    const matchType =
      typeFilter === "all" || c.type.toLowerCase() === typeFilter;

    const matchStatus =
      statusFilter === "all" || c.mode === statusFilter;

    return matchSearch && matchType && matchStatus;
  });

  /* ---------------- STATE HANDLERS ---------------- */
  const toggleState = (index: number, state: "block" | "unblock") => {
    setData((prev) =>
      prev.map((c, i) => (i === index ? { ...c, state } : c))
    );
  };

  const changeMode = (
    index: number,
    mode: "online" | "offline" | "maintenance"
  ) => {
    setData((prev) =>
      prev.map((c, i) => (i === index ? { ...c, mode } : c))
    );
  };
  
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
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">Host Management</h1>
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
              {StatsCards.map((s, i) => {
  const TopIcon = s.icon;
  const BottomIcon = s.bottomIcon;
  const isPositive = s.growth?.includes("+");

  return (
    <div
      key={i}
      className="font-inter relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
    >
      {/* TOP ICON + TITLE */}
      <div className="flex gap-2 items-center mb-2">
        <TopIcon
          size={30}
          className={s.theme === "green" ? "text-[#38EF0A]" : "text-[#FF8A00]"}
        />
        <p className="text-[12px] text-[#364153] font-medium">
          {s.title}
        </p>
      </div>

      {/* VALUE */}
      <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-1">
        {s.value}
      </h2>

      {/* META / GROWTH */}
      <div className="flex flex-col gap-1 mt-2">
        {s.growth ? (
          <>
            <span
              className={`text-[14px] flex items-center gap-2 font-medium ${
                isPositive ? "text-[#25BB00]" : "text-red-500"
              }`}
            >
              <TrendingUp size={15} />
              {s.growth}
            </span>
            <span className="text-[#757575] text-[10px] -mt-1">
              {s.meta}
            </span>
          </>
        ) : (
          <span className="text-[#757575] text-[11px] mt-1">
            {s.meta}
          </span>
        )}
      </div>

      {/* BOTTOM CIRCLE ICON */}
      <div
        className={`absolute -bottom-6 -right-4 w-24 h-24 rounded-full flex items-center justify-center
        ${
          s.theme === "green"
            ? "bg-[#2CDE0026]"
            : "bg-[#FF8A0026]"
        }`}
      >
        <BottomIcon
          size={40}
          className={s.theme === "green" ? "text-[#38EF0A]" : "text-[#FF8A00]"}
        />
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
                    className="font-inter bg-white p-2 rounded-xl shadow-md border border-gray-100 flex flex-col"
                  >
                    {/* TOP ICON + TITLE */}
                    <div className="flex items-center gap-1 mb-2">
                      <TopIcon size={17} className="text-[#2CDE00]" />
                      <h3 className="text-[11px] font-semibold text-[#364153]">
                        {a.title}
                      </h3>
                    </div>

                    {/* SUB TEXT */}
                    <div className="font-medium text-[#333333]  border-t-[1.5px] border-[#DFDFDF] pt-1 text-[10px]">
                      {a.sub1}
                    </div>
                    <div className="font-medium text-[#8E8E93] text-[9px] mb-1 capitalize">{a.sub2}</div>
                    {/* BUTTON */}
                    <button className="mt-auto flex items-center justify-center gap-1 w-[110px] py-1.5 text-[11px] font-semibold bg-[#38EF0A]  text-white rounded-md">
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
            <h3 className="font-inter text-[20px] font-semibold text-[#434343] mb-1">
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
                        <p className="font-roboto font-regular text-[11px] text-[#848484]">{a.location}</p>
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
                        {a.amount && <p className="font-roboto text-[#29B605] text-[15px]">
                          {a.amount}
                        </p>}
                        <p className="font-inter text-[12px] text-[#707274]">{a.time}</p>
                      </div>

                      <span
                        className={`hidden desktop:flex font-roboto items-center gap-2 desktop:w-[133px] justify-center py-1.5 text-[14px] border rounded-md ${getStatusStyles(
                          a.status
                        )}`}
                      >
                        <StatusIcon size={16} />
                        {getStatusText(a.status)}
                      </span>
                      <span
                        className={`desktop:hidden absolute bottom-0 right-1 font-roboto flex items-center gap-2 w-[120px] justify-center py-1.5 text-[14px] border rounded-md ${getStatusStyles(
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

        <Tooltip />

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
        <div className="bg-white  p-4 space-y-4 rounded-[20px]">
      {/* ================= FILTER BAR ================= */}
      <div className="desktop:flex-row flex flex-col gap-3">
        <input
          className="w-full px-4 py-2 border border-gray-200  rounded-xl"
          placeholder="Search by location or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border border-gray-200 rounded-xl"
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All Type</option>
          <option value="dc">DC</option>
          <option value="ac">AC</option>
        </select>

        <select
          className="px-4 py-2 border border-gray-200 rounded-xl"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData.map((c, i) => (
          <div
            key={i}
            className="bg-white   rounded-2xl shadow-md p-3 relative"
          >
            {/* -------- MODE DROPDOWN -------- */}
            <select
              value={c.mode}
              onChange={(e) =>
                changeMode(i, e.target.value as any)
              }
              className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full
                ${c.mode === "online" && "bg-green-500 text-white"}
                ${c.mode === "offline" && "bg-gray-300"}
                ${c.mode === "maintenance" && "bg-orange-200"}
              `}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="maintenance">Maintenance</option>
            </select>

            {/* -------- IMAGE -------- */}
            <img
              src={c.image}
              className="h-28 mx-auto object-contain"
              alt=""
            />

            {/* -------- INFO -------- */}
            <h3 className="font-semibold mt-2">{c.title}</h3>
            <p className="text-sm text-gray-500">{c.sub}</p>
            <p className="text-sm">{c.location}</p>

            <div className="flex gap-2 text-sm mt-2">
              <span className="px-2 py-1 bg-green-100 rounded">
                {c.type} · {c.capacity}
              </span>
            </div>

            {/* -------- UTILIZATION -------- */}
            {c.utilization > 0 && (
              <>
                <div className="flex justify-between text-xs mt-3">
                  <span>Utilization</span>
                  <span>{c.utilization}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: `${c.utilization}%` }}
                  />
                </div>
              </>
            )}

            {/* -------- ACTION BUTTONS -------- */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => toggleState(i, "unblock")}
                className={`w-full py-2 rounded-xl border
                  ${
                    c.state === "unblock"
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-600"
                  }
                `}
              >
                Unblock
              </button>

              <button
                onClick={() => toggleState(i, "block")}
                className={`w-full py-2 rounded-xl border
                  ${
                    c.state === "block"
                      ? "bg-red-500 text-white"
                      : "bg-white text-red-500"
                  }
                `}
              >
                Block
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}