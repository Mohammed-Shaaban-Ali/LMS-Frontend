import Heading from "../utils/Heading";
import Hero from "../components/Route/Hero";
import Courses from "../components/Route/Courses";
import Testimonials from "../components/Route/Testimonials";
import FAQSection from "../components/Route/FAQSection";
import { FC } from "react";

interface Props {}

const Page: FC<Props> = () => {
  return (
    <div>
      <Heading
        title="E-Learning"
        keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
        description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
      />

      <Hero />
      <Courses />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Page;
