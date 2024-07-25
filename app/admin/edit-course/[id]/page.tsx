import EditCourse from "@/app/components/admin/course/EditCourse";
import React from "react";

function page({ params }: any) {
  const id = params?.id;
  return <EditCourse id={id} />;
}

export default page;
