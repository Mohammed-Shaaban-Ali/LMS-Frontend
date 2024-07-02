import React from "react";
import CoursePlayer from "./CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import NxteAndPrevButtons from "./NxteAndPrevButtons";

type Props = {
  active: number;
  setActive: (active: number) => void;
  finalCourseData: any;
  handleCreateCourse: () => void;
};

function CoursePrewview({
  active,
  setActive,
  finalCourseData,
  handleCreateCourse,
}: Props) {
  // discountPresentation
  const discountPresentationPrice =
    (finalCourseData?.estimatedPrice - finalCourseData?.price) /
    finalCourseData?.estimatedPrice;
  const discountPresentation = discountPresentationPrice.toFixed(0);

  const prevOptions=()=>{
    setActive(active-1);
  }
  const nextOptions=()=>{
    handleCreateCourse()
  }
  return (
    <div className=" w-[90%] m-auto py-5 mb-5  text-black dark:text-white">
      <div className="w-full relative ">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={finalCourseData?.demoUrl}
            title={finalCourseData?.title}
          />
        </div>

        <div className="flex items-center">
          <h1 className="pt-5 text-[25px] ">
            {finalCourseData?.price == 0
              ? "Free"
              : finalCourseData?.price + "$"}
          </h1>
          <h4 className="pl-3 text-[20px] mt-2 line-through opacity-80 ">
            {discountPresentation == "0"
              ? ""
              : finalCourseData?.estimatedPrice + "$"}
          </h4>
          <h5 className="pl-5 pt-4 text-[22px] ">
            {discountPresentation == "0" ? "" : discountPresentation + "$ OFF"}
          </h5>
        </div>

        <div className="flex items-center">
          <div className="px-6 my-4 py-2 cursor-pointer border min-w-[120px] text-center rounded w-[180px] text-[crimson]  border-[crimson]  hover:bg-[crimson] hover:text-white  focus:outline-none focus:ring">
            Buy Now {finalCourseData?.price} $
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="Discount"
            id="Discount"
            placeholder="Discount code... "
            className="input 1500px:!w-[50%] 1100px:w-[60%] ml-2 !mt-0"
          />
          <div className="px-6 my-4 py-2 cursor-pointer border min-w-[120px] text-center rounded w-[120px] text-blue-500  border-blue-500   hover:bg-blue-500 hover:text-white focus:outline-none focus:ring">
            Apply
          </div>
        </div>
        <p className="pb-1">. Sorce code included</p>
        <p className="pb-1">. Full lifetime acces</p>
        <p className="pb-1">. Sorce code included</p>
        <p className="pb-3 800px:pb-1">. Primium Support</p>
      </div>
      <div className="w-full">
        <div className="w-full 800px:pr-5 ">
          <h1 className="text-[25px] font-Poppins font-[600] ">
            {finalCourseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3 ">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
          <br />
          <h1 className="text-[25px] font-[600] font-Poppins">
            What you will learn this course?
          </h1>
        </div>
        {finalCourseData?.benefits?.map((item: any, index: number) => (
          <div className="w-full flex py-2 800px:items-center" key={index}>
            <div className="w-[15px] mr-1">
              <IoMdCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />

        <div className="w-full">
          <h2 className="text-[25px] font-[600] font-Poppins">
            Course Details
          </h2>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden ">
            {" "}
            {finalCourseData?.description}
          </p>
        </div>
        <br />
        <br />
      </div>
      <NxteAndPrevButtons  nextOptions={nextOptions} prevOptions={prevOptions} />
    </div>
  );
}

export default CoursePrewview;
