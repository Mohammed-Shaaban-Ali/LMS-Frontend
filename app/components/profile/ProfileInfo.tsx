"use client";
import { useLoadUserQuery } from "@/redux/api/apiSlice";
import {
  useUpdateUserInfoMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Avatar from "../../../public/Image/avatar.webp";

type Props = {
  user: any;
  avatar: string;
  data: any;
};

function ProfileInfo({ avatar, user, data }: Props) {
  const [name, setName] = useState<string>(user ? user.name : "");
  const [loaduser, setloaduser] = useState<boolean>(false);

  const {} = useLoadUserQuery(undefined, { skip: loaduser ? false : true });

  const [updateAvatar, { isSuccess, isLoading }] = useUpdateAvatarMutation();
  const [updateAuserInfo, { isSuccess: suUserInfo, isLoading: loUserInfo }] =
    useUpdateUserInfoMutation();

  const handleImageChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState == 2) {
        const avatar = fileReader.result || "";
        updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || suUserInfo) {
      setloaduser(true);
      toast.success(
        `${isSuccess ? "Update Avatar Success" : "Update Name Success"}`
      );
    }
  }, [isSuccess, suUserInfo]);

  const handelUpdateName = () => {
    updateAuserInfo(name);
  };

  const UpdateImage = (
    <div className="mx-auto flex justify-center  rounded-full bg-cover bg-center bg-no-repeat">
      <div className="text-center mt-4 relative">
        <Image
          src={
            user?.avatar || avatar || data?.user
              ? user?.avatar?.url || avatar || data?.user?.image
              : Avatar
          }
          alt="Avatar"
          width={120}
          height={120}
          priority
          className=" 800px:w-[120px] 800px:h-[120px] rounded-full object-contain border border-green-500"
        />
        <input
          type="file"
          name="avatarImage"
          id="avatar"
          hidden
          value={avatar}
          required
          onChange={handleImageChange}
        />
        <label
          className="cursor-pointer absolute rounded-full bottom-1  p-1 right-1 bg-slate-200 dark:bg-slate-500"
          htmlFor="avatar"
        >
          {isLoading ? (
            <div className="border-gray-300 w-5 h-5 animate-spin rounded-full border-2 border-t-green-600"></div>
          ) : (
            <svg
              data-slot="icon"
              className="w-6 h-5 dark:text-white text-black"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          )}
        </label>
      </div>
    </div>
  );
  return (
    <>
      <form className="flex flex-col gap-2 items-center justify-center w-11/12 max-w-[600px] shadow dark:shadow-slate-600 py-8 ">
        {UpdateImage}
        <div className="flex flex-col w-full md:w-3/4 lg:w-2/3 gap-3">
          <div className="flex gap-1 flex-col items-start justify-center">
            <label className="text-gray-600 dark:text-gray-200 font-semibold">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full text-gray-800 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="flex gap-1 flex-col items-start justify-center">
            <label className="text-gray-600 dark:text-gray-200 font-semibold">
              Email
            </label>
            <input
              type="email"
              readOnly
              value={user?.email}
              name="email"
              placeholder="Email"
              className="w-full text-gray-800 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
            />
          </div>
        </div>
        <button
          disabled={loUserInfo}
          onClick={() => handelUpdateName()}
          className="px-6 my-4 py-2 min-w-[120px] text-center text-green-400 cursor-pointer border border-green-500 rounded hover:bg-green-500 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
        >
          {loUserInfo ? (
            <div className="border-gray-300 w-5 h-5 animate-spin rounded-full border-2 border-t-green-600"></div>
          ) : (
            "Update"
          )}
        </button>
      </form>
    </>
  );
}

export default ProfileInfo;
