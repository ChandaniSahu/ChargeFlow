"use client";

import { useState } from "react";
import { X, CalendarDays } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    frequency: string;
    startDate: string;
    endDate: string;
  }) => void;
};

export default function SetAutomationModal({
  open,
  onClose,
  onSubmit,
}: Props) {
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ frequency, startDate, endDate });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-5">Set Automation</h2>

        {/* Frequency */}
        <label className="text-sm font-medium text-gray-600">
          Frequency:
        </label>

        <div className="flex gap-6 mt-3 mb-5">

          {["Daily", "Weekly", "Monthly"].map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value={item}
                checked={frequency === item}
                onChange={() => setFrequency(item)}
              />
              {item}
            </label>
          ))}

        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-3 mb-6">

          <div>
            <label className="text-sm text-gray-600">Start Date:</label>

            <div className="relative mt-1">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />

              {/* <CalendarDays
                size={18}
                className="absolute right-3 top-2.5 text-gray-500"
              /> */}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">End Date:</label>

            <div className="relative mt-1">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />

              {/* <CalendarDays
                size={18}
                className="absolute right-3 top-2.5 text-gray-500"
              /> */}
            </div>
          </div>

        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium"
        >
          Create Automation
        </button>
      </div>
    </div>
  );
}