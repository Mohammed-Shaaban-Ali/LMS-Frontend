import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "./NavItems";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = ({ activeItem }) => {
  const [avtive, setAvtive] = useState(false);
  const [openSidbar, setOpenSidbar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) setAvtive(true);
      else setAvtive(false);
    });
  }
  return (
    <div className="w-full relative">
      <div
        className={`${
          avtive
            ? "dark:bg-opacity-50-50 dark:bg-gradient-to-b w-full border-b  dark:border-[#ffffff1c] dark:from-gray-900 dark:to-black fixed top-0 left-0  z-[80]  shadow-xl duration-500"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
