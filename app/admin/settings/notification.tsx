"use client";

import { useState } from "react";
import data from "../data/admin-data.json";
import {
  Bell,
  Send,
  TriangleAlert,
  XCircle,
  Plus,
  Pencil,
  Pause,
} from "lucide-react";

export default function Notification() {

  const [adminNotifications, setAdminNotifications] = useState(
    data.settings.notification.adminNotifications
  );

  const [automations, setAutomations] = useState(
    data.settings.notification.activeAutomations
  );

  const [recent] = useState(data.settings.notification.recentNotifications);

  const [pauseDialog, setPauseDialog] = useState<number | null>(null);


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

        <button className="flex items-center gap-2 bg-[#30EF0A] hover:bg-green-500 cursor-pointer text-white px-6 py-3 rounded-[10px] text-[20px] font-medium">
          <Plus size={22} />
          Create New Notification
        </button>
      </div>

      {/* Active Automations */}
      <div className="font-inter">

        <h3 className="text-[22px] font-medium mb-4">
          Notification
        </h3>

        <div className="border border-[#C9C8C8] rounded-[16px] p-6 bg-white">

          <h4 className="text-[22px] font-medium mb-4 text-[#364153]">
            Active Automations
          </h4>

          <div className="space-y-4">

            {automations.map((item) => (

              <div
                key={item.id}
                className="border border-[#C9C8C8] rounded-[12px] p-4 flex justify-between items-center flex-wrap gap-4"
              >

                <div>

                  <h4 className="text-[20px] font-medium text-[#364153]">
                    {item.title}
                  </h4>

                  <p className="text-[18px] text-[#7C7C7C]">
                    Start: <span className="text-[#364153]">{formatDate(item.start)}</span> &nbsp;
                    End: <span className="text-[#364153]">{formatDate(item.end)}</span>
                  </p>

                  <p className="text-[18px] text-[#7C7C7C]">
                    Time: {formatTime(item.time)}{" "}
                    {item.day && `Day: ${item.day}`}
                  </p>

                </div>


                <div className="flex flex-col items-center gap-3">

                  <span className="bg-[#30EF0A] text-white px-4 py-1 rounded-full text-[16px]">
                    ● Active
                  </span>
                  
                  <div className="flex items-center gap-2">
                  <button className="border border-[#C9C8C8] px-2 py-1 rounded-[8px] flex gap-2 items-center">
                    <Pencil size={18} /> Edit
                  </button>

                  <button
                    onClick={() => setPauseDialog(item.id)}
                    className="border border-[#C9C8C8] px-2 py-1 rounded-[8px] flex gap-2 items-center"
                  >
                    <Pause size={18} /> Pause
                  </button>
                 </div>
                </div>

              </div>

            ))}

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

            const statusConfig: any = {
              sent: {
                icon: <Send size={20} className="text-green-600" />,
                label: "Sent",
                bg: "bg-green-100 text-green-700",
              },

              warning: {
                icon: (
                  <TriangleAlert
                    size={20}
                    className="text-orange-500"
                  />
                ),
                label: "Warning",
                bg: "bg-orange-100 text-orange-600",
              },

              failed: {
                icon: (
                  <XCircle size={20} className="text-red-600" />
                ),
                label: "Failed",
                bg: "bg-red-100 text-red-600",
              },
            };

            const cfg = statusConfig[item.status];

            return (

              <div
                key={item.id}
                className="border border-[#C9C8C8] rounded-[14px] p-4 flex justify-between items-center"
              >

                <div className="flex gap-4 items-center">

                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {cfg.icon}
                  </div>

                  <div>
                    <h4 className="text-[18px] font-medium text-[#364153]">
                      {item.title}
                    </h4>

                    <p className="text-[16px] text-[#7C7C7C]">
                      {item.subtitle}
                    </p>
                  </div>

                </div>


                <div className="text-right">
                  <p className="text-[16px] text-[#7C7C7C]">
                    {formatTime(item.date)}
                  </p>

                  <p className="text-[16px] text-[#7C7C7C]">
                    {formatDate(item.date)}
                  </p>
                </div>


                <span
                  className={`px-4 py-2 rounded-[10px] text-[16px] flex items-center gap-2 ${cfg.bg}`}
                >
                  {cfg.icon}
                  {cfg.label}
                </span>

              </div>

            );
          })}
        </div>
      </div>





      {/* Admin Notifications */}
      <div>
        <h3 className="flex items-center gap-2 text-[22px] font-medium">
          <Bell size={22} /> Admin Notifications
        </h3>

        <div className=" mt-4">

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
    <div className="font-inter flex items-center justify-between py-4">
      <div>
        <h4 className="text-[20px] font-medium text-[#364153]">
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