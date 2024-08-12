"use client";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Protected from "@/app/hooks/useProtected";
import Heading from "@/app/utils/Heading";
import Profile from "@/app/components/profile/profile";

interface Props {}

const Page: FC<Props> = (props) => {
  const user = useSelector((state: any) => state.auth.user);
  const { data } = useSession();

  return (
    <>
      <Protected>
        <Heading
          title={`${user?.name} profile`}
          keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
          description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
        />

        <Profile user={user} data={data} />
      </Protected>
    </>
  );
};
export default Page;
