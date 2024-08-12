"use client";
import { FC, useState, useEffect } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Testimonials from "./components/Route/Testimonials";
import FAQSection from "./components/Route/FAQSection";
import Footer from "./components/Route/Footer";

interface Props {}

const Page: FC<Props> = () => {
  // const [open, setOpen] = useState<boolean>(false);
  // const [activeItem, setActiveItem] = useState<number>(0);
  // const [route, setRoute] = useState<string>("Login");

  // Ensure client-side logic does not cause mismatch
  // useEffect(() => {
  // }, []);

  return (
    <div>
      <Heading
        title="E-Learning"
        keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
        description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
      />
      {/* <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      /> */}
      <Hero />
      <Courses />
      <Testimonials />
      <FAQSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
