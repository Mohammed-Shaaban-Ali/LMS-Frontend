"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/api/apiSlice";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Route/Footer";
import Loading from "./components/Loading";

type Props = {
  children: any;
};

function Providers({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [route, setRoute] = useState<string>("Login");
  return (
    <Provider store={store}>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Custom>
            <Header
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              route={route}
            />
            {children}
            <Footer />
          </Custom>
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return children;
};

export default Providers;
