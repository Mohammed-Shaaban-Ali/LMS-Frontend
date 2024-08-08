import { apiSlice } from "../../api/apiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    analyticsCourses: builder.query({
      query: () => ({
        url: "get-courses-analytics",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    analyticsUser: builder.query({
      query: () => ({
        url: "get-user-analytics",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    analyticsOrder: builder.query({
      query: () => ({
        url: "get-order-analytics",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});
export const {
  useAnalyticsCoursesQuery,
  useAnalyticsUserQuery,
  useAnalyticsOrderQuery,
} = analyticsApi;
