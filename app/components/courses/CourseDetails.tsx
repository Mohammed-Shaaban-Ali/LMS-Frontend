import React from "react";

type Props = {
  courseId: string;
};

export default function CourseDetails({ courseId }: Props) {
  console.log(courseId);
  return <div>CourseDetails</div>;
}
