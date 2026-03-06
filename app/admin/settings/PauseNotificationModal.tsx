"use client";

import { Pause } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PauseAutomationModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-[360px] bg-white rounded-md p-6 shadow-lg">

        <h2 className="text-[18px] font-semibold text-gray-800">
          Pause Automation?
        </h2>

        <p className="text-[14px] text-gray-500 mt-2">
          This automation will stop sending notification until you activate it again.
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 text-[14px] border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button className="flex items-center gap-2 px-5 py-2 text-[14px] bg-[#2ED100] text-white rounded-md">
            <Pause size={16} />
            Pause
          </button>
        </div>
      </div>
    </div>
  );
}