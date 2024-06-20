"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  user: any;
  avatar: string;
};

function ProfileInfo({ avatar, user }: Props) {
  const [name, setName] = useState<string>(user ? user.name : "");
  const [image, setImage] = useState<File | null>(null);
  console.log(image);
  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const UpdateImage = (
    <div className="mx-auto flex justify-center  rounded-full bg-cover bg-center bg-no-repeat">
      <div className="text-center ml-28 mt-4 relative">
        <Image
          src={
            user?.avatar || avatar
              ? user.avatar.url || avatar
              : "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
          }
          alt="Avatar"
          width={120}
          height={120}
          className=" 800px:w-[120px] 800px:h-[120px] rounded-full border-[3xp] border-[#37a39a] "
        />
        <input
          type="file"
          name="profile"
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
        <input
          type="submit"
          name="Send"
          value="Update"
          className="px-6 my-4 py-2 min-w-[120px] text-center text-green-400 cursor-pointer border border-green-500 rounded hover:bg-green-500 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
        />
      </form>
    </>
  );
}

export default ProfileInfo;
