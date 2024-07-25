"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const AdminProtected: React.FC<Props> = ({ children }) => {
  const { user } = useSelector((state: any) => state.auth);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (user && user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  if (!user) {
    return null; // Or render a loading spinner or message while user data is being fetched
  }

  return <>{user.role === "admin" ? children : null}</>;
};

export default AdminProtected;
