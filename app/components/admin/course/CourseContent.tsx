"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import toast from "react-hot-toast";
import { ContentSection, Link } from "./types"; // Import types

// Define the type for props
interface Props {
  active: number;
  setActive: (active: number) => void;
  courseContentData: ContentSection[];
  setCourseContentData: (course: ContentSection[]) => void;
  handleSubmit: () => void;
}

// Main functional component
const CourseContent: React.FC<Props> = ({
  active,
  courseContentData,
  setActive,
  setCourseContentData,
  handleSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean[]>(
    Array(courseContentData.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState<number>(1);

  // Form submit handler
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  // Toggle collapse state for a section
  const handleCollapseToggle = (index: number) => {
    const updatedCollapsed = [...isCollapsed];
    updatedCollapsed[index] = !updatedCollapsed[index];
    setIsCollapsed(updatedCollapsed);
  };

  // Remove a link from a section
  const handleRemoveLink = (index: number, indexOfLink: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(indexOfLink, 1);
    setCourseContentData(updatedData);
  };

  // Add a new link to a section
  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  // Add new content section
  const handleNewContent = (item: ContentSection) => {
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.links[0].title === "" ||
      item.links[0].url === ""
    ) {
      toast.error("Please fill all the fields first!");
      return;
    }

    let newVideoSection = "Untitled Section";
    if (courseContentData.length > 0) {
      const lastVideoSection =
        courseContentData[courseContentData.length - 1].videoSection;
      if (lastVideoSection) newVideoSection = lastVideoSection;
    }

    const newContent: ContentSection = {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: newVideoSection,
      links: [{ title: "", url: "" }],
    };
    setCourseContentData([...courseContentData, newContent]);
  };

  // Render the form
  return (
    <div className="w-[80%] m-auto mt-24 p-3">
      <form onSubmit={handleSubmitForm}>
        {courseContentData?.map((item: ContentSection, index: number) => {
          const showSectionInput =
            index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection;

          return (
            <div
              key={index}
              className={`w-full bg-[#cdc8c817] p-4 text-black dark:text-white ${
                showSectionInput ? "mt-10" : "mb-0"
              }`}
            >
              {showSectionInput && (
                <>
                  <SectionHeader
                    item={item}
                    index={index}
                    courseContentData={courseContentData}
                    setCourseContentData={setCourseContentData}
                  />
                  <br />
                </>
              )}
              <SectionContent
                item={item}
                index={index}
                isCollapsed={isCollapsed}
                handleCollapseToggle={handleCollapseToggle}
                handleRemoveLink={handleRemoveLink}
                handleAddLink={handleAddLink}
                setCourseContentData={setCourseContentData}
                courseContentData={courseContentData}
              />
              {index === courseContentData.length - 1 && (
                <AddNewContentButton
                  handleNewContent={() => handleNewContent(item)}
                />
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
};

// Component to render the section header
interface SectionHeaderProps {
  item: ContentSection;
  index: number;
  courseContentData: ContentSection[];
  setCourseContentData: (course: ContentSection[]) => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  item,
  index,
  courseContentData,
  setCourseContentData,
}) => (
  <div className="flex items-center w-full">
    <input
      type="text"
      className={`text-[20px] font-Poppins cursor-pointer bg-transparent outline-none ${
        item.videoSection === "Untitled Section" ? "w-[150px]" : "w-fit"
      }`}
      value={item.videoSection}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const updatedData = [...courseContentData];
        updatedData[index].videoSection = e.target.value;
        setCourseContentData(updatedData);
      }}
    />
    <BiSolidPencil className="cursor-pointer" />
  </div>
);

// Component to render the section content
interface SectionContentProps {
  item: ContentSection;
  index: number;
  isCollapsed: boolean[];
  handleCollapseToggle: (index: number) => void;
  handleRemoveLink: (index: number, indexOfLink: number) => void;
  handleAddLink: (index: number) => void;
  setCourseContentData: (course: ContentSection[]) => void;
  courseContentData: ContentSection[];
}

const SectionContent: React.FC<SectionContentProps> = ({
  item,
  index,
  isCollapsed,
  handleCollapseToggle,
  handleRemoveLink,
  handleAddLink,
  setCourseContentData,
  courseContentData,
}) => (
  <div>
    <div className="flex w-full items-center justify-between my-0">
      {isCollapsed[index] ? (
        item.title && (
          <p className="font-Poppins">
            {index + 1}. {item.title}
          </p>
        )
      ) : (
        <div />
      )}
      <div className="flex items-center">
        <AiOutlineDelete
          className={`text-[20px] mr-2 ${
            index > 0 ? "cursor-pointer" : "cursor-no-drop"
          }`}
          onClick={() => {
            if (index > 0) {
              const updatedData = [...courseContentData];
              updatedData.splice(index, 1);
              setCourseContentData(updatedData);
            }
          }}
        />
        <MdOutlineArrowDropDown
          fontSize={24}
          style={{
            transform: isCollapsed[index] ? "rotate(180deg)" : "rotate(0)",
          }}
          onClick={() => handleCollapseToggle(index)}
        />
      </div>
    </div>
    {!isCollapsed[index] && (
      <SectionDetails
        item={item}
        index={index}
        handleRemoveLink={handleRemoveLink}
        handleAddLink={handleAddLink}
        setCourseContentData={setCourseContentData}
        courseContentData={courseContentData}
      />
    )}
  </div>
);

// Component to render the section details
interface SectionDetailsProps {
  item: ContentSection;
  index: number;
  handleRemoveLink: (index: number, indexOfLink: number) => void;
  handleAddLink: (index: number) => void;
  setCourseContentData: (course: ContentSection[]) => void;
  courseContentData: ContentSection[];
}

const SectionDetails: React.FC<SectionDetailsProps> = ({
  item,
  index,
  handleRemoveLink,
  handleAddLink,
  setCourseContentData,
  courseContentData,
}) => (
  <>
    <div className="my-3">
      <label className="label">Video Title</label>
      <input
        type="text"
        className="input"
        placeholder="Project plan .."
        value={item.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const updatedData = [...courseContentData];
          updatedData[index].title = e.target.value;
          setCourseContentData(updatedData);
        }}
      />
    </div>
    <div className="my-3">
      <label className="label">Video Url</label>
      <input
        type="text"
        className="input"
        placeholder="Sidder ..."
        value={item.videoUrl}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const updatedData = [...courseContentData];
          updatedData[index].videoUrl = e.target.value;
          setCourseContentData(updatedData);
        }}
      />
    </div>
    <div className="my-3">
      <label className="label">Video Description</label>
      <textarea
        rows={8}
        cols={30}
        className="input !h-min pt-2"
        placeholder="Sidder ..."
        value={item.description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          const updatedData = [...courseContentData];
          updatedData[index].description = e.target.value;
          setCourseContentData(updatedData);
        }}
      />
    </div>
    <br />
    {item.links.map((link, linkIndex) => (
      <LinkInput
        key={linkIndex}
        link={link}
        index={index}
        linkIndex={linkIndex}
        handleRemoveLink={handleRemoveLink}
        setCourseContentData={setCourseContentData}
        courseContentData={courseContentData}
      />
    ))}
    <br />
    <div className="mb-4 inline-block">
      <p
        className="flex items-center text-[18px] cursor-pointer"
        onClick={() => handleAddLink(index)}
      >
        <BsLink45Deg className="mr-2" /> Add Link
      </p>
    </div>
  </>
);

// Component to render the link input fields
interface LinkInputProps {
  link: Link;
  index: number;
  linkIndex: number;
  handleRemoveLink: (index: number, indexOfLink: number) => void;
  setCourseContentData: (course: ContentSection[]) => void;
  courseContentData: ContentSection[];
}

const LinkInput: React.FC<LinkInputProps> = ({
  link,
  index,
  linkIndex,
  handleRemoveLink,
  setCourseContentData,
  courseContentData,
}) => (
  <div className="mb-3 block">
    <div className="w-full flex items-center justify-between">
      <label className="label">Link {linkIndex + 1}</label>
      <AiOutlineDelete
        className={`text-[20px] mr-2 ${
          linkIndex !== 0 ? "cursor-pointer" : "cursor-no-drop"
        }`}
        onClick={() => {
          if (linkIndex !== 0) handleRemoveLink(index, linkIndex);
        }}
      />
    </div>
    <input
      type="text"
      className="input"
      placeholder="Source Code... (Link Title)"
      value={link.title}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const updatedData = [...courseContentData];
        updatedData[index].links[linkIndex].title = e.target.value;
        setCourseContentData(updatedData);
      }}
    />
    <input
      type="text"
      className="input"
      placeholder="Source Code... (Link Url)"
      value={link.url}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const updatedData = [...courseContentData];
        updatedData[index].links[linkIndex].url = e.target.value;
        setCourseContentData(updatedData);
      }}
    />
  </div>
);

// Component to render the "Add New Content" button
interface AddNewContentButtonProps {
  handleNewContent: () => void;
}

const AddNewContentButton: React.FC<AddNewContentButtonProps> = ({
  handleNewContent,
}) => (
  <div>
    <p
      className="flex items-center text-[18px] cursor-pointer"
      onClick={handleNewContent}
    >
      <AiOutlinePlusCircle className="mr-2" /> Add New Content
    </p>
  </div>
);

export default CourseContent;
