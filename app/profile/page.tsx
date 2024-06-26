"use client";
import { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import { useSelector } from "react-redux";
import Profile from "../components/profile/Profile";
import { useSession } from "next-auth/react";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(6);
  const [route, setRoute] = useState<string>("Login");
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
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} data={data}/>
      </Protected>
    </>
  );
};
export default Page;
