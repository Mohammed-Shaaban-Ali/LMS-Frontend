import { apiSlice } from "../../api/apiSlice";

type RegisterationResponse = {
  message: string;
  activationToken: string;
};
type RegisterationData = {};

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation<RegisterationResponse, RegisterationData>({
      query: (avatar) => ({
        url: "/update-user-avatar",
        method: "PUT",
        body: {avatar},
        credentials: "include" as const,
      }),
    }),

    
  }),
});
export const {
useUpdateAvatarMutation
} = userApi;
