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
  IndianRupee,
  ArrowRightLeft,
  RefreshCcw,
  BarChart3,
  ChevronRight,
  Smartphone,
  Landmark,
  RotateCcw,
  X,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid, Area } from "recharts";
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
    topIcon: IndianRupee,          // ₹ icon
    title: "Total Revenue",
    amount: 1245600,
    growthValue: 12,
    bottomIcon: TrendingUp,
  },
  {
    topIcon: TrendingUp,           // graph arrow
    title: "Admin Commission",
    amount: 280500,
    growthValue: 15,
    bottomIcon: TrendingUp,
  },
  {
    topIcon: Users,                // group icon
    title: "Total Host",
    amount: 965200,
    growthValue: 10,
    bottomIcon: Users,
  },
  {
    topIcon: Wallet,               // wallet icon
    title: "Total Revenue",
    amount: 540000,
    growthValue: 8,
    bottomIcon: Wallet,
  },
];


export const actionCards = [
  {
    icon: ArrowRightLeft,
    title: "Transaction History",
    value: null, // no numeric value in this UI
    sub: "View all payment transaction",
    btn: "View Details",
  },
  {
    icon: Wallet,
    title: "Payout Requests",
    value: null,
    sub: "Manage pending payout requests",
    btn: "Manage Requests",
  },
  {
    icon: RefreshCcw,
    title: "Refund Management",
    value: null,
    sub: "Process and track refunds",
    btn: "Handle Refunds",
  },
  {
    icon: BarChart3,
    title: "Revenue Reports",
    value: null,
    sub: "View Detailed Revenue Reports",
    btn: "View Reports",
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



const transactionData = [
  {
    id: 1,
    userName: "Priya Singh",
    email: "priyasingh@gmail.com",
    customerId: "CUST-4521",
    transactionId: "TXN-2025-0456",
    bookingId: "#BK001233",
    charger: "Premium AC Charger",
    amount: 3750,
    platformFees: 562.5,
    gst: 675,
    netToHost: 2325,
    date: "31/01/2025",
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    otpStatus: "Verified",
    chargerStatus: "Success",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 2,
    userName: "Rajesh Kumar",
    email: "rajeshkumar@gmail.com",
    customerId: "CUST-3892",
    transactionId: "TXN-2025-0455",
    bookingId: "#BK001238",
    charger: "Tesla Supercharger #42",
    amount: 2700,
    platformFees: 405,
    gst: 486,
    netToHost: 1674,
    date: "31/01/2025",
    paymentMethod: "Credit Card",
    paymentStatus: "Completed",
    otpStatus: "Verified",
    chargerStatus: "Success",
    imageUrl: "/images/user2.jpg",
  },
  {
    id: 3,
    userName: "Amit Patel",
    email: "amitpatel@gmail.com",
    customerId: "CUST-2156",
    transactionId: "TXN-2025-0454",
    bookingId: "#BK001234",
    charger: "Downtown Hub - A",
    amount: 2350,
    platformFees: 352.5,
    gst: 423,
    netToHost: 1457,
    date: "30/01/2025",
    paymentMethod: "Debit Card",
    paymentStatus: "Pending",
    otpStatus: "Verified",
    chargerStatus: "Pending",
    imageUrl: "/images/user3.jpg",
  },
  {
  id: 4,
  userName: "Neha Gupta",
  email: "nehagupta@gmail.com",
  customerId: "CUST-7834",
  transactionId: "TXN-2025-0453",
  bookingId: "#BK001232",
  charger: "Mike's EV - Charger 2",
  amount: 0,
  platformFees: 0,
  gst: 0,
  netToHost: 0,
  date: "30/01/2025",
  paymentMethod: "UPI",
  paymentStatus: "Refunded",
  otpStatus: "Verified",
  chargerStatus: "Success",
  imageUrl: "/images/user.jpg",
},
{
  id: 5,
  userName: "Vikram Singh",
  email: "vikramsingh@gmail.com",
  customerId: "CUST-5647",
  transactionId: "TXN-2025-0452",
  bookingId: "#BK001231",
  charger: "QuickCharge - Unit 5",
  amount: 4350,
  platformFees: 652.5,
  gst: 783,
  netToHost: 2697,
  date: "30/01/2025",
  paymentMethod: "Net Banking",
  paymentStatus: "Completed",
  otpStatus: "Verified",
  chargerStatus: "Success",
  imageUrl: "/images/user1.jpg",
},
{
  id: 6,
  userName: "Sneha Kapoor",
  email: "snehakapoor@gmail.com",
  customerId: "CUST-9021",
  transactionId: "TXN-2025-0451",
  bookingId: "#BK001230",
  charger: "Premium AC Charger",
  amount: 3150,
  platformFees: 472.5,
  gst: 567,
  netToHost: 2110,
  date: "29/01/2025",
  paymentMethod: "PhonePe",
  paymentStatus: "Completed",
  otpStatus: "Verified",
  chargerStatus: "Success",
  imageUrl: "/images/user2.jpg",
},
{
  id: 7,
  userName: "Rahul Mehta",
  email: "rahulmehta@gmail.com",
  customerId: "CUST-6678",
  transactionId: "TXN-2025-0450",
  bookingId: "#BK001229",
  charger: "Tesla Supercharger #21",
  amount: 1800,
  platformFees: 270,
  gst: 324,
  netToHost: 1206,
  date: "29/01/2025",
  paymentMethod: "Credit Card",
  paymentStatus: "Pending",
  otpStatus: "Verified",
  chargerStatus: "Pending",
  imageUrl: "/images/user3.jpg",
},
{
  id: 8,
  userName: "Arjun Verma",
  email: "arjunverma@gmail.com",
  customerId: "CUST-3456",
  transactionId: "TXN-2025-0449",
  bookingId: "#BK001228",
  charger: "Downtown Hub - B",
  amount: 2950,
  platformFees: 442.5,
  gst: 531,
  netToHost: 1976,
  date: "28/01/2025",
  paymentMethod: "Debit Card",
  paymentStatus: "Completed",
  otpStatus: "Verified",
  chargerStatus: "Success",
  imageUrl: "/images/user2.jpg",
}

];

const getBadgeConfig = (value: string) => {
  const v = value.toLowerCase();

  if (v === "completed" || v === "success" || v === "verified") {
    return {
      text: value,
      className: "bg-[#e1ffd9] text-[#29b605]",
      icon: <CheckCircle size={16} className="text-[#29b605]" />,
    };
  }

  if (v === "pending") {
    return {
      text: value,
      className: "bg-[#f9e8db] text-[#b45309]",
      icon: <Clock size={16} className="text-[#b45309]" />,
    };
  }

  if (v === "refunded") {
    return {
      text: value,
      className: "bg-[#dbeafe] text-[#3b82f6]",
      icon: <RotateCcw size={16} className="text-[#3b82f6]" />,
    };
  }

  if (v === "failed") {
    return {
      text: value,
      className: "bg-[#ffdbd6] text-[#fb2c2f]",
      icon: <RxCross2 size={16} className="text-[#fb2c2f]" />,
    };
  }

  return {
    text: value,
    className: "",
    icon: null,
  };
};

const getPhoneIcon = (method: string) => {
  const m = method.toLowerCase();

  if (m === "upi" || m === "phonepe") {
    return <Smartphone size={16} />;
  }

  if (m.includes("card")) {
    return <CreditCard size={16} />;
  }

  if (m === "net banking") {
    return <Landmark size={16} />;
  }

  return null;
};



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
  const [showFilter, setShowFilter] = useState(true);
  const [filterPaymentStatus, setFilterPaymentStatus] = useState<string[]>([]);
const [filterChargerStatus, setFilterChargerStatus] = useState<string[]>([]);

// Date filter states
  const [dateFilter, setDateFilter] = useState<'today' | 'week' | 'month' | 'custom' | null>(null);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  // Date filter handler
  const handleDateFilterChange = (filter: 'today' | 'week' | 'month') => {
    setDateFilter(filter);
    const today = new Date();
    let from = new Date();

    if (filter === 'today') {
      from = today;
    } else if (filter === 'week') {
      from.setDate(today.getDate() - 7);
    } else if (filter === 'month') {
      from.setMonth(today.getMonth() - 1);
    }

    setDateRange({
      from: from.toISOString().split('T')[0],
      to: today.toISOString().split('T')[0],
    });
  };

  const handleCustomDateChange = (field: 'from' | 'to', value: string) => {
    setDateFilter('custom');
    setDateRange({
      ...dateRange,
      [field]: value,
    });
  };

  // Helper function to check if date is within range
  const isDateInRange = (itemDate: string) => {
    if (!dateRange.from || !dateRange.to) return true;
    
    const date = new Date(itemDate);
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);
    
    // Set time to start of day for accurate comparison
    date.setHours(0, 0, 0, 0);
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 999);
    
    return date >= fromDate && date <= toDate;
  };

  // Updated filter function with date filtering
  const filteredTransactions = transactionData.filter((item) => {
    // Search filter
    const matchesSearch = 
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());

    // Payment status filter
    const matchesPayment =
      filterPaymentStatus.length === 0 ||
      filterPaymentStatus.includes(item.paymentStatus);

    // Charger status filter
    const matchesCharger =
      filterChargerStatus.length === 0 ||
      filterChargerStatus.includes(item.chargerStatus);

    // Date range filter
    const matchesDate = isDateInRange(item.date);

    return matchesSearch && matchesPayment && matchesCharger && matchesDate;
  });

  const handleClearAll = () => {
    setFilterPaymentStatus([]);
    setFilterChargerStatus([]);
    setDateFilter(null);
    setDateRange({ from: '', to: '' });
  };


  return (
    <div className="mt-2 mx-2 desktop:mx-0 desktop:mr-2 flex flex-col desktop:w-[1010px]">
      {/* HEADER */}
      <div className="desktop:text-left text-center">
        <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 mb-1 text-[30px] text-white">Payments & Revenue</h1>
        <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-3 -mt-2 leading-[19px] desktop:leading-tight">
          Track revenue, commissions, and payouts
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
                      {s.amount.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
                    </h2>

                    {/* GROWTH */}
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="font-regular  text-[#25BB00] text-[14px] flex items-center gap-2">
                        <TrendingUp size={15} />
                        {'+'}{s.growthValue}%
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
    const Icon = a.icon;

    return (
      <div
        key={i}
        className="font-inter bg-white px-3 py-2 rounded-xl shadow-md border border-gray-100"
      >
        {/* TOP ICON + TITLE */}
        <div className="flex items-center gap-2 mb-2">
          <Icon size={18} className="text-[#2CDE00]" />
          <h3 className="text-[13px] font-semibold text-[#364153]">
            {a.title}
          </h3>
        </div>

        {/* VALUE + SUB */}
        <div className="flex items-center gap-1 border-t-[1.5px] border-[#DFDFDF] pt-1 mb-1">
          <div className="text-[20px] font-bold text-[#333333]">
            {a.title === "Upcoming Booking" ? `₹${a.value}` : a.value}
          </div>
          <div className="text-[12px] text-[#666666]">
            {a.sub}
          </div>
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
                      <ResponsiveContainer width="100%" height={260}>
             <LineChart
               data={revenueData}
               margin={{ top: 30, right: 20, left: -10, bottom: 0 }}
             >
               <defs>
                 {/* Area Gradient */}
                 <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#22c55e" stopOpacity={0.45} />
                   <stop offset="80%" stopColor="#22c55e" stopOpacity={0.05} />
                 </linearGradient>
               </defs>
           
               {/* Vertical dotted lines only */}
               <CartesianGrid
                 strokeDasharray="4 4"
                 vertical={true}
                 horizontal={false}
                 stroke="#E5E7EB"
               />
           
               <XAxis
                 dataKey="month"
                 axisLine={false}
                 tickLine={false}
                 tick={{ fill: "#6B7280", fontSize: 13 }}
               />
           
               <YAxis
                 axisLine={false}
                 tickLine={false}
                 tick={{ fill: "#9CA3AF", fontSize: 12 }}
                 tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`}
               />
           
               <Tooltip
                 cursor={{ stroke: "#D1D5DB", strokeDasharray: "4 4" }}
                 contentStyle={{
                   backgroundColor: "#fff",
                   borderRadius: "10px",
                   border: "1px solid #E5E7EB",
                   fontSize: "13px",
                 }}
                 formatter={(value: number) =>
                   `₹${(value / 100000).toFixed(1)}L`
                 }
               />
           
               {/* AREA */}
               <Area
                 type="monotone"
                 dataKey="revenue"
                 stroke="none"
                 fill="url(#greenGradient)"
               />
           
               {/* Soft shadow line (background glow effect) */}
               <Line
                 type="monotone"
                 dataKey="revenue"
                 stroke="#22c55e"
                 strokeWidth={8}
                 dot={false}
                 opacity={0.15}
               />
           
               {/* Main sharp line */}
               <Line
                 type="monotone"
                 dataKey="revenue"
                 stroke="#16a34a"
                 strokeWidth={3}
                 dot={{
                   r: 7,
                   stroke: "#16a34a",
                   strokeWidth: 3,
                   fill: "#ffffff",
                 }}
                 activeDot={{
                   r: 9,
                   stroke: "#16a34a",
                   strokeWidth: 3,
                   fill: "#ffffff",
                 }}
               />
             </LineChart>
           </ResponsiveContainer>
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
        tablat:w-[750px]
         desktop:w-[973px]  rounded-[16px] ">
          <div className="flex gap-2 md:gap-4 mb-6 items-center ">
            <div className="relative flex-1 w-full">
              <Search className="absolute md:left-3 left-1 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full md:pl-9 pl-7 pr-4 py-3 rounded-[10px] border border-[#B7B7B7] shadow-[0px_2px_6.3px_0px_#00000026] hover:ring-[0.8px] hover:ring-[#38EF0A] focus:outline-none focus:ring-2 focus:ring-green-200"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                 onClick={() => setShowFilter(true)}
                className="flex items-center gap-1 md:gap-4  md:px-4 px-1 py-2 md:py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-[0.8px] hover:ring-[#38EF0A] min-w-[70px] md:min-w-[140px] justify-between"
              >
                <div className="flex items-center md:gap-2 gap-1">
                  <Filter size={18} className="text-gray-500" />
                  <span className="font-medium text-gray-700 font-inter text-[20px]">
                    Filter
                  </span>

                </div>
                < ChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                {/* <span >▼</span> */}
              </button>

{showFilter && (
                <div className="absolute top-10 right-0 flex justify-end z-[999]">
                  <div className="w-[273px] h-[507px] bg-white h-full overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 pb-4">
                      <h2 className="font-inter text-[20px] font-semibold">Filter</h2>
                      <X
                        onClick={() => setShowFilter(false)}
                        className="cursor-pointer w-6 h-6"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="px-4 space-y-6">
                      {/* Date Range Section */}
                      <div>
                        <h3 className="text-[15px] font-inter font-medium mb-2 text-[#364153]">Date Range</h3>
                        
                        {/* Radio buttons */}
                        <div className="space-y-1 mb-3 font-roboto font-medium text-[12px] text-[#757575]">
                          <label className="flex items-center gap-3 cursor-pointer ">
                            <input
                              type="radio"
                              name="dateRange"
                              checked={dateFilter === 'today'}
                              onChange={() => handleDateFilterChange('today')}
                              className="w-3 h-3 cursor-pointer text-[#757575] accent-gray-400"
                            />
                            Today
                          </label>

                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="dateRange"
                              checked={dateFilter === 'week'}
                              onChange={() => handleDateFilterChange('week')}
                              className="w-3 h-3 cursor-pointer accent-gray-400"
                            />
                            This Week
                          </label>

                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="dateRange"
                              checked={dateFilter === 'month'}
                              onChange={() => handleDateFilterChange('month')}
                              className="w-3 h-3 cursor-pointer accent-gray-400"
                            />
                            This Month
                          </label>
                        </div>

                        {/* Date pickers */}
                        <div className="flex items-center gap-1 font-roboto font-medium text-[11px] text-[#757575]">
                          <div className="flex-1 flex items-center gap-2">
                            <label className="mb-1 block">From</label>
                            <div className="relative">
                              <input
                                type="date"
                                value={dateRange.from}
                                onChange={(e) => handleCustomDateChange('from', e.target.value)}
                                className="w-[90px] px-1 py-1 border border-gray-300 rounded font-roboto font-medium text-[10px] text-[#757575]"
                              />
                            </div>
                          </div>

                          <div className="flex-1 flex items-center gap-2">
                            <label className="mb-1 block">To</label>
                            <div className="relative">
                              <input
                                type="date"
                                value={dateRange.to}
                                onChange={(e) => handleCustomDateChange('to', e.target.value)}
                                className="w-[90px] px-1 py-1 border border-gray-300 rounded font-roboto font-medium text-[10px] text-[#757575]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Status Section */}
                      <div>
                        <h3 className="text-[15px] font-inter font-medium mb-2 text-[#364153]">Payment Status</h3>
                        <div className="space-y-1">
                          {["All","Pending", "Completed", "Refunded", "Failed"].map((status) => (
                            <label key={status} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filterPaymentStatus.includes(status)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFilterPaymentStatus([...filterPaymentStatus, status]);
                                  } else {
                                    setFilterPaymentStatus(
                                      filterPaymentStatus.filter((s) => s !== status)
                                    );
                                  }
                                }}
                                className="w-3 h-3 cursor-pointer accent-gray-400"
                              />
                              <span className="font-roboto font-medium text-[12px] text-[#757575]">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Chargers Status Section */}
                      <div className="pb-6">
                        <h3 className="text-[15px] font-inter font-medium mb-2 text-[#364153]">Chargers Status</h3>
                        <div className="space-y-1">
                          {["All" ,"Success", "Pending", "Failed"].map((status) => (
                            <label key={status} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filterChargerStatus.includes(status)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFilterChargerStatus([...filterChargerStatus, status]);
                                  } else {
                                    setFilterChargerStatus(
                                      filterChargerStatus.filter((s) => s !== status)
                                    );
                                  }
                                }}
                                className="w-3 h-3 cursor-pointer accent-gray-400"
                              />
                              <span className="font-roboto font-medium text-[12px] text-[#757575]">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex gap-3 px-6 py-4 border-t bg-white sticky bottom-0">
                      <button
                        onClick={handleClearAll}
                        className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                      >
                        Clear All
                      </button>

                      <button
                        onClick={() => setShowFilter(false)}
                        className="flex-1 px-6 py-3 bg-[#38EF0A] text-white rounded-lg font-medium hover:bg-[#2dd909] transition-colors"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* TABLE CONTAINER */}
          {filteredTransactions.length === 0 ? (
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
    <th className="px-6 py-4 text-[#364153] text-[18px]">User Name</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Customer ID</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Transaction ID</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Booking ID</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Chargers</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Amount</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Platform Fees</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">GST (18%)</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Net To Host</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Payment Method</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Payment Status</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">OTP Status</th>
    <th className="px-6 py-4 text-center text-[#364153] text-[18px]">Chargers Status</th>
  </tr>
</thead>



<tbody className="font-arial divide-y-[1.3px] divide-gray-100">
  {filteredTransactions.map((item) => {

    const payment = getBadgeConfig(item.paymentStatus);
    const otp = getBadgeConfig(item.otpStatus);
    const charger = getBadgeConfig(item.chargerStatus);

    return (
      <tr key={item.id} className="hover:bg-[#F9FFF5] text-gray-700 transition-colors">

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

        {/* CUSTOMER ID */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.customerId}
        </td>

        {/* TRANSACTION ID */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.transactionId}
        </td>

        {/* BOOKING ID */}
        <td className="px-6 py-4 text-center text-[14px] text-[#1877F2] font-medium">
          {item.bookingId}
        </td>

        {/* CHARGER */}
        <td className="px-6 py-4 text-center text-[14px]">
          {item.charger}
        </td>

        {/* AMOUNT */}
        <td className="px-6 py-4 text-center text-[14px] font-medium">
          ₹{item.amount.toLocaleString()}
        </td>

        {/* PLATFORM FEES */}
        <td className="px-6 py-4 text-center text-[14px] font-medium">
          ₹{item.platformFees.toLocaleString()}
        </td>

        {/* GST */}
        <td className="px-6 py-4 text-center text-[14px] text-[#FB2C2F] font-medium">
          ₹{item.gst.toLocaleString()}
        </td>

        {/* NET TO HOST */}
        <td className="px-6 py-4 text-center text-[14px] text-[#29B605] font-medium">
          ₹{item.netToHost.toLocaleString()}
        </td>

        {/* PAYMENT METHOD */}
        <td className="px-6 py-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md text-[14px]">
            {getPhoneIcon(item.paymentMethod)}
            {item.paymentMethod}
          </span>
        </td>

        {/* PAYMENT STATUS */}
        <td className="px-6 py-4 text-center">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[14px] ${payment.className}`}>
            {payment.icon}
            {payment.text}
          </span>
        </td>

        {/* OTP STATUS */}
        <td className="px-6 py-4 text-center">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[14px] ${otp.className}`}>
            {otp.icon}
            {otp.text}
          </span>
        </td>

        {/* CHARGER STATUS */}
        <td className="px-6 py-4 text-center">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[14px] ${charger.className}`}>
            {charger.icon}
            {charger.text}
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