import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUnderline, AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

export default function CourseCard({ isProfile, item }: Props) {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `access-course/${item._id}`}
    >
      <div className="w-full min-h--[35vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner ">
        <Image
          src={item?.thumbnail?.url}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded w-full"
          alt="Course"
        />
        <br />
        <h1 className="text-black dark:text-[#fff]  font-Poppins text-[16px] px-3 ">
          {item?.name}
        </h1>
        <div className="flex justify-between items-center w-full pt-2  px-3">
          <Ratings rating={item?.rating} />
          <h5
            className={`textblack dark:text-[#fff] ${
              isProfile && "hidde 800px:inline"
            }`}
          >
            {item?.purchaseed} Students
          </h5>
        </div>
        <div className="w-full flex justify-between items-center pt-4 px-3 pb-2">
          <div className="flex">
            <h3 className="text-black dark:text-[#fff]">
              {item?.price == 0 ? "Free" : item?.price + "$"}
            </h3>
            <h3 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff] ">
              {item?.estimatedPrice}
            </h3>
          </div>
          <div className="flex items-center pb-3 gap-1">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              {item?.courseData?.length} Lessons
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
