"use client";

import { Pause, Play } from "lucide-react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  onPause:()=>number;
  isPaused: boolean;
}

export default function PauseAutomationModal({ open, onClose,onPause,isPaused }: Props) {
  if (!open) return null;

  return  createPortal(
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
  
              <div className="bg-white rounded-[16px] p-6 w-[90%] sm:w-[380px]">
  
                <h3 className="text-[22px] sm:text-[24px] font-medium">
                  Pause Automation?
                </h3>
  
                <p className="text-[16px] sm:text-[18px] text-[#7C7C7C] mt-2">
                  This automation will stop sending notification until you
                  activate it again.
                </p>
  
                <div className="flex justify-end gap-4 mt-6">
  
                  <button
                    onClick={() => onClose()}
                    className="border border-[#C9C8C8] px-5 py-2 rounded-[10px]"
                  >
                    Cancel
                  </button>
  
                  <button
                    onClick={()=>onPause()}
                    className="flex items-center gap-2 bg-[#30EF0A] text-white px-5 py-2 rounded-[10px]"
                  >
                    {isPaused ? (
                            <>
                              <Play size={14} /> Unpause
                            </>
                          ) : (
                            <>
                              <Pause size={14} /> Pause
                            </>
                          )}
                  </button>
  
                </div>
  
              </div>
  
            </div>,
            document.body
          )
}