"use client";

import { Users, Pencil } from "lucide-react";
import data from '../data/admin-data.json'
import { FaUserFriends } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
const rolesData = data.settings.roles;
export default function RolesPage() {
  const [roles, setRoles] = useState(data.settings.roles);

  const handleToggle = (roleId: number, permissionKey: string) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
            ...role,
            permissions: {
              ...role.permissions,
              [permissionKey]: !role.permissions[permissionKey],
            },
          }
          : role
      )
    );
  };

  return (
    <div className="font-inter ">
      {/* Header */}
      <h2 className="text-[24px] font-medium ">
        Roles & Permissions
      </h2>
      <p className="font-inter text-[#7C7C7C] text-[18px] mb-6">
        Manage admin roles and access levels
      </p>

      {/* Cards */}
      <div className="space-y-6 ">
        {roles.map((role,i) => (
          <div
            key={role.id}
            className="bg-[#C1FFD51A] border border-gray-300 rounded-[20px] py-2 pt-4 md:pt-4 px-4 md:px-8"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-[12px] flex items-center justify-center ${i==0
                      ? "bg-green-100"
                      : "bg-blue-100"
                    }`}
                >
                  <FaUserFriends
                    size={26}
                    className={`${i === 0
                        ? "text-green-600"
                        : "text-blue-600"
                      }`}
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[20px] font-medium text-[#333333]">
                    {role.name}
                  </h3>
                  <p className="text-[18px] text-[#7C7C7C]">
                    {role.description}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <button className="font-medium flex items-center gap-2 border border-[#AAAAAA] hover:border-[#30EF0A] rounded-[10px] px-2 py-2 text-[16px] text-[#171717] hover:text-[#30EF0A]  bg-white hover:bg-green-50 transition">
                <BiEdit size={20} />
                Edit
              </button>
            </div>

            {/* Permissions */}
            <Toggle
              title="User Management"
              subtitle="Manage users and their roles"
              enabled={role.permissions.userManagement}
              onToggle={() => handleToggle(role.id, "userManagement")}
            />

            <Toggle
              title="Financial Access"
              subtitle="Manage financial data and transactions"
              enabled={role.permissions.financialAccess}
              onToggle={() => handleToggle(role.id, "financialAccess")}
            />

            <Toggle
              title="System Settings"
              subtitle="Manage system settings and configurations"
              enabled={role.permissions.systemSettings}
              onToggle={() => handleToggle(role.id, "systemSettings")}
            />
          </div>
        ))}
      </div>

      {/* Add New Role Button */}
      <div className="mt-10 flex justify-center">
        <button className="flex justify-center items-center gap-3 border border-gray-300 rounded-[10px] md:w-[461px] px-8 py-2 text-[20px] text-[#1f1f1f]  bg-white hover:bg-gray-50 transition">
          <FaUserFriends size={22} />
          Add New Role
        </button>
      </div>
    </div>
  );
}

function Toggle({ title, enabled, onToggle }: any) {
  return (
    <div className="font-inter flex items-center justify-between space-y-3">

      <h4 className="text-[18px] text-[#7C7C7C]">
        {title}
      </h4>


      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition ${enabled ? "bg-[#30EF0A]" : "bg-[#D0BCFF]"
          }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full transition ${enabled ? "translate-x-6" : ""
            }`}
        />
      </div>
    </div>
  );
}