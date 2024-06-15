"use client";
import React, { useEffect } from "react";
import useUserAuth from "./userAuth";
import { redirect } from "next/navigation";
type Props = {
  children: React.ReactNode;
};

const Protected: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useUserAuth();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      redirect("/");
    }
  }, [isAuthenticated]);

  // Render children only if authenticated
  return isAuthenticated ? <div>{children}</div> : null;
};

export default Protected;
