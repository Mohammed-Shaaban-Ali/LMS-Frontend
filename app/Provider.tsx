"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/api/apiSlice";

import Loading from "./components/Loading";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Custom>{children}</Custom>
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, error } = useLoadUserQuery({}, { skip: false });

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Providers;
