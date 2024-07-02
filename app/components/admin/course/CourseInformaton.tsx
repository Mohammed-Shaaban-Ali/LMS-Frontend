"use client";
import React, { useState } from "react";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseInfo: {
    name: string;
    description: string;
    price: string;
    estimatedPrice: string;
    tags: string;
    level: string;
    demoUrl: string;
    thumbnail: string | ArrayBuffer | null;
  };
  setCourseInfo: (courseInfo: any) => void;
};

function CourseInformation({
  active,
  setActive,
  courseInfo,
  setCourseInfo,
}: Props) {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: fileReader.result });
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: fileReader.result });
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 text-black dark:text-white">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Course Name</label>
          <input
            type="text"
            name="name"
            required
            value={courseInfo.name}
            onChange={handleInputChange}
            id="name"
            placeholder="MERN Stack LMS Platform with next14"
            className="input"
          />
        </div>
        <br />
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            required
            value={courseInfo.description}
            onChange={handleInputChange}
            id="description"
            placeholder="Course Description"
            className="input !h-min py-2"
            cols={30}
            rows={8}
          />
        </div>
        <br />
        <div className="flex gap-8">
          <div className="w-[50%]">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              required
              value={courseInfo.price}
              onChange={handleInputChange}
              id="price"
              placeholder="Course Price"
              className="input"
            />
          </div>
          <div className="w-[50%]">
            <label className="label">Estimated Price</label>
            <input
              type="number"
              name="estimatedPrice"
              required
              value={courseInfo.estimatedPrice}
              onChange={handleInputChange}
              id="estimatedPrice"
              placeholder="Estimated Price"
              className="input"
            />
          </div>
        </div>
        <br />
        <div>
          <label className="label">Tags</label>
          <input
            type="text"
            name="tags"
            required
            value={courseInfo.tags}
            onChange={handleInputChange}
            id="tags"
            placeholder="Course Tags"
            className="input"
          />
        </div>
        <br />
        <div className="flex gap-8">
          <div className="w-[50%]">
            <label className="label">Level</label>
            <input
              type="text"
              name="level"
              required
              value={courseInfo.level}
              onChange={handleInputChange}
              id="level"
              placeholder="Course Level"
              className="input"
            />
          </div>
          <div className="w-[50%]">
            <label className="label">Demo URL</label>
            <input
              type="text"
              name="demoUrl"
              required
              value={courseInfo.demoUrl}
              onChange={handleInputChange}
              id="demoUrl"
              placeholder="Demo URL"
              className="input"
            />
          </div>
        </div>
        <br />
        <div className="w-full">
          <label className="label">Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`mt-2 w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <img
                src={courseInfo.thumbnail as string}
                alt="thumbnail"
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and Drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => handleSubmit}
            className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#37a39a] border-2 border-[#37a39a] rounded-2xl hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#37a39a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Next</span>
          </button>
          
        </div>
      </form>
      <br />
          <br />
    </div>
  );
}

export default CourseInformation;
