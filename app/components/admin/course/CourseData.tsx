"use client";
import { AddCircle, Delete } from "@mui/icons-material";
import toast from "react-hot-toast";
import NxteAndPrevButtons from "./NxteAndPrevButtons";

type Props = {
  active: number;
  setActive: (active: number) => void;
  benefits: Array<{ title: string }>;
  setBenefits: (benfite: Array<{ title: string }>) => void;
  prerequisites: Array<{ title: string }>;
  setPrerequisites: (prerequisite: Array<{ title: string }>) => void;
};

function CourseData({
  active,
  setActive,
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
}: Props) {
  // Benefits Handlers
  const handleBenefitChange = (i: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[i].title = value;
    setBenefits(updatedBenefits);
  };

  const addBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const removeBenefit = (index: number) => {
    const newBenefits = [...benefits];
    newBenefits.splice(index, 1);
    setBenefits(newBenefits);
  };

  // Prerequisites Handlers
  const handlePrerequisiteChange = (i: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[i].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const addPrerequisite = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const removePrerequisite = (index: number) => {
    const newPrerequisites = [...prerequisites];
    newPrerequisites.splice(index, 1);
    setPrerequisites(newPrerequisites);
  };

  // Navigation Handlers
  const prevOptions = () => {
    setActive(active - 1);
  };

  const nextOptions = () => {
    if (
      benefits.every((b) => b.title) &&
      prerequisites.every((p) => p.title) &&
      benefits.length > 0 &&
      prerequisites.length > 0
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill in all fields to proceed to the next step.");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <div>
        <label className="label text-[20px]">
          What are the benefits for students in this course?
        </label>
        <br />
        {benefits.map((benefit, i) => (
          <div key={i}>
            <input
              type="text"
              name="Benefit"
              placeholder="You will be able to build a Full stack LMS platform ..."
              required
              className="input"
              value={benefit.title}
              onChange={(e) => handleBenefitChange(i, e.target.value)}
            />
            <div className="flex justify-end mt-2">
              <Delete
                onClick={() => removeBenefit(i)}
                className="text-red-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
        <AddCircle
          style={{ margin: "10px 0", cursor: "pointer", width: "30px" }}
          onClick={addBenefit}
          className="text-black dark:text-white"
        />
      </div>
      <br />

      <div>
        <label className="label text-[20px]">
          What are the prerequisites for students in this course?
        </label>
        <br />
        {prerequisites.map((prerequisite, i) => (
          <div key={i}>
            <input
              type="text"
              name="Prerequisite"
              placeholder="You should have basic knowledge of HTML, CSS, and JavaScript ..."
              required
              className="input"
              value={prerequisite.title}
              onChange={(e) => handlePrerequisiteChange(i, e.target.value)}
            />
            <div className="flex justify-end mt-2">
              <Delete
                onClick={() => removePrerequisite(i)}
                className="text-red-400 cursor-pointer"
              />
            </div>
          </div>
        ))}
        <AddCircle
          style={{ margin: "10px 0", cursor: "pointer", width: "30px" }}
          onClick={addPrerequisite}
          className="text-black dark:text-white"
        />
      </div>
      <br />
      <NxteAndPrevButtons prevOptions={prevOptions} nextOptions={nextOptions} />
    </div>
  );
}

export default CourseData;
