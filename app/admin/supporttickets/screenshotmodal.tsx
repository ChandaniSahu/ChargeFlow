"use client";

import Image from "next/image";
import { useRef } from "react";
import { Download, X } from "lucide-react";

interface Props {
  imageSrc: string;
  uploadedBy: string;
  uploadedAt: string;
  ticketId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadedScreenshotModal({
  imageSrc,
  uploadedBy,
  uploadedAt,
  ticketId,
  isOpen,
  onClose,
}: Props) {
    if (!isOpen) return null;
  const imgRef = useRef<HTMLImageElement>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `screenshot-${ticketId || "download"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 backdrop-blur-md">
      <div className="w-[420px] max-w-[95vw] bg-white rounded-[8px] shadow-2xl overflow-hidden flex flex-col px-4">

        {/* Header */}
        <div className="font-inter flex items-center justify-between px-4 -mx-4 py-2 border-b border-[#CFCFD4] bg-gray-50">
          <span className="text-[16px] font-medium text-gray-800">
            Uploaded Screenshot
          </span>

          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              title="Download"
            >
              <Download className="w-5 h-5 text-green-500" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              title="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[190px] flex items-center justify-center py-2 mb-2">
          <Image
            src={imageSrc}
            alt="Uploaded screenshot"
            width={380}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Meta Info */}
        <div className="mb-1 flex flex-col gap-2 text-sm">
          <MetaRow label="Uploaded by:" value={uploadedBy} />
          <MetaRow label="Uploaded at:" value={uploadedAt} />
          <MetaRow label="Ticket ID:" value={ticketId} />
        </div>

      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="font-inter flex gap-2">
      <span className="text-[14px] font-medium text-[#364153]">
        {label}
      </span>
      <span className="text-[12px] text-[#757575]">{value}</span>
    </div>
  );
}