"use client";

import { store, useInitializeApp } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/api/apiSlice";

import Loading from "./components/Loading";

type Props = {
  children: React.ReactNode;
};

function AppInitializer({ children }: { children: React.ReactNode }) {
  useInitializeApp();
  return children;
}
function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AppInitializer>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Custom>{children}</Custom>
            <Toaster position="top-center" reverseOrder={false} />
          </ThemeProvider>
        </AppInitializer>
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
