// "use client";

// import Link from "next/link";

// const tabs = [
//   { name: "General", key: "general" },
//   { name: "Commission", key: "commission" },
//   { name: "Roles", key: "roles" },
//   { name: "Notification", key: "notification" },
//   { name: "Security", key: "security" },
// ];

// export default function SettingsHeader({ active }: { active: string }) {
//   return (
//     <div className="flex  justify-around items-center bg-white  rounded-full py-2">
//       {tabs.map((tab) => {
//         const isActive = active === tab.key;

//         return (
//           <Link
//             key={tab.key}
//             href={`/admin/settings?type=${tab.key}`}
//             className={`font-inter flex items-center  justify-center xl:w-[170px] xl:px-0 px-4 overflow-x-auto no-scrollbar py-2 rounded-full text-[20px] font-medium transition-all
//               ${
//                 isActive
//                   ? "bg-[#30EF0A] text-white"
//                   : "text-gray-700 hover:bg-green-100"
//               }`}
//           >
//             {tab.name}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import Link from "next/link";

const tabs = [
  { name: "General", key: "general" },
  { name: "Commission", key: "commission" },
  { name: "Roles", key: "roles" },
  { name: "Notification", key: "notification" },
  { name: "Security", key: "security" },
];

export default function SettingsHeader({ active }: { active: string }) {
  return (
    <div className="bg-white rounded-full">

      {/* Mobile Wrapper */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar px-2 py-2
                      md:justify-around md:items-center md:overflow-visible md:px-0">

        {tabs.map((tab) => {
          const isActive = active === tab.key;

          return (
            <Link
              key={tab.key}
              href={`/admin/settings?type=${tab.key}`}
              className={`font-inter flex items-center justify-center
                          whitespace-nowrap shrink-0
                          px-4 py-2
                          text-[16px]
                          md:text-[20px]
                          xl:px-0 md:xl:w-[170px]
                          rounded-full font-medium transition-all
                          ${
                            isActive
                              ? "bg-[#30EF0A] text-white"
                              : "text-gray-700 hover:bg-green-100"
                          }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}