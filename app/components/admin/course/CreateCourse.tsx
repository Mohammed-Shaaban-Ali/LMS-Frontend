"use client";

import React, { useEffect, useState } from "react";
import CourseInformation from "./CourseInformaton";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import { ContentSection, CourseInfo, Item } from "./types"; // Import types
import CoursePrewview from "./CoursePrewview";
import { useCreateCourseMutation } from "@/redux/features/course/CourseApi";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

// Define the type for the props
type Props = {};


// Main functional component
const CreateCourse: React.FC<Props> = () => {
  const [createCourse, { isLoading, isSuccess, error }] =
    useCreateCourseMutation();
  const [active, setActive] = useState<number>(0);
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

  const [courseContentData, setCourseContentData] = useState<ContentSection[]>([
    {
      videoUrl: "",
      title: "",
      videoSection: "Untitled Section",
      description: "",
      links: [{ title: "", url: "" }],
      suggestion: "",
    },
  ]);

  const [finalCourseData, setFinalCourseData] = useState({});
  const handleSubmit = async () => {
    // format benfites array
    const formatBenfitesArray = benefits.map((benefit) => ({
      title: benefit.title,
    }));

    // format prerequisites array
    const formatPrerequisitesArray = prerequisites.map((prereq) => ({
      title: prereq.title,
    }));

    // format course content array
    const formatCourseContentArray = courseContentData.map((courseContent) => ({
      videoUrl: courseContent.videoUrl,
      title: courseContent.title,
      description: courseContent.description,
      videoSection: courseContent.videoSection,
      suggestion: courseContent.suggestion,
      links: courseContent.links.map((link) => ({
        title: link.title,
        url: link.url,
      })),
    }));

    // prepar our data in object
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      thumbnail: courseInfo.thumbnail,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      totalVideos: courseContentData.length,
      benfites: formatBenfitesArray,
      prerequisites: formatPrerequisitesArray,
      courseData: formatCourseContentArray,
    };
    setFinalCourseData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Create Course Success");
      redirect("/admin/courses");
    }
    if (error && "data" in error) {
      const errorMesage = error as any;
      toast.error(errorMesage);
    }
  }, [error, isSuccess]);

  const handleCreateCourse = async () => {
    const data = finalCourseData;

    if (!isLoading) await createCourse(data);
  };

  return (
    <div className="w-full flex ">
      <div className="w-[80%] ">
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
        {active === 3 && (
          <CoursePrewview
            active={active}
            setActive={setActive}
            finalCourseData={finalCourseData}
            handleCreateCourse={handleCreateCourse}
            isEdit={false}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourse;
