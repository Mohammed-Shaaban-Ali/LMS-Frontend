"use client";

import React, { useState } from "react";
import CourseInformation from "./CourseInformaton";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import { ContentSection, CourseInfo, Item } from "./types"; // Import types

// Define the type for the props
type Props = {};

// Main functional component
const CreateCourse: React.FC<Props> = () => {
  const [active, setActive] = useState<number>(2);
  const [benefits, setBenefits] = useState<Item[]>([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState<Item[]>([{ title: "" }]);
  const [courseInfo, setCourseInfo] = useState<CourseInfo>({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });

  const [courseContentData, setCourseContentData] = useState<ContentSection[]>([{
    videoUrl: "",
    title: "",
    videoSection: "Untitled Section",
    description: "",
    links: [{ title: "", url: "" }],
    suggestion: "",
  }]);

  const handleSubmit = () => {
    // Handle form submission logic here
  }

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            active={active}
            setActive={setActive}
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
          />
        )}
        {active === 1 && (
          <CourseData
            active={active}
            setActive={setActive}
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
          />
        )}
        {active === 2 && (
          <CourseContent
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default CreateCourse;
