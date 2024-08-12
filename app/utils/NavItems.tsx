import { useEffect, useState } from "react";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  activeItem: string | null;
  openSidebar?: boolean;
};

type NavItem = {
  name: string;
  url: string;
};

export const navItemData: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "Course", url: "/course" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

const NavItems: FC<Props> = ({ activeItem, openSidebar }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (url: string) => {
    if (url === "/") {
      // Match root path exactly
      return activeItem === "/";
    } else {
      // Match path exactly or as a prefix with a slash (e.g., "/course" or "/course/...")
      return activeItem === url || activeItem?.startsWith(url + "/");
    }
  };
  const renderNavItem = (item: NavItem) => (
    <Link href={item.url} key={item.name}>
      <span
        className={`${
          isActive(item.url)
            ? "dark:text-[#37a39a] text-[crimson]"
            : "dark:text-white text-black"
        } text-[18px] px-6 font-Poppins font-[400] cursor-pointer hover:text-[crimson] hover:dark:text-[#37a39a] duration-500`}
      >
        {item.name}
      </span>
    </Link>
  );

  return (
    <>
      <div className={`hidden ${isMobile ? "800px:hidden" : "800px:flex"}`}>
        {navItemData.map(renderNavItem)}
      </div>
      {openSidebar && (
        <div className="800px:hidden mb-5 flex flex-col gap-8 mt-16">
          {navItemData.map(renderNavItem)}
        </div>
      )}
    </>
  );
};

export default NavItems;
