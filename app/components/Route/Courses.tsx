"use client";
import { useGetUserAllcourseQuery } from "@/redux/features/course/CourseApi";
import CourseCard from "./Route/CourseCard";
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
        <h1 className="text-black dark:text-white text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl 800px:!leading-[60px] font-[700] tracking-tight ">
          Expand Your Courses <span className="text-gradient">Opprtunity</span>
          <br />
          Opprtunity With Our Courses
        </h1>
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 1500px:grid-cols-4 mb-12 border-0">
          {data &&
            courses?.map((item: any) => (
              <>
                <CourseCard item={item} isProfile={false} key={item._id} />
                <CourseCard item={item} isProfile={false} key={item._id} />
                <CourseCard item={item} isProfile={false} key={item._id} />
                <CourseCard item={item} isProfile={false} key={item._id} />
                <CourseCard item={item} isProfile={false} key={item._id} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
