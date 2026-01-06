import Image from "next/image";
import { useEffect } from "react";
interface SelectorModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SelectorModal({ open, onClose }: SelectorModalProps) {
    useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

    if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm "
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-50  max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-center text-2xl font-bold">Select Your Role</h2>
        <p className="mt-1 text-center text-sm text-gray-500">
          Please select how you plan to use our service
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Host */}
          <div className="cursor-pointer rounded-xl p-2  text-center flex flex-col items-center justify-center shadow-[0px_2px_5.3px_0px_rgba(0,0,0,0.25)]
 hover:border-green-400">
<Image src='/icons/charging_host.svg' alt='Charging Host' width={74} height={74}/>

            <h3 className="mt-4 text-lg font-semibold">Charging Host</h3>
            <p className="text-sm text-gray-500">List Station | Earn Money</p>
          </div>

          {/* User */}
          <div className="cursor-pointer rounded-xl p-2 text-center flex flex-col items-center justify-center shadow-[0px_2px_5.3px_0px_rgba(0,0,0,0.25)]
 hover:border-green-400">
            <Image src='/icons/electric_vehicle.png' alt='electric vehicle' width={74} height={74}/>


            <h3 className="mt-2 text-lg font-semibold">Charging User</h3>
            <p className="text-sm text-gray-500">Find Charge | Drive Further</p>
          </div>
        </div>
      </div>
    </div>
  );
}
