import Link from "next/link";
import React, { FC } from "react";

type Props = {
  activeItem: number;
  isMobile: boolean;
};

export const navItemData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Course",
    url: "/course",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemData &&
          navItemData.map((item, index) => (
            <Link href={`${item.url}`} key={index}>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400] cursor-pointer hover:text-[crimson] hover:dark:text-[#37a39a] duration-500`}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>
      {/* mobile */}
      {isMobile && (
        <div className="800px:hidden mb-5 flex flex-col gap-8 mt-16">
          {navItemData &&
            navItemData.map((item, index) => (
              <Link href={`${item.url}`} key={index}>
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-[#37a39a] text-[crimson]"
                      : "dark:text-white text-black"
                  } text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};
export default NavItems;
