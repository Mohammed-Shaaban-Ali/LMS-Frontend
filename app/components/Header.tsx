import React, { FC, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

import NavItems from "./NavItems";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = ({ activeItem, setOpen }) => {
  const [avtive, setAvtive] = useState(false);
  const [openSidbar, setOpenSidbar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) setAvtive(true);
      else setAvtive(false);
    });
  }

  const handelClose = (e: any) => {
    if (e.target.id === "screen") setOpenSidbar(false);
  };
  return (
    <div className="w-full relative container mx-auto">
      <div
        className={`${
          avtive
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b w-full border-b  dark:border-[#ffffff1c] dark:from-gray-900 dark:to-black fixed top-0 left-0  z-[80]  shadow-xl duration-500"
            : " h-[80px] z-[80] dark:shadow w-full border-b  dark:border-[#ffffff1c]"
        } `}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              {/* logo */}
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >
                ELearning
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* only for mobile */}
              <div className="800px:hidden cursor-pointer dark:text-white text-black">
                <HiOutlineMenuAlt3
                  size={25}
                  onClick={() => setOpenSidbar(true)}
                />
              </div>
              {/*End only for mobile */}
              <HiOutlineUserCircle
                className="cursor-pointer dark:text-white text-black hidden 800px:block"
                size={25}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
        {/* mobile Sidebar */}
        {openSidbar && (
          <div
            className="fixed w-full h-screen top-0 z-[99] dark:bg-[unset] bg-[#00000024]"
            onClick={handelClose}
            id="screen"
          >
            <div className="w-[70%] fixed z=[100] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                size={25}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
