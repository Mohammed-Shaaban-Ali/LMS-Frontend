"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Route/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [route, setRoute] = useState<string>("Login");
  return (
    <main>
      <Header open={open} setOpen={setOpen} setRoute={setRoute} route={route} />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
