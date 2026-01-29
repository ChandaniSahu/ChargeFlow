import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const stats = [
  { title: "Total Users", value: "12,459", growth: "+12.5%" },
  { title: "Total Hosts", value: "847", growth: "+8.2%" },
  { title: "Active Chargers", value: "3,284", growth: "+12.5%" },
  { title: "Total Revenue", value: "₹78,450", growth: "+12.5%" },
];

const actions = [
  { title: "KYC Verifications", sub: "25 Pending Approvals", btn: "Review Now" },
  { title: "Add New Chargers", sub: "Setup & Configure", btn: "Configure" },
  { title: "Booking Overview", sub: "Upcoming: 40 | Cancelled: 8", btn: "View All" },
  { title: "Payout Transactions", sub: "₹12,500 Pending", btn: "Manage Payout" },
  { title: "Support Tickets", sub: "Open: 10 | Resolved: 45", btn: "View Tickets" },
];

export default function Dashboard() {
  return (
    <div className=" my-4 mr-4 overflow-y-auto no-scrollbar">
      <h1 className=" font-inter font-semibold text-[36px] text-white leading-[100%]
    tracking-[0%] capitalize mb-1">Dashboard</h1>
       <p className="font-arial font-[400] text-[20px] text-white leading-[100%] tracking-[0%] mb-3">Welcome back! Here's what's happening with ChargeFlow today.</p>
        <div className="space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">{s.title}</p>
                  <h2 className="text-2xl font-bold">{s.value}</h2>
                  <p className="text-green-500 text-xs mt-1">{s.growth} vs last month</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full" />
              </div>
            ))}
          </div>

          {/* ACTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {actions.map((a, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-sm">{a.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{a.sub}</p>
                <button className="mt-3 px-4 py-2 text-xs bg-green-500 text-white rounded-lg">
                  {a.btn}
                </button>
              </div>
            ))}
          </div>

          {/* CHARTS + STATUS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Revenue Graph */}
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-lg p-4">
              <h3 className="font-semibold mb-3">Revenue Trend</h3>
              <div className="h-56 bg-green-50 rounded-xl flex items-center justify-center text-gray-400">
                Graph Placeholder
              </div>
            </div>

            {/* Booking Status */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <h3 className="font-semibold mb-3">Booking Status</h3>
              <div className="h-56 rounded-full border-[12px] border-green-400 border-r-blue-400 border-b-red-400 mx-auto w-40" />
              <div className="mt-4 text-sm space-y-1">
                <p className="text-green-500">● Completed</p>
                <p className="text-blue-500">● Upcoming</p>
                <p className="text-red-500">● Cancelled</p>
              </div>
            </div>
          </div>

          {/* CHARGER STATUS */}
          <div className="bg-white rounded-2xl shadow-lg p-4 max-w-md">
            <h3 className="font-semibold mb-3">Charger Status</h3>
            <div className="h-40 rounded-full border-[12px] border-green-500 border-r-yellow-400 border-b-red-400 mx-auto w-32" />
            <div className="flex justify-between text-sm mt-4">
              <span className="text-green-500">Active: 220</span>
              <span className="text-red-500">Offline: 45</span>
              <span className="text-yellow-500">Maintenance: 65</span>
            </div>
          </div>
        </div>
    
    </div>
  );
}
