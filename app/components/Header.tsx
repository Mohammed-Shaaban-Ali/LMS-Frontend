"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

import ThemeSwitcher from "../utils/ThemeSwitcher";
import CustomModel from "../utils/CustomModel";
import Login from "./Auth/Login";
import SingUp from "./Auth/SingUp";
import Verification from "./Auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  useLogoutQuery,
  useSocilatLoginMutation,
} from "@/redux/features/auth/authApi";
import NavItems from "../utils/NavItems";

import Avatar from "../../public/Image/avatar.webp";
import { usePathname } from "next/navigation";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ setOpen, route, open, setRoute }) => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [logout, setLogout] = useState<boolean>(false);

  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialLogin] = useSocilatLoginMutation();

  useLogoutQuery(undefined, { skip: !logout });

  useEffect(() => {
    if (!user && data) {
      const sendData = {
        email: data.user?.email,
        name: data.user?.name,
        avatar: data.user?.image,
      };
      socialLogin(sendData);
    }

    if (!user && data === null) {
      setLogout(true);
    }
  }, [data, user, socialLogin]);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 85);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") setOpenSidebar(false);
  };

  return (
    <div className="w-full relative container mx-auto">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b w-full border-b dark:border-[#ffffff1c] dark:from-gray-900 dark:to-black fixed top-0 left-0 z-[80] shadow-xl duration-500"
            : "h-[80px] z-[80] dark:shadow w-full border-b dark:border-[#ffffff1c]"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <Link
              href="/"
              className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
            >
              ELearning
            </Link>
            <div className="flex items-center">
              <NavItems activeItem={pathname} />
              <ThemeSwitcher />

              {/* Only for mobile */}
              <div className="800px:hidden cursor-pointer mr-3 dark:text-white text-black">
                <HiOutlineMenuAlt3
                  size={25}
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              {/* End only for mobile */}

              {user ? (
                <Link href="/profile" className="w-[28px] h-[28px]">
                  <Image
                    src={user.avatar?.url || data?.user?.image || Avatar}
                    width={32}
                    height={32}
                    className={`w-[28px] h-[28px] rounded-full cursor-pointer ${
                      pathname === "/profile" ? "border border-green-500" : ""
                    }`}
                    alt="user photo"
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  className="cursor-pointer dark:text-white text-black hidden 800px:block"
                  size={25}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 z-[99] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[100] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems openSidebar={openSidebar} activeItem={pathname} />
              {!user && (
                <HiOutlineUserCircle
                  className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                  size={25}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {route === "Login" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          Component={Login}
        />
      )}
      {route === "Sign-Up" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          Component={SingUp}
        />
      )}
      {route === "Verification" && open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          Component={Verification}
        />
      )}
    </div>
  );
};

export default Header;
