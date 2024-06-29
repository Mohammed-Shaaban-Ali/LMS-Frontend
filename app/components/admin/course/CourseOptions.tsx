import React from "react";
import { IoMdCheckmark } from "react-icons/io";
type Props = {
  active: number;
  setActive: (active: number) => void;
};

function CourseOptions({ active, setActive }: Props) {
  const Options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {Options.map((option: any, i: number) => (
        <div key={i} className="w-full flex py-5">
        <div
          className={`w-[35px] h-[35px] rounded-full flex items-center justify-center 
                ${active + 1 > i ? "bg-blue-500" : "bg-[#384766]"}
               relative `}
        >
          <IoMdCheckmark className="text-[25px]" />
          {i !== Options.length-1&& (
            <div
              className={`absolute h-[30px] w-1 bottom-[-100%] ${
                active + 1 > i ? "bg-blue-500" : "bg-[#384766]"
              }`}
            />
          )}
              </div>

          <h5 className={`pl-3 dark:text-white text-black text-[20px]`}>
            {option}
          </h5>
        </div>
       
      ))}
    </div>
  );
}

export default CourseOptions;
