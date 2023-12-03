"use client";
import { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="E-Learning"
        keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
        description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};
export default Page;
