"use client";
import React, { useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";

type Props = {
  user: any;
  data:any
};

function Profile({ user,data }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scroll, setScroll] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  const [avatar, setAvatar] = useState<string>("");

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
    <div className="w-[85%] flex gap-2 lg:gap-16 mx-auto">
      <div
        className={` w-[60px] 800px:w-[280px] h-[350px] dark:bg-slate-700 bg-opacity-50   border  dark:border-[#ffffff1d] bg-white rounded-md  my-[80px] sticky shadow-sm left-[30px]  ${
          scroll ? "top-[120px]" : "top-[30px"
        } `}
      >
        <SideBarProfile
          user={user}
          active={active}
          setActive={setActive}
          logout={handlerLogout}
          avatar={avatar}
          data={data}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px] flex flex-col items-center justify-center">
          <ProfileInfo data={data} avatar={avatar} user={user} />
        </div>
      )}
      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px] flex flex-col items-center justify-center">
          <ChangePassword />
        </div>
      )}
    </div>
  );
}

export default Profile;
