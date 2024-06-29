"use client";
import React, { useState } from "react";
import CourseInformation from "./CourseInformaton";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";

type Props = {};

function CreateCourse({}: Props) {
  const [active, setActive] = useState(0);
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });

  const [courseContentData, setCourseContentData] = useState({
    videoUrl: "",
    title: "",
    videoSection: "Untitled Section",
    description: "",
    links: [{ title: "", url: "" }],
    suggestion: "",
  });

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
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default CreateCourse;
