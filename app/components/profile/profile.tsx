"use client";
import React, { useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";

type Props = {
  user: any;
};

function Profile({ user }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scroll, setScroll] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  const [avatar, setAvatar] = useState<string | null>(null);

  const [logout, setLogout] = useState<boolean>(false);
  const {} = useLogoutQuery(undefined, { skip: !logout ? true : false });
  const handlerLogout = async () => {
    setLogout(true);
    await signOut();
    // redirect("/");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) setScroll(true);
      else setScroll(false);
    });
  }

  return (
    <div className="w-[85%] relative container mx-auto">
      <div
        className={` w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-500 bg-opacity-50   border  dark:border-[#ffffff1d] bg-white rounded-md  my-[80px] sticky shadow-sm left-[30px]  ${
          scroll ? "top-[120px]" : "top-[30px"
        } `}
      >
        <SideBarProfile
          user={user}
          active={active}
          setActive={setActive}
          logout={handlerLogout}
          avatar={avatar}
        />
      </div>
    </div>
  );
}

export default Profile;
