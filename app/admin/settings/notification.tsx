"use client";

import { useState } from "react";
import data from "../data/admin-data.json";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import PauseAutomationModal from "./PauseNotificationModal";


import {
  Bell,
  Send,
  TriangleAlert,
  XCircle,
  Plus,
  Pencil,
  Pause,
  AlertTriangle,
  X,
} from "lucide-react";
import CreateNotification from "./createnotification";

export default function Notification() {
const searchParams = useSearchParams();

const view = searchParams.get("view");

const router = useRouter(); 

  const [adminNotifications, setAdminNotifications] = useState(
    data.settings.notification.adminNotifications
  );

  const [automations, setAutomations] = useState(
    data.settings.notification.activeAutomations
  );

  // const [selectedAutomation, setSelectedAutomation] = useState(null);

  const [recent] = useState(data.settings.notification.recentNotifications);

  const [pauseDialog, setPauseDialog] = useState(false);

  function getScheduleText(scheduleType: string) {
  switch (scheduleType) {
    case "weekly":
      return "Every Monday";

    case "monthly":
      return "1st Day of Month";

    default:
      return "";
  }
}

  const handleToggleChange = (field: string) => {
  setAdminNotifications((prev) => ({
    ...prev,
    [field]: !prev[field as keyof typeof prev],
  }));
};


  const pauseAutomation = (id: number) => {
    setAutomations((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isPaused: !item.isPaused }
          : item
      )
    );

    setPauseDialog(null);
  };


  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);

    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };


  const formatTime = (timestamp: number) => {
    const d = new Date(timestamp);

    return d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getNotificationIcon = (status: string) => {
  switch (status) {
    case "sent":
      return {
        icon: <Bell size={20} className="group-hover:text-white" />,
        className:
          "bg-[#dcfce7] text-[#16a34a] group-hover:bg-[#16a34a]",
      };

    case "warning":
      return {
        icon: <AlertTriangle size={20} className="group-hover:text-white" />,
        className:
          "bg-[#fff0e5] text-[#ff8000] group-hover:bg-[#ff8000]",
      };

    case "failed":
      return {
        icon: <X size={20} className="group-hover:text-white" />,
        className:
          "bg-[#ffe4e6] text-[#fb2c2f] group-hover:bg-[#fb2c2f]",
      };

    default:
      return {
        icon: <Send size={20} className="group-hover:text-white" />,
        className:
          "bg-[#f2f2f2] text-[#757575] group-hover:bg-[#757575]",
      };
  }
};

const getNotificationStatus = (status: string) => {
  switch (status) {
    case "sent":
      return {
        icon: <Send size={14} className="group-hover:text-white" />,
        className:
          "bg-[#dcfce7] text-[#16a34a] group-hover:bg-[#16a34a]",
      };

    case "warning":
      return {
        icon: <AlertTriangle size={14} className="group-hover:text-white" />,
        className:
          "bg-[#fff0e5] text-[#ff8000] group-hover:bg-[#ff8000]",
      };

    case "failed":
      return {
        icon: <X size={14} className="group-hover:text-white" />,
        className:
          "bg-[#ffe4e6] text-[#fb2c2f] group-hover:bg-[#fb2c2f]",
      };

    default:
      return {
        icon: <Send size={14} className="group-hover:text-white" />,
        className:
          "bg-[#f2f2f2] text-[#757575] group-hover:bg-[#757575]",
      };
  }
};

  if (view === "create") {
    return <CreateNotification />;
  }
  
if (view === "edit") {
  return <CreateNotification />;
}

  return (
    <>
    <div className="font-inter space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <h2 className="text-[24px] font-medium">
            Notification Settings
          </h2>
          <p className="text-[18px] text-[#7C7C7C]">
            Configure email and push notifications
          </p>
        </div>

        <button 
            onClick={() =>
    router.push("/admin/settings?type=notification&view=create")
  }
        className="flex items-center gap-2 bg-[#30EF0A] hover:bg-green-500 cursor-pointer text-white px-6 py-3 rounded-[10px] text-[20px] font-medium">
          <Plus size={22} />
          Create New Notification
        </button>
      </div>

      {/* Active Automations */}
      <div className="font-inter">

        <h3 className="text-[24px] font-medium mb-4">
          Notification
        </h3>

        <div className="border border-[#C9C8C8] rounded-[16px] p-6 bg-white">

          <h4 className="text-[21px] font-medium mb-4 text-[#364153]">
            Active Automations
          </h4>

          <div className="space-y-4">

            {automations.map((item) =>{
              const scheduleText = getScheduleText(item.scheduleType);
              return(

              <div
                key={item.id}
                className="border border-[#C9C8C8] rounded-[12px] py-2  px-4 flex justify-between items-center flex-wrap gap-4"
              >

                <div>

                  <h4 className="flex gap-1 text-[16px] font-medium text-[#364153]">
                    {item.title}<span>-</span>{item.scheduleType && <span>{item.scheduleType.charAt(0).toUpperCase() + item.scheduleType.slice(1)}</span>}
                  </h4>

                  <p className="text-[16px] text-[#7C7C7C]">
                    Start: <span className="text-[14px] text-[#364153]">{formatDate(item.start)}</span> &nbsp;
                    End: <span className="text-[14px] text-[#364153]">{formatDate(item.end)}</span>
                  </p>

                  <p className="flex gap-4 text-[16px] text-[#7C7C7C]">
                    <span>Time: <span className="text-[14px] text-[#364153]">{formatTime(item.time)}</span></span>
                                   {scheduleText !== "" &&      <span>Day: <span className="text-[14px] text-[#364153]">{scheduleText.charAt(0).toUpperCase() + scheduleText.slice(1)}</span></span>}
                  </p>
                  
                </div>


                <div className="flex flex-col items-end gap-3 font-medium text-[10px]">

                  <span className="flex bg-[#30EF0A] text-white px-4 py-1 rounded-full ">
                    ● Active
                  </span>
                  
                  <div className="flex items-center gap-2">
                  <button 
                  onClick={() =>{
    router.push(`/admin/settings?type=notification&view=edit&id=${item.id}`)
    setSelectedAutomation(item);
  }}
                  className="border border-[#C9C8C8] px-2 py-1 rounded-[8px] flex gap-2 items-center">
                    <Pencil size={10} /> Edit
                  </button>

                  <button
                    onClick={() => setPauseDialog(item.id)}
                    className="border border-[#C9C8C8] px-2 py-1 rounded-[8px] flex gap-2 items-center"
                  >
                    <Pause size={10} /> Pause
                  </button>
                 </div>
                </div>

              </div>

            )})}

          </div>

        </div>

      </div>

      {/* Recent Notifications */}
      <div className="border border-[#C9C8C8] rounded-[16px] p-6 bg-white">

        <h3 className="text-[22px] font-medium mb-4">
          Recent Notifications
        </h3>

        <div className="space-y-4">

          {recent.map((item) => {

            const iconData = getNotificationIcon(item.status);
const statusData = getNotificationStatus(item.status);


            return (

              <div
                key={item.id}
                className="border border-[#C9C8C8] rounded-[14px] p-4 flex justify-between items-center"
              >

                <div className="flex gap-4 items-center">

                  <div className={`p-2 rounded-full ${iconData.className}`}>
  {iconData.icon}
</div>

                  <div>
                    <h4 className="text-[16px] font-medium text-[#364153]">
                      {item.title}
                    </h4>

                    <p className="text-[14px] text-[#7C7C7C]">
                      {item.subtitle}
                    </p>
                  </div>

                </div>


                <div className="text-right">
                  <p className="text-[14px] text-[#7C7C7C]">
                    {formatTime(item.date)}
                  </p>

                  <p className="text-[12px] text-[#7C7C7C]">
                    {formatDate(item.date)}
                  </p>
                </div>


               <div className={`flex items-center gap-1 px-3 py-1 text-[12px] rounded-md ${statusData.className}`}>
  {statusData.icon}
  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
</div>

              </div>

            );
          })}
        </div>
      </div>





      {/* Admin Notifications */}
      <div>
        <h3 className="flex items-center gap-2 text-[24px] font-medium">
          <Bell size={22} /> Admin Notifications
        </h3>

        <div className=" mt-3">

          <Toggle
  title="New Station Registration"
  subtitle="Alert for new station approval requests."
  enabled={adminNotifications.newStationRegistration}
  onToggle={() => handleToggleChange("newStationRegistration")}
/>

<Toggle
  title="High Priority Support Tickets"
  subtitle="Receive alerts for urgent issues"
  enabled={adminNotifications.highPrioritySupportTickets}
  onToggle={() => handleToggleChange("highPrioritySupportTickets")}
/>

<Toggle
  title="Daily Revenue Summary"
  subtitle="Receive daily earnings overview"
  enabled={adminNotifications.dailyRevenueSummary}
  onToggle={() => handleToggleChange("dailyRevenueSummary")}
/>

<Toggle
  title="Charger Offline Alerts"
  subtitle="Get notified when any charger becomes offline or inactive"
  enabled={adminNotifications.chargerOfflineAlerts}
  onToggle={() => handleToggleChange("chargerOfflineAlerts")}
/>

        </div>
      </div>

      {/* Pause Dialog */}
      {pauseDialog && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">

          <div className="bg-white rounded-[16px] p-6 w-[380px]">

            <h3 className="text-[24px] font-medium">
              Pause Automation?
            </h3>

            <p className="text-[18px] text-[#7C7C7C] mt-2">
              This automation will stop sending notification
              until you activate it again.
            </p>

            <div className="flex justify-end gap-4 mt-6">

              <button
                onClick={() => setPauseDialog(null)}
                className="border border-[#C9C8C8] px-6 py-2 rounded-[10px]"
              >
                Cancel
              </button>

              <button
                onClick={() => pauseAutomation(pauseDialog)}
                className="bg-[#30EF0A] text-white px-6 py-2 rounded-[10px]"
              >
                Pause
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
    </>
  );
}

function Toggle({ title, subtitle, enabled, onToggle }: any) {
  return (
    <div className="font-inter flex items-center justify-between py-2">
      <div>
        <h4 className="text-[18px] font-medium text-[#364153]">
          {title}
        </h4>
        <p className="text-[16px] text-[#7C7C7C]">
          {subtitle}
        </p>
      </div>

      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition ${
          enabled ? "bg-[#30EF0A]" : "bg-[#D0BCFF]"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </div>
    </div>
  );
}