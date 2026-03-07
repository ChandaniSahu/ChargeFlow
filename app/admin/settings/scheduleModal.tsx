"use client";

import { useState } from "react";
import { X, CalendarDays, Clock } from "lucide-react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: { date: string; time: string }) => void;
};

export default function ScheduleNotificationModal({
  open,
  onClose,
  onSubmit,
}: Props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ date, time });
    }
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-5">Schedule For Later</h2>

        {/* Date */}
        <label className="text-sm font-medium text-gray-600">
          Select Date:
        </label>

        <div className="relative mt-1 mb-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-[#AAAAAA] rounded-lg px-3 py-2  outline-none"
          />

          {/* <CalendarDays
            className="absolute right-3 top-2.5 text-gray-500"
            size={18}
          /> */}
        </div>

        {/* Time */}
        <label className="text-sm font-medium text-gray-600">
          Select Time:
        </label>

        <div className="relative mt-1 mb-6">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-[#AAAAAA] rounded-lg px-3 py-2  outline-none"
          />

          {/* <Clock
            className="absolute right-3 top-2.5 text-gray-500"
            size={18}
          /> */}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#2CDE00] hover:bg-green-600 text-white py-2.5 rounded-lg font-medium"
        >
          Schedule Notification
        </button>
      </div>
    </div>,document.body
  );
}