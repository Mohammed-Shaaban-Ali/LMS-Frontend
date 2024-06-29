"use client";
import { AddCircle, Delete } from "@mui/icons-material";
import toast from "react-hot-toast";

type Props = {
  active: number;
  setActive: (active: number) => void;
  benfites: any;
  setBenfites: (benfite: any) => void;
  prerequisites: any;
  setPrerequisites: (prerequisite: any) => void;
};

function CourseData({
  active,
  setActive,
  benfites,
  setBenfites,
  setPrerequisites,
  prerequisites,
}: Props) {
  // Benfites
  const handleBenfiteChange = (i: number, value: any) => {
    const updateBenfites = [...benfites];
    updateBenfites[i].title = value;
    setBenfites(updateBenfites);
  };
  const addBenfites = () => {
    setBenfites([...benfites, { title: "" }]);
  };
  const removeBenfites = (index: number) => {
    const newBenfites = benfites
      .slice(0, index)
      .concat(benfites.slice(index + 1));
    setBenfites(newBenfites);
  };
  //   ----------------------------------------------------------------

  //   rerequisites
  const handlePrerequisiteChange = (i: number, value: any) => {
    const updatePrerequisites = [...prerequisites];
    updatePrerequisites[i].title = value;
    setPrerequisites(updatePrerequisites);
  };
  const addPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };
  const removePrerequisites = (index: number) => {
    const newPrerequisites = prerequisites
      .slice(0, index)
      .concat(prerequisites.slice(index + 1));
    setPrerequisites(newPrerequisites);
  };
  //   ----------------------------------------------------------------
  //   prevOptions
  const prevOptions = () => {
    setActive(active - 1);
  };
  // nextOptions
  const nextOptions = () => {
    if (
      benfites[benfites.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== "" &&
      benfites.length > 0 &&
      prerequisites.length > 0
    )
      setActive(active + 1);
    else toast.error("Plese fill the fieds for go to next");
  };
  return (
    <div className="w-[80%] m-auto mt-24 block ">
      <div>
        <label className=" lable text-[20px] ">
          What are the benfites for students in this course
        </label>
        <br />
        {benfites.map((benfite: any, i: number) => (
          <div key={i}>
            <input
              type="text"
              name="Benfite"
              placeholder="You will be able to build a Full stack LMS platform ..."
              required
              className="input"
              value={benfite.title}
              onChange={(e) => handleBenfiteChange(i, e.target.value)}
            />
            <div className=" flex justify-end mt-2">
              <Delete
                onClick={() => removeBenfites(i)}
                className=" text-red-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
        <AddCircle
          style={{ margin: "10px 0", cursor: "pointer", width: "30px" }}
          onClick={addBenfites}
          className="text-black dark:text-white"
        />
      </div>
      <br />
      
      <div>
        <label className=" lable text-[20px] ">
          What are the prerequisites for students in this course
        </label>
        <br />
        {prerequisites.map((prerequisite: any, i: number) => (
          <div key={i}>
            <input
              type="text"
              name="Benfite"
              placeholder="You will be able to build a Full stack LMS platform ..."
              required
              className="input "
              value={prerequisite.title}
              onChange={(e: any) => handlePrerequisiteChange(i, e.target.value)}
            />
            <div className=" flex justify-end mt-2">
              <Delete
                onClick={() => removePrerequisites(i)}
                className=" text-red-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
        <AddCircle
          style={{ margin: "10px 0", cursor: "pointer", width: "30px" }}
          onClick={addPrerequisites}
          className="text-black dark:text-white"

        />
      </div>
      <br />
      <div className="w-full flex items-center justify-between">
        <button
          onClick={prevOptions}
          className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#37a39a] border-2 border-[#37a39a] rounded-2xl hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#37a39a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute left-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </span>
          <span className="relative">Prev</span>
        </button>

        <button
          onClick={nextOptions}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CourseData;
