"use client";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashbordWidgest from "./Widgets/DashbordWidgest";

type Props = {
  isDashbord?: boolean;
};

function DashboardHero({ isDashbord }: Props) {
  const [open, setopen] = useState(false);
  return (
    <div>
      <DashboardHeader open={open} setOpen={setopen} />
      {isDashbord && <DashbordWidgest open={open} />}
    </div>
  );
}

export default DashboardHero;
