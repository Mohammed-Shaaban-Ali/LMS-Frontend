"use client";
import CourseDetails from "@/app/components/courses/CourseDetails";

export default function page({ params }: any) {
  return (
    <div>
      <CourseDetails courseId={params.id} />
    </div>
  );
}
