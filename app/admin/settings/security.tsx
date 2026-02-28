"use client";
import { useState } from "react";
import data from "../data/admin-data.json";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  LogOut,
  Monitor,
} from "lucide-react";
import toast from "react-hot-toast";

export default function SecuritySettings() {
    const securityData = data.settings.security;
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(
    securityData.twoFactor.enabled
  );

  const [notifyNewLogin, setNotifyNewLogin] = useState(
    securityData.securityAlert.notifyNewLogin
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    )
      return;

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password Updated Successfully");
  };

  const isFormValid =
    formData.currentPassword &&
    formData.newPassword &&
    formData.confirmPassword &&
    formData.newPassword === formData.confirmPassword;

  return (
    <div className="font-inter">

      {/* Header */}
      <h2 className="text-[24px] font-medium text-black">
        Security Settings
      </h2>
      <p className="text-[18px] text-[#7C7C7C] mb-6">
        Manage Password And Authentication Settings
      </p>

      {/* Password Management */}
      <h3 className="text-[20px] font-medium text-black flex items-center gap-2">
        <ShieldCheck size={20} /> Password Management
      </h3>

      <div className="space-y-5 mt-4">

        {["current", "new", "confirm"].map((type) => (
          <div key={type} className="relative">
            <label className="text-[20px] text-[#364153]">
              {type === "current"
                ? "Current Password"
                : type === "new"
                ? "New Password"
                : "Confirm New Password"}
            </label>

            <input
              type={showPassword[type] ? "text" : "password"}
              value={
                type === "current"
                  ? formData.currentPassword
                  : type === "new"
                  ? formData.newPassword
                  : formData.confirmPassword
              }
              onChange={(e) =>
                handleInputChange(
                  type === "current"
                    ? "currentPassword"
                    : type === "new"
                    ? "newPassword"
                    : "confirmPassword",
                  e.target.value
                )
              }
              placeholder={`Enter Your ${
                type === "current"
                  ? "Current"
                  : type === "new"
                  ? "New"
                  : "Confirm New"
              } Password`}
              className="mt-2 w-full border border-[#AAAAAA] rounded-[10px] px-4 py-3 text-[18px] text-[#434343] focus:outline-none focus:ring-[1px] focus:ring-[#30EF0A]"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  [type]: !prev[type],
                }))
              }
              className="absolute right-4 top-[52px] text-gray-500"
            >
              {showPassword[type] ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Update Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleUpdate}
          disabled={!isFormValid}
          className={`text-[20px] font-medium text-white rounded-[10px] px-6 py-3 md:w-[461px] transition ${
            isFormValid
              ? "bg-[#30EF0A]"
              : "bg-[#30EF0A]/40 cursor-not-allowed"
          }`}
        >
          Update Password
        </button>
      </div>

      <div className="border-t border-[#C9C8C8] my-8" />

      {/* Two Factor */}
      <h3 className="text-[20px] font-medium mb-4">
        Two-Factor Authentication
      </h3>

      <div className="bg-[#C1FFD51A] border border-gray-300 rounded-[15px] p-4 flex justify-between items-center">
        <div>
          <h4 className="text-[20px] text-[#364153]">
            Enable 2AF
          </h4>
          <p className="text-[16px] text-[#7C7C7C]">
            Add An Extra Layer Of Security
          </p>
        </div>

        <Toggle
          enabled={twoFactorEnabled}
          onToggle={() =>
            setTwoFactorEnabled(!twoFactorEnabled)
          }
        />
      </div>

      <p className="text-[16px] text-[#7C7C7C] mt-4">
        Two-factor authentication adds an additional layer of security to your account.
      </p>

      <div className="border-t border-[#C9C8C8] my-8" />

      {/* Login Activity */}
      <h3 className="text-[20px] font-medium mb-4">
        Login Activity
      </h3>

      <div className="overflow-x-auto border rounded-[10px]">
        <table className="min-w-full text-[16px]">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3">Browser</th>
              <th className="p-3">Device</th>
              <th className="p-3">OS</th>
              <th className="p-3">Location</th>
              <th className="p-3">Admin Type</th>
              <th className="p-3">Login Time</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {securityData.loginHistory.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.browser}</td>
                <td className="p-3">{item.device}</td>
                <td className="p-3">{item.os}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">{item.adminType}</td>
                <td className="p-3">{item.loginTime}</td>
                <td className="p-3">
                  {item.status === "active" ? (
                    <span className="bg-[#30EF0A] text-white px-3 py-1 rounded-full text-[14px]">
                      Active Now
                    </span>
                  ) : (
                    <span className="border px-3 py-1 rounded-full text-[14px]">
                      Logged Out
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Divider */}
<div className="border-t border-[#C9C8C8] my-8" />

{/* Logout Options */}
<h3 className="text-[20px] font-medium text-black mb-4">
  Logout Options
</h3>

<div className="space-y-4">

  {/* Logout Current Device */}
  <button className="flex items-center gap-3 border border-[#C9C8C8] rounded-[10px] px-6 py-3 text-[18px] text-[#364153] bg-white hover:bg-gray-50 transition">
    <LogOut size={20} />
    Logout from Current Device
  </button>

  {/* Logout All Device */}
  <button className="flex items-center gap-3 rounded-[10px] px-6 py-3 text-[18px] font-medium text-white bg-[#30EF0A] hover:bg-green-500 transition">
    <LogOut size={20} />
    Logout from All Device
  </button>

  {/* Description */}
  <p className="text-[16px] text-[#7C7C7C]">
    If you notice any suspicious activity, log out from all devices immediately to protect your account.
  </p>
</div>
      {/* Security Alert */}
      {/* <div className="mt-8 flex items-center gap-4">
        <Toggle
          enabled={notifyNewLogin}
          onToggle={() =>
            setNotifyNewLogin(!notifyNewLogin)
          }
        />
        <p className="text-[18px] text-[#364153]">
          Notify me via email or in app notification for new logins from unknown devices
        </p>
      </div> */}
      {/* Divider */}
<div className="border-t border-[#C9C8C8] my-8" />

<h3 className="text-[20px] font-medium text-black mb-4">
  Security Alerts
</h3>

<div className="flex items-center gap-4">
  <Toggle
    enabled={notifyNewLogin}
    onToggle={() =>
      setNotifyNewLogin(!notifyNewLogin)
    }
  />

  <p className="text-[18px] text-[#364153]">
    Notify me via email or in app notification for new logins from unknown devices
  </p>
</div>
    </div>
  );
}

function Toggle({ enabled, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 rounded-full p-1 cursor-pointer transition ${
        enabled ? "bg-[#30EF0A]" : "bg-[#D0BCFF]"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full transition ${
          enabled ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}