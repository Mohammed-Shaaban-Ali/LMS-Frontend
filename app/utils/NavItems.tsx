import { useEffect, useState } from "react";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  activeItem: number;
};

export const navItemData = [
  { name: "Home", url: "/" },
  { name: "Course", url: "/course" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

const NavItems: FC<Props> = ({ activeItem }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`hidden ${isMobile ? "800px:hidden" : "800px:flex"}`}>
        {navItemData.map((item, index) => (
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
      {isMobile && (
        <div className="800px:hidden mb-5 flex flex-col gap-8 mt-16">
          {navItemData.map((item, index) => (
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
