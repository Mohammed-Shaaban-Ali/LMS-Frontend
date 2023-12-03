"use client";
import react, { FC, useState } from "react";
import Heading from "./utils/Heading";
interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="E-Learning"
        keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
        description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
      />
      test
    </div>
  );
};
export default Page;
