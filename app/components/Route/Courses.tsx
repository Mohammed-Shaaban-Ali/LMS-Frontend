"use client";
import { useGetUserAllcourseQuery } from "@/redux/features/course/CourseApi";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";
type Props = {};

export default function Courses({}: Props) {
  const { data } = useGetUserAllcourseQuery({});
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (data) {
      setCourses(data?.courses);
    }
  }, [data]);
  return (
    <div>
      <div className="w-[90%] m-auto 800px:w-[80%] ">
        <div className=" mb-12 space-y-5 md:mb-16 text-center">
          <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-white md:text-center md:text-5xl">
            Expand Your Courses{" "}
            <span className="text-gradient">Opprtunity</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-100 md:text-center md:text-2xl ">
            Opprtunity With Our Courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 1500px:grid-cols-4 mb-12 border-0">
          {data &&
            courses?.map((item: any) => (
              <CourseCard item={item} isProfile={false} key={item._id} />
            ))}
        </div>
      </div>
    </div>
  );
}
