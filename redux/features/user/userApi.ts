import { apiSlice } from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "/update-user-avatar",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (name) => ({
        url: "/update-user-info",
        method: "PUT",
        body: { name },
        credentials: "include" as const,
      }),
    }),
    changePassword: builder.mutation<
      { oldPassword: string; newPassword: string },
      any
    >({
      query: ({ oldPassword, newPassword }) => ({
        url: "/update-user-password",
        method: "put",
        body: { oldPassword, newPassword },
        credentials: "include" as const,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "get-all-users",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    updateUserRole: builder.mutation({
      query: (data) => ({
        url: `update-user-role`,
        body: data,
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useUpdateUserInfoMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = userApi;
