"use client";

import { Users, Pencil } from "lucide-react";
import data from '../data/admin-data.json'
const rolesData = data.settings.roles;
export default function RolesPage() {
  

  return (
    <div className="flex-1 px-4 md:px-8 py-6 w-full">
      {/* Header */}
      <h2 className="text-[22px] font-semibold text-black">
        Roles & Permissions
      </h2>
      <p className="text-[15px] text-gray-500 mb-8">
        Manage admin roles and access levels
      </p>

      {/* Cards */}
      <div className="space-y-6">
        {rolesData.map((role) => (
          <div
            key={role.id}
            className="bg-[#EEF3F1] border border-gray-300 rounded-[20px] p-6 md:p-8"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-[12px] flex items-center justify-center ${
                    role.iconColor === "green"
                      ? "bg-green-100"
                      : "bg-blue-100"
                  }`}
                >
                  <Users
                    size={26}
                    className={`${
                      role.iconColor === "green"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[20px] font-semibold text-black">
                    {role.name}
                  </h3>
                  <p className="text-[15px] text-gray-500">
                    {role.description}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <button className="flex items-center gap-2 border border-gray-400 rounded-[12px] px-4 py-2 text-[15px] bg-white hover:bg-gray-50 transition">
                <Pencil size={16} />
                Edit
              </button>
            </div>

            {/* Permissions */}
            <div className="mt-6 space-y-5">
              <PermissionRow
                label="User Management"
                enabled={role.permissions.userManagement}
              />
              <PermissionRow
                label="Financial Access"
                enabled={role.permissions.financialAccess}
              />
              <PermissionRow
                label="System Settings"
                enabled={role.permissions.systemSettings}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add New Role Button */}
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-3 border border-gray-300 rounded-[16px] px-8 py-4 text-[18px] font-medium bg-white hover:bg-gray-50 transition">
          <Users size={22} />
          Add New Role
        </button>
      </div>
    </div>
  );
}

/* Toggle Row */
function PermissionRow({
  label,
  enabled,
}: {
  label: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[18px] text-gray-400 font-medium">
        {label}
      </span>

      <div
        className={`w-14 h-7 rounded-full p-1 transition ${
          enabled ? "bg-[#30EF0A]" : "bg-purple-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full transition ${
            enabled ? "translate-x-7" : ""
          }`}
        />
      </div>
    </div>
  );
}