"use client";
import { AddCircle, Delete } from "@mui/icons-material";
import toast from "react-hot-toast";
import NxteAndPrevButtons from "./NxteAndPrevButtons";

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
      <NxteAndPrevButtons prevOptions={prevOptions} nextOptions={nextOptions} />
    </div>
  );
}

export default CourseData;
