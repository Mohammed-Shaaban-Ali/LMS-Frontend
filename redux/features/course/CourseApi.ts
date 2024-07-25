import { apiSlice } from "../../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "create-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllcourse: builder.query({
      query: () => ({
        url: "get-all-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteCours: builder.mutation({
      query: (id) => ({
        url: `delete-course/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    getSingleCourse: builder.query({
      query: (id) => ({
        url: `get-course-admin/${id}`,
        method: "GET",
        credentials: "include" as const,
        keepUnusedDataFor: 0,
      }),
    }),
    updateCourse: builder.mutation({
      query(data) {
        const { id, finalCourseData } = data;
        return {
          url: `eidt-course/${id}`,
          method: "PUT",
          body: finalCourseData,
          credentials: "include" as const,
        };
      },
    }),
  }),
});
export const {
  useCreateCourseMutation,
  useGetAllcourseQuery,
  useDeleteCoursMutation,
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
} = courseApi;
