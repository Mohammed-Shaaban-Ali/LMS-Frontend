"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
type Props = {
  children: React.ReactNode;
};

const AdminProtected: React.FC<Props> = ({ children }) => {
  const { user } = useSelector((state: any) => state.auth);
  if (user) {
    const isAdmin = user?.role == "admin";
    // Render children only if authenticated
    return isAdmin ? <div>{children}</div> : redirect("/");
  }
};

export default AdminProtected;
