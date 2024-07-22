"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// import { useTheme } from "next-themes";
import Image from "next/image";
import Avatar from "../../../public/Image/avatar.webp";
import { useSession } from "next-auth/react";

// icons -----------------------------------------------------------
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import WebIcon from "@mui/icons-material/Web";
import QuizIcon from "@mui/icons-material/Quiz";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { HiMenuAlt3 } from "react-icons/hi";
// ----------------------------------------------------------------

const AminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  // const [logOut, setlogOut] = useState(false);
  const [selected, setselected] = useState<string | undefined>("dashboard");

  // const { theme, setTheme } = useTheme();

  const menus = [
    { name: "dashboard", link: "/admin", icon: HomeOutlinedIcon },
    { title: "Data" },
    { name: "users", link: "/admin/users", icon: GroupsIcon },
    { name: "Invoices", link: "/", icon: ReceiptOutlinedIcon },
    { title: "Contant" },

    {
      name: "Create Course",
      link: "/admin/create-course",
      icon: VideoCallIcon,
    },
    {
      name: "Live Course",
      link: "/admin/courses",
      icon: OndemandVideoIcon,
    },
    { title: "Customization" },
    // { name: "File Manager", link: "/", icon: BarChartOutlinedIcon },
    { name: "Hero", link: "/", icon: WebIcon },
    { name: "FAQ", link: "/", icon: QuizIcon },
    { name: "Categories", link: "/", icon: WysiwygIcon },
    { title: "Controllers" },
    { name: "Manage Team", link: "/admin/team", icon: PeopleOutlinedIcon },
    { title: "Analytics" },
    { name: "Courses Analytics", link: "/ ", icon: BarChartOutlinedIcon },
    { name: "Ordera Analytics", link: "/", icon: MapOutlinedIcon },
    { name: "Users Analytics", link: "/", icon: ManageHistoryIcon },
    { title: "Extras" },
    { name: "Settings", link: "/", icon: SettingsIcon },
    { name: "Logout", link: "/", icon: ExitToAppIcon },
  ];
  const [open, setOpen] = useState(true);
  const { data } = useSession();

  return (
    <section className="flex gap-6">
      <div
        className={`dark:bg-[#111C43] bg-[#eeeeee5e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500  px-4 dark:text-white text-black`}
      >
        <div className="py-3 flex justify-between">
          {open && (
            <Link href="/">
              <h3 className="text-[25px] font-Poppins uppercase ">Elearning</h3>
            </Link>
          )}
          <HiMenuAlt3
            size={26}
            className="cursor-pointer w-8 h-8"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="flex font-semibold justify-center items-center flex-col gap-4 dark:text-gray-200 text-black my-4">

            <Image
              src={ user?.avatar  || data?.user
                ? user?.avatar?.url  || data?.user?.image
                : Avatar}
              alt="profile-user"
              width={100}
              height={100}
              className="w-32 h-32 object-contain cursor-pointer rounded-full border-[3px] border-[#5b6fe6]"
            />
            {/* text */}
            <div className="flex justify-center font-bold  items-center flex-col gap-2">
              <h4>{user?.name}</h4>
              <h6 className="text-[16px] capitalize mb-3">-{user?.role}</h6>
            </div>
          </div>
        )}
        <div
          className={` ${
            open && "px-4"
          } mt-4 flex flex-col gap-2 relative dark:text-gray-200 text-black `}
        >
          {menus?.map(({ icon, link, name, title }, i) => (
            <React.Fragment key={i}>
              {title ? (
                open && <h2 className="-mb-2 mt-2 font-bold -px-1">{title}</h2>
              ) : (
                <Link
                href={link ? link :"/"}
                   onClick={() => setselected(name)}
                  className={`group flex flex-col items-start text-sm font-medium px-1 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md cursor-pointer ${
                    name === selected && "text-[#5b6fe6]"
                  }`}
                >
                  {open && title && <h5>{title}</h5>}
                  <div className="flex items-center text-sm gap-3 ">
                    {icon && <div>{React.createElement(icon)}</div>}
                    <h4
                      className={`whitespace-pre duration-500 ${
                        !open &&
                        "opacity-0 translate-x-28 overflow-hidden uppercase"
                      }`}
                    >
                      {name}
                    </h4>
                    <h4
                      className={`${
                        open && "hidden"
                      } uppercase absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                      {name}
                    </h4>
                  </div>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AminSidebar;
