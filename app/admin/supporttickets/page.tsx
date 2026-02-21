"use client";
import { useState } from "react";
import UploadedScreenshotModal from "./screenshotmodal";
import {
  Users, CircleDashed, ChevronDown, CheckCircle, Radio, DollarSign, FileCheck, Wallet, FileText, UserX, Calendar, CreditCard, TrendingUp, Clock, User,
  LogIn,
  UserPlus,
  XCircle,
  Ban,
  Unlock,
  Search,
  Filter,
  AlertTriangle,
  RotateCcw,
  Mail,
  Hourglass,
  ArrowRightLeft,
  BanknoteArrowDown,
  RefreshCcw,
  BarChart3,
  ClipboardList,
  MessageSquareMore,
  Tags,
  ChevronRight,
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
import { IoEye } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { IoHourglassOutline } from "react-icons/io5";
import { SiConventionalcommits } from "react-icons/si";
import ChatModal from "./chatmodal";
import { MessagesSquare } from 'lucide-react';
import { FaClipboardList } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
// import Image from "next/image";

/* ================= DATA ================= */

export const userStats = [
  {
    topIcon: Mail,
    title: "New Tickets",
    value: "24",
    subText: "vs yesterday",
    trend: "+6%",
    trendType: "positive",
    bottomIcon: Mail,
  },
  {
    topIcon: Clock,
    title: "In Progress",
    value: "15",
    subText: "unassigned",
    trend: "3",
    trendType: "neutral",
    bottomIcon: Hourglass,
  },
  {
    topIcon: AlertTriangle,
    title: "Critical Area",
    value: "Payment",
    subText: "High priority cases",
    trend: "8",
    trendType: "warning",
    bottomIcon: CreditCard,
  },
  {
    topIcon: CheckCircle,
    title: "Resolved",
    value: "40",
    subText: "Resolution rate",
    trend: "92%",
    trendType: "positive",
    bottomIcon: CheckCircle,
  },
];




export const actionCards = [
  {
    icon: FaClipboardList, // list icon (All tickets)
    title: "All Ticket Management",
    sub: "View and manage all tickets",
    btn: "View List",
  },
  {
    icon: MessagesSquare, // chat icon
    title: "Assign & Chat System",
    sub: "Assign ticket and chat with user",
    btn: "Open Chat",
  },
  {
    icon: Tags, // tag/issue categories
    title: "Issue Categories",
    sub: "Manage payment & charger tags",
    btn: "Manage Issue",
  },
  {
    icon: CheckCircle, // resolution board
    title: "Resolution Board",
    sub: "Track team success & solve rate",
    btn: "View Report",
  },
];


export const chargerStatus = [
  { name: "Active", value: 220, color: "#22c55e" },
  { name: "Offline", value: 45, color: "#ef4444" },
  { name: "Maintenance", value: 65, color: "#facc15" },
];

export interface ActivityItem {
  id: number;
  name: string;
  action:
  | "created"
  | "escalated"
  | "replied"
  | "assigned"
  | "updated"
  | "resolved";
  ticketId: string;
  description: string;
  timeAgo: string;
  date: string;
}

export const activities: ActivityItem[] = [
  {
    id: 1,
    name: "Sneha Reddy",
    action: "created",
    ticketId: "TKT-0043",
    description: "New ticket created by customer",
    timeAgo: "1 hour ago",
    date: "11/02/2026",
  },
  {
    id: 2,
    name: "Vikram Singh",
    action: "escalated",
    ticketId: "TKT-0039",
    description: "Escalated to senior support team",
    timeAgo: "2 hour ago",
    date: "10/02/2026",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    action: "replied",
    ticketId: "TKT-0038",
    description: "Requested additional information",
    timeAgo: "5 hour ago",
    date: "10/02/2026",
  },
  {
    id: 4,
    name: "Divya Nair",
    action: "assigned",
    ticketId: "TKT-0036",
    description: "Assigned to technical support team",
    timeAgo: "6 hour ago",
    date: "10/02/2026",
  },
  {
    id: 5,
    name: "Priya Sharma",
    action: "replied",
    ticketId: "TKT-0042",
    description: "Added a response to high priority ticket",
    timeAgo: "15 min ago",
    date: "11/02/2026",
  },
  {
    id: 6,
    name: "Rahul Verma",
    action: "updated",
    ticketId: "TKT-0041",
    description: "Changed ticket status to in progress",
    timeAgo: "28 min ago",
    date: "11/02/2026",
  },
  {
    id: 7,
    name: "Amit Patel",
    action: "resolved",
    ticketId: "TKT-0040",
    description: "Marked ticket as resolved and closed",
    timeAgo: "45 min ago",
    date: "11/02/2026",
  },
];

const getActivityConfig = (action: string) => {
  switch (action) {
    case "created":
    case "assigned":
      return {
        icon: <UserPlus size={20} className="group-hover:text-white" />,
        className:
          "bg-[#f3ebfe] text-[#8a38f5] group-hover:bg-[#8a38f5]",
      };

    case "escalated":
      return {
        icon: <AlertTriangle size={20} className="group-hover:text-white" />,
        className:
          "bg-[#ffdbd6] text-[#fb2c2f] group-hover:bg-[#fb2c2f]",
      };

    case "replied":
      return {
        icon: <RotateCcw size={20} className="group-hover:text-white" />,
        className:
          "bg-[#dbeafe] text-[#3b82f6] group-hover:bg-[#3b82f6]",
      };

    case "updated":
      return {
        icon: <Clock size={20} className="group-hover:text-white" />,
        className:
          "bg-[#fff0e5] text-[#ff8000] group-hover:bg-[#ff8000]",
      };

    case "resolved":
      return {
        icon: <CheckCircle size={20} className="group-hover:text-white" />,
        className:
          "bg-[#e1ffd9] text-[#29b605] group-hover:bg-[#29b605]",
      };

    default:
      return {
        icon: <Clock size={20} className="group-hover:text-white" />,
        className:
          "bg-[#f2f2f2] text-[#757575] group-hover:bg-[#757575]",
      };
  }
};

export interface ChatMessage {
  id: number;
  sender: "customer" | "company";
  text: string;
  time: string;
}

export interface SupportTicket {
  id: number;
  userName: string;
  email: string;
  ticketId: string;
  description: string;
  category:
  | "Technical Issue"
  | "Payment Issue"
  | "App Issue"
  | "Refund"
  | "Account Issue";   // ✅ Added

  status: "Open" | "In Progress" | "Resolved";
  priority: "Low" | "Medium" | "High";
  date: string;
  time: string;          // ✅ Added
  screenshot: string;   // ✅ Added
  chat: boolean;         // ✅ Added
  imageUrl: string;
  messages?: ChatMessage[];
}


export const supportTickets: SupportTicket[] = [
  {
    id: 1,
    userName: "Priya Singh",
    email: "priyasingh@gmail.com",
    ticketId: "TKT-1001",
    description: "Charger not starting",
    category: "Technical Issue",
    status: "Open",
    priority: "High",
    date: "12/02/2026",
    time: "10:45 AM",
    screenshot: "/iages/ticketss.png",
    chat: true,
    imageUrl: "/images/user.jpg",
    messages: [
    {
      id: 1,
      sender: "customer",
      text: "Hi, charger is not starting.",
      time: "10:46 AM",
    },
    {
      id: 2,
      sender: "company",
      text: "Please confirm charger ID.",
      time: "10:47 AM",
    },
    {
      id: 3,
      sender: "customer",
      text: "Hi, I tried to start the charging session but the charger is not starting. It shows connected but nothing happens.",
      time: "10:47 AM",
    },
    {
      id: 4,
      sender: "company",
      text: "Hi, I tried to start the charging session but the charger is not starting. It shows connected but nothing happens.",
      time: "10:47 AM",
    },
  ],
  },
  {
    id: 2,
    userName: "Rajesh Kumar",
    email: "rajeshkumar@gmail.com",
    ticketId: "TKT-1002",
    description: "Payment deducted but failed",
    category: "Payment Issue",
    status: "In Progress",
    priority: "High",
    date: "11/02/2026",
    time: "02:15 PM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user1.jpg",
  },
  {
    id: 3,
    userName: "Amit Patel",
    email: "amitpatel@gmail.com",
    ticketId: "TKT-1003",
    description: "App not showing nearby stations",
    category: "App Issue",
    status: "Resolved",
    priority: "Low",
    date: "10/02/2026",
    time: "09:30 AM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 4,
    userName: "Neha Gupta",
    email: "nehagupta@gmail.com",
    ticketId: "TKT-1004",
    description: "Refund not received",
    category: "Refund",
    status: "In Progress",
    priority: "High",
    date: "10/02/2026",
    time: "04:20 PM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user3.jpg",
  },
  {
    id: 5,
    userName: "Rahul Sharma",
    email: "rahulsharma@gmail.com",
    ticketId: "TKT-1005",
    description: "Charging stopped midway",
    category: "Technical Issue",
    status: "Open",
    priority: "Medium",
    date: "09/02/2026",
    time: "11:10 AM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user.jpg",
  },
  {
    id: 6,
    userName: "Sneha Kapoor",
    email: "snehakapoor@gmail.com",
    ticketId: "TKT-1006",
    description: "Wallet balance not updated",
    category: "Payment Issue",
    status: "Resolved",
    priority: "Low",
    date: "08/02/2026",
    time: "03:25 PM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user1.jpg",
  },
  {
    id: 7,
    userName: "Vikram Singh",
    email: "vikramsingh@gmail.com",
    ticketId: "TKT-1007",
    description: "Unable to login to account",
    category: "Account Issue",   // ✅ New Category Used Here
    status: "In Progress",
    priority: "High",
    date: "07/02/2026",
    time: "01:40 PM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 8,
    userName: "Kavya Nair",
    email: "kavyanair@gmail.com",
    ticketId: "TKT-1008",
    description: "Refund delayed for cancelled booking",
    category: "Refund",
    status: "Open",
    priority: "Medium",
    date: "06/02/2026",
    time: "05:50 PM",
    screenshot: "/images/ticketss.png",
    chat: true,
    imageUrl: "/images/user3.jpg",
  },
];

const getStatusBadgeConfig = (value: string) => {
  const v = value.toLowerCase();

  if (v === "open") {
    return {
      text: value,
      className: "bg-[#ffdbd6] text-[#fb2c2f] border border-[#ffb4ab]",
      icon: <SiConventionalcommits size={16} className="text-[#fb2c2f]" />,
    };
  }

  if (v === "in progress") {
    return {
      text: value,
      className: "bg-[#f9e8db] text-[#dc7527] border border-[#facc15]",
      icon: <IoHourglassOutline size={16} className="text-[#dc7527]" />,
    };
  }

  if (v === "resolved") {
    return {
      text: value,
      className: "bg-[#e1ffd9] text-[#29b605] border border-[#38EF0A66]",
      icon: <CheckCircle size={16} className="text-[#29b605]" />,
    };
  }

  return {
    text: value,
    className: "bg-[#f2f2f2] text-[#757575] border border-[#d6d6d7]",
    icon: null,
  };
};

const getPriorityBadgeConfig = (value: string) => {
  const v = value.toLowerCase();

  if (v === "high") {
    return {
      text: value,
      className: "bg-[#ffe2e2] text-[#e7000b] border border-[#ffb3b3]",
      icon: <FaExclamation size={16} className="text-[#e7000b]" />,
    };
  }

  if (v === "medium") {
    return {
      text: value,
      className: "bg-[#fef3e3] text-[#faad40] border border-[#facc15]",
      icon: <VscCircleFilled size={16} className="text-[#faad40]" />,
    };
  }

  if (v === "low") {
    return {
      text: value,
      className: "bg-[#e1eefd] text-[#2f85f3] border border-[#7ae7b0]",
      icon: <FaArrowDownLong size={16} className="text-[#2f85f3]" />,
    };
  }

  return {
    text: value,
    className: "bg-[#f2f2f2] text-[#757575] border border-[#d6d6d7]",
    icon: null,
  };
};




/* ================= COMPONENT ================= */
export default function UserManagementDashboard() {
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");



  const handleCloseScreenshotModal = () => {
    setIsScreenshotModalOpen(false);
  };

  // 3. FILTER LOGIC
  const filteredTickets = supportTickets.filter(ticket => {
    const matchesFilter = statusFilter === 'All Status' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'All Priority' || ticket.priority === priorityFilter;
    const matchesSearch = ticket.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesPriority && matchesSearch;
  });

  return (
    <>
    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2 flex flex-col desktop:w-[1010px]">
      {/* HEADER */}
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">Support Tickets</h1>
        <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
          Manage customer support , requests, and issues.
        </p>
      </div>

      <div className="space-y-3 flex-1 h-[82vh] overflow-y-auto no-scrollbar mb-4">
        {/* STATS + ACTIONS + CHARGER STATUS */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch  w-full">
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-3 h-full">
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.4rem]">
              {userStats.map((s, i) => {
                const TopIcon = s.topIcon;
                const BottomIcon = s.bottomIcon;

                const isPositive = s.trendType === "positive";
                const isWarning = s.trendType === "warning";

                return (
                  <div
                    key={i}
                    className="font-inter relative bg-white rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* TOP ICON */}
                    <div className="flex gap-4 items-center mb-2">
                      <TopIcon
                        className={isWarning ? "text-[#facc15]" : "text-[#38EF0A]"}
                        size={30}
                      />
                      <p className="text-[16px] text-[#364153] font-medium">
                        {s.title}
                      </p>
                    </div>

                    {/* VALUE */}
                    <h2 className="text-[20px] font-semibold text-[#171717] border-t-[1.5px] border-[#DFDFDF] pt-2">
                      {s.value}
                    </h2>

                    {/* TREND */}
                    <div className="flex flex-col gap-1 mt-2">
                      <span
                        className={`text-[14px] flex items-center gap-2 ${isWarning
                          ? "text-[#f97316]"
                          : isPositive
                            ? "text-[#25BB00]"
                            : "text-[#25BB00]"
                          }`}
                      >
                        <TrendingUp size={15} />
                        {s.trend}
                      </span>

                      <span className="text-[#757575] text-[10px] -mt-1">
                        {s.subText}
                      </span>
                    </div>

                    {/* BOTTOM ICON */}
                    <div
                      className={`absolute -bottom-6 -right-4 w-24 h-24 rounded-full flex items-center justify-center ${isWarning
                        ? "bg-[#facc1526]"
                        : "bg-[#2CDE0026]"
                        }`}
                    >
                      <BottomIcon
                        className={isWarning ? "text-[#facc15]" : "text-[#38EF0A]"}
                        size={40}
                      />
                    </div>
                  </div>
                );
              })}
            </div>


            {/* ACTION CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.4rem] mt-3">
              {actionCards.map((a, i) => {
                const TopIcon = a.icon;

                return (
                  <div
                    key={i}
                    className="font-inter bg-white p-2 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
                  >
                    {/* TOP ICON + TITLE */}
                    <div className="flex items-center gap-1 mb-2">
                      <TopIcon size={17} className="text-[#2CDE00]" />
                      <h3 className="text-[13px] font-semibold text-[#364153]">
                        {a.title}
                      </h3>
                    </div>

                    {/* SUB TEXT */}
                    <div className="font-medium text-[#333333] mb-3 border-t-[1.5px] border-[#DFDFDF] pt-1 text-[11px]">
                      {a.sub}
                    </div>

                   {/* BUTTON */}
                    <button className="flex items-center justify-center gap-1 w-[130px] py-1.5 text-[12px] font-semibold bg-[#38EF0A] text-white rounded-md">
                      {a.btn}
                      <ChevronRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

          {/* CHARGER STATUS */}
          <div className="w-full lg:w-[190px]  bg-white rounded-xl shadow px-3 py-2 h-full flex flex-col">
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
        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-inter text-[24px] font-semibold text-[#364153] mb-3">Recent Activity</h3>

          <div className="max-h-[260px] overflow-y-auto no-scrollbar space-y-2 -mx-2">
            {activities.map((a) => {
              const config = getActivityConfig(a.action);

              return (
                <div
                  key={a.id}
                  className="group hover:bg-green-50 border border-[#DEDEDE] rounded-[4px] flex md:flex-row flex-col items-start md:items-center justify-between py-4 px-4 transition-all duration-200"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4 pl-0  ">
                    <div
                      className={`w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-200 ${config.className}`}
                    >
                      {config.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-[16px] text-[#364153]">
                        {a.name}
                      </p>

                      <p className="text-[14px] text-[#6B7280]">
                        {a.action.charAt(0).toUpperCase() + a.action.slice(1)}{" "}
                        <span className="text-[#29B605] font-medium">
                          {a.ticketId}
                        </span>
                      </p>

                      <p className="text-[13px] text-[#9CA3AF]">
                        {a.description}
                      </p>
                       <div className="md:hidden">
                    <p className="text-[14px] text-[#6B7280]">
                      {a.timeAgo}
                    </p>
                    <p className="text-[13px] text-[#9CA3AF]">
                      {a.date}
                    </p>
                  </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="hidden md:block  text-right">
                    <p className="text-[14px] text-[#6B7280]">
                      {a.timeAgo}
                    </p>
                    <p className="text-[13px] text-[#9CA3AF]">
                      {a.date}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>


        {/* search & filter functionality */}
        <div className="bg-white p-2 md:p-4 w-full
         desktop:w-[984px]  rounded-[16px] ">
          <div className="flex gap-2 md:gap-4 mb-6 items-center md:flex-row flex flex-col">
            <div className="relative flex-1  w-full">
              <Search className="absolute md:left-3 left-1 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Ticket ID, User or Category..."
                className="w-full md:pl-9 pl-7 pr-4 py-3 rounded-[10px] border border-[#B7B7B7] shadow-[0px_2px_6.3px_0px_#00000026] hover:ring-[0.8px] hover:ring-[#38EF0A] focus:outline-none focus:ring-2 focus:ring-green-200"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
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
                  <div className="absolute right-0 mt-2 w-48 p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-20">
                    {["All Status", "Open", "In Progress", "Resolved"].map((status) => (
                      <button
                        key={status}
                        className={`font-inter text-[18px] w-full rounded-[10px] text-left px-4 py-3 hover:bg-[#e1ffd9] flex items-center justify-between ${statusFilter === status
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
              <div className="relative">
                <button
                  onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
                  className="flex items-center gap-4 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] desktop:w-[200px] w-full  justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700 font-inter text-[20px]">
                      {priorityFilter}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${isPriorityDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isPriorityDropdownOpen && (
                  <div className="absolute right-0 mt-2 md:w-48 w-40  p-2 bg-white space-y-2 border border-gray-200 rounded-xl shadow-xl z-[999] overflow-hidden shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">

                    {["All Priority", "High", "Medium", "Low"].map((type) => (
                      <button
                        key={type}
                        className={`font-inter text-[20px]  w-full rounded-[10px] text-left px-4 py-3 hover:bg-[#e1ffd9] flex items-center justify-between ${priorityFilter === type
                          ? "bg-[#e1ffd9] font-medium"
                          : "text-black"
                          }`}
                        onClick={() => {
                          setPriorityFilter(type);
                          setIsPriorityDropdownOpen(false);
                        }}
                      >
                        {type}
                        {priorityFilter === type && <IoCheckmarkSharp size={20} />}
                      </button>
                    ))}

                  </div>
                )}
              </div>




            </div>
          </div>

          {/* TABLE CONTAINER */}
          {filteredTickets.length === 0 ? (
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
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px]">
                        User Name
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Ticket ID
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px]">
                        Description
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Category
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Priority
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Date
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Time
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Screenshot
                      </th>
                      <th className="px-6 py-4 text-[#364153] font-medium text-[20px] text-center">
                        Chat
                      </th>
                    </tr>
                  </thead>



                  <tbody className="font-arial divide-y-[1.3px] divide-gray-100">
                    {filteredTickets.map((ticket) => {
                      const statusBadge = getStatusBadgeConfig(ticket.status);
                      const priorityBadge = getPriorityBadgeConfig(ticket.priority);

                      return (
                        <tr key={ticket.id} className="hover:bg-[#f4fff1] transition-colors">
                          {/* User */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={ticket.imageUrl}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <div className="text-gray-800 text-[14px]">{ticket.userName}</div>
                                <div className="text-[12px] text-gray-400">{ticket.email}</div>
                              </div>
                            </div>
                          </td>

                          {/* Ticket ID */}
                          <td className="px-6 py-4 text-center text-[14px] text-[#364153]">
                            {ticket.ticketId}
                          </td>

                          {/* Description */}
                          <td className="px-6 py-4 text-[14px] text-[#707274]">
                            {ticket.description}
                          </td>

                          {/* Category */}
                          <td className="px-6 py-4 text-center text-[14px] text-[#364153]">
                            {ticket.category}
                          </td>

                          {/* Status Badge */}
                          <td className="px-6 py-4 text-center">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[14px] font-roboto ${statusBadge.className}`}
                            >
                              {statusBadge.icon}
                              {statusBadge.text}
                            </span>
                          </td>

                          {/* Priority Badge */}
                          <td className="px-6 py-4 text-center">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[14px] font-roboto ${priorityBadge.className}`}
                            >
                              {priorityBadge.icon}
                              {priorityBadge.text}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="px-6 py-4 text-center text-[14px] text-[#707274]">
                            {ticket.date}
                          </td>
                          {/* Time*/}
                          <td className="px-6 py-4 text-center text-[14px] text-[#707274]">
                            {ticket.time}
                          </td>
                          {/* Screenshot */}
<td className="px-6 py-4 text-center">
  <button
    onClick={() => {
      setSelectedTicket(ticket);   // store clicked ticket
      setIsScreenshotModalOpen(true); // open modal
    }}
    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
  >
    <IoEye className="w-4 h-4" />
    View
  </button>
</td>
                          {/*Chat */}
                       <td className="px-6 py-4 text-center">
  <button
    onClick={() => {
      setSelectedTicket(ticket);
      setIsChatOpen(true);
    }}
    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
  >
    <BsChatDots className="w-4 h-4" />
    Chat
  </button>
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

    </div >
    <UploadedScreenshotModal
  isOpen={isScreenshotModalOpen}
  onClose={() => {
    setIsScreenshotModalOpen(false);
    setSelectedTicket(null);
  }}
  imageSrc={selectedTicket?.imageUrl || ""}
  uploadedBy={selectedTicket?.userName || ""}
  uploadedAt={selectedTicket?.time || ""}
  ticketId={selectedTicket?.ticketId || ""}
/>
<ChatModal
  open={isChatOpen}
  onClose={() => {
    setIsChatOpen(false);
    setSelectedTicket(null);
  }}
  ticketId={selectedTicket?.ticketId || ""}
  customerName={selectedTicket?.userName || ""}
  email={selectedTicket?.email || ""}
  description={selectedTicket?.description || ""}
  category={selectedTicket?.category || ""}
  status={selectedTicket?.status || ""}
  priority={selectedTicket?.priority || ""}
  customerAvatar={selectedTicket?.imageUrl || ""}
  messages={selectedTicket?.messages || []}
/>
    </>
  );
}