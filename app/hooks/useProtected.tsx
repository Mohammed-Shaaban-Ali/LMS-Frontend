import React from "react";
import useUserAuth from "./userAuth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Protected: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useUserAuth();

  return isAuthenticated ? <div>{children}</div> : redirect("/");
};

export default Protected;
