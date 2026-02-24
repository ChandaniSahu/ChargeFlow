"use client";

import { useState } from "react";
import { X, Send, AlertTriangle, CheckCircle } from "lucide-react";
import Image from "next/image";
import { FaArrowDownLong, FaExclamation } from "react-icons/fa6";
import { SiConventionalcommits } from "react-icons/si";
import { IoHourglassOutline } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";

interface Message {
  id: number;
  sender: "customer" | "support";
  message: string;
  time: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  ticketId: string;
  customerName: string;
  email: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  customerAvatar?: string | null;
  chatMessages: Message[];
}

export default function ChatModal({
  open,
  onClose,
  ticketId,
  customerName,
  email,
  description,
  category,
  status,
  priority,
  customerAvatar,
  chatMessages,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  console.log("ChatModal rendered with messages:", chatMessages);
  if (!open) return null;

  const getStatusBadgeConfig = (value: string) => {
    const v = value.toLowerCase();
    const text = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    if (v === "open") {
      return {
        text: text,
        className: "bg-[#ffdbd6] text-[#fb2c2f] border border-[#ffb4ab]",
        icon: <AlertTriangle size={12} className="text-[#fb2c2f]" />,
      };
    }

    if (v === "in progress") {
      return {
        text: text,
        className: "bg-[#f9e8db] text-[#dc7527] border border-[#facc15]",
        icon: <IoHourglassOutline size={12} className="text-[#dc7527]" />,
      };
    }

    if (v === "resolved") {
      return {
        text: text,
        className: "bg-[#e1ffd9] text-[#29b605] border border-[#38EF0A66]",
        icon: <CheckCircle size={12} className="text-[#29b605]" />,
      };
    }

    return {
      text: text,
      className: "bg-[#f2f2f2] text-[#757575] border border-[#d6d6d7]",
      icon: null,
    };
  };

  const getPriorityBadgeConfig = (value: string) => {
    const v = value.toLowerCase();
    const text= value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    if (v === "high") {
      return {
        text: text,
        className: "bg-[#ffe2e2] text-[#e7000b] border border-[#ffb3b3]",
        icon: <FaExclamation size={12} className="text-[#e7000b]" />,
      };
    }

    if (v === "medium") {
      return {
        text: text,
        className: "bg-[#fef3e3] text-[#faad40] border border-[#facc15]",
        icon: <VscCircleFilled size={12} className="text-[#faad40]" />,
      };
    }

    if (v === "low") {
      return {
        text: text,
        className: "bg-[#e1eefd] text-[#2f85f3] border border-[#7ae7b0]",
        icon: <FaArrowDownLong size={12} className="text-[#2f85f3]" />,
      };
    }

    return {
      text: text,
      className: "bg-[#f2f2f2] text-[#757575] border border-[#d6d6d7]",
      icon: null,
    };
  };
  const statusBadge = getStatusBadgeConfig(status);
  const priorityBadge = getPriorityBadgeConfig(priority);
  return (
    <div className="fixed h-screen inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center z-[999999]">
      <div className="relative w-[460px] max-w-[95vw] max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-[#27C300] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/whitelogo.png"
              alt="Support Avatar"
              width={40}
              height={40}
            />
            <span className="text-white font-bold text-lg">
              ChargeFlow Support
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-md transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Ticket Info */}
        <div className="relative font-roboto p-3 border-b border-[#DAD7D7] flex sm:flex-row  flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
              {customerAvatar ? (
                <Image
                  src={customerAvatar}
                  alt={customerName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <span className="text-green-600 font-bold text-lg">
                  {customerName.charAt(0)}
                </span>
              )}
            </div>

            <div className="text-sm">
              <div className="font-semibold">{ticketId}</div>
              <div className="font-medium">{customerName}</div>
              <div className="text-gray-500 text-xs">{email}</div>

              <div className="mt-1 flex justify-between  items-start">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-1 text-xs text-gray-700">
                  <div>
                    <span className="font-semibold">Description:</span>{" "}
                    <span className="font-normal">{description}</span>
                  </div>

                  <div>
                    <span className="font-semibold">Category:</span>{" "}
                    <span className="font-normal">{category}</span>
                  </div>
                </div>


              </div>
            </div>

          </div>

          {/* desktop badges */}
          <div className="absolute md:right-3 right-1 md:top-3 top-1 gap-3 flex  items-center ">
            <span
              className={`inline-flex items-center gap-2 px-2  rounded-md text-[14px] font-roboto ${statusBadge.className}`}
            >
              {statusBadge.icon}
              {statusBadge.text}
            </span>

            <span
              className={`inline-flex items-center gap-2 px-2  rounded-md text-[14px] font-roboto ${priorityBadge.className}`}
            >
              {priorityBadge.icon}
              {priorityBadge.text}
            </span>
          </div>

          {/* mobile view badges */}
          {/* <div className=" flex sm:hidden  gap-2 justify-end items-center ">
            <span
              className={`flex items-center gap-1 px-1 py-1 rounded-md text-xs font-roboto ${statusBadge.className}`}
            >
              {statusBadge.icon}
              {statusBadge.text}
            </span>

            <span
              className={`flex items-center gap-1 px-1 py-1 rounded-md text-xs font-roboto ${priorityBadge.className}`}
            >
              {priorityBadge.icon}
              {priorityBadge.text}
            </span>
          </div> */}


        </div>

        {/* Chat Area */}
        <div className="font-roboto flex-1 max-h-[200px] no-scrollbar overflow-y-auto bg-gray-50 p-4 space-y-4">
          {chatMessages.map((msg) => {
            const isCompany = msg.sender === "support";

            return (
              <div
                key={msg.id}
                className={`flex  gap-2 ${isCompany ? "justify-end" : "justify-start"
                  }`}
              >
                {/* LEFT AVATAR (Customer) */}
                {!isCompany && (
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-green-100 flex items-center justify-center">
                    {customerAvatar ? (
                      <Image
                        src={customerAvatar}
                        alt={customerName}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-green-600">
                        {customerName.charAt(0)}
                      </span>
                    )}
                  </div>
                )}

                {/* MESSAGE + TIME */}
                <div className="max-w-[70%] flex flex-col">
                  <div
                    className={`px-4 py-2 text-sm rounded-2xl ${isCompany
                      ? "bg-[#2CDE00] text-white rounded-tr-sm"
                      : "bg-[#B4FFBC] text-[#121212] rounded-tl-sm"
                      }`}
                  >
                    {msg.message.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  <span
                    className={`text-[11px] text-gray-400 mt-1 ${isCompany ? "text-right" : "text-left"
                      }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {/* RIGHT AVATAR (Company) */}
                {isCompany && (
                  <div className="w-8 h-8 rounded-full bg-white flex items-center shadow-[0px_1px_5.3px_0px_#00000040] justify-center">
                    <Image
                      src="/logo.svg"
                      alt="Company"
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input */}
        <div className="p-3 bg-white w-full sticky bottom-0 flex items-center gap-2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 px-4 py-2 rounded-[8px] border border-[#8E8E93]  text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
          />

          <button className="w-10 h-10 bg-[#2BD101] text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
{/* <div className="flex flex-col gap-2 items-end">
            <span className="px-3 py-1 text-xs border border-orange-400 text-orange-500 rounded-md flex items-center gap-1">
              <AlertTriangle size={14} />
              {status}
            </span>

            <span
              className={`px-3 py-1 text-xs border rounded-md ${priorityColor}`}
            >
              {priority}
            </span>
          </div> */}