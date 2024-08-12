"use client";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";
import { useEffect } from "react";
import { useCookies } from "next-client-cookies";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const useInitializeApp = () => {
  const cookies = useCookies();
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await store.dispatch(
          apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
        );
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    initializeApp();
  }, [cookies]);
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
