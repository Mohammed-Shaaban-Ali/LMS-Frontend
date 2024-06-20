"use client";
import { useChangePasswordMutation } from "@/redux/features/user/userApi";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

function ChangePassword({}: Props) {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [againNewPassword, setAgainNewPassword] = useState<string>("");

  const [changePassword, { isSuccess, isLoading,error }] =
    useChangePasswordMutation();

  const handleUpdatePassword = async () => {
    // Basic client-side validation
    if (!oldPassword || !newPassword || !againNewPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== againNewPassword) {
      toast.error("New passwords do not match.");
      return;
    }
    if (isSuccess) {
      toast.success("changed password successfully");
    }
    try {
      changePassword({ oldPassword, newPassword });
    } catch (error: any) {
        console.log(error);
      toast.error(error?.data?.message || "Failed to update password.");
    }
  };
  return (
    <form
      onSubmit={handleUpdatePassword}
      className="flex flex-col gap-2 items-center justify-center w-11/12 max-w-[600px] shadow dark:shadow-slate-600 py-8"
    >
      <div className="flex flex-col w-full md:w-3/4 lg:w-2/3 gap-3">
        <div className="flex gap-1 flex-col items-start justify-center">
          <label className="text-gray-600 dark:text-gray-200 font-semibold">
            Old Password
          </label>
          <input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            className="w-full text-gray-800 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
          />
        </div>
        <div className="flex gap-1 flex-col items-start justify-center">
          <label className="text-gray-600 dark:text-gray-200 font-semibold">
            New Password
          </label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="w-full text-gray-800 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
          />
        </div>
        <div className="flex gap-1 flex-col items-start justify-center">
          <label className="text-gray-600 dark:text-gray-200 font-semibold">
            Confirm New Password
          </label>
          <input
            value={againNewPassword}
            onChange={(e) => setAgainNewPassword(e.target.value)}
            type="password"
            name="againNewPassword"
            placeholder="Confirm New Password"
            className="w-full text-gray-800 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
          />
        </div>
      </div>
      <button
        disabled={isLoading}
        onClick={() => handleUpdatePassword()}
        className="px-6 my-4 py-2 min-w-[120px] text-center text-green-400 cursor-pointer border border-green-500 rounded hover:bg-green-500 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
      >
        {isLoading ? (
          <div className="border-gray-300 w-5 h-5 animate-spin rounded-full border-2 border-t-green-600"></div>
        ) : (
          "Update"
        )}
      </button>
    </form>
  );
}

export default ChangePassword;
