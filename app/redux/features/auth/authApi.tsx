import { apiSlice } from "../../api/apiSlice";
import { userLogin, userRegistration } from "./authSlice";

type RegisterationResponse = {
  message: string;
  activationToken: string;
};
type RegisterationData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterationResponse, RegisterationData>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(result.data?.activationToken);
          dispatch(userRegistration({ token: result.data?.activationToken }));
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    activation: builder.mutation({
      query: ({ activation_code, activation_token }) => ({
        url: "activate-user",
        body: { activation_code, activation_token },
        method: "POST",
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(result.data?.activationToken);
          dispatch(
            userLogin({
              token: result.data?.activationToken,
              user: result.data?.user,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useRegisterMutation, useActivationMutation ,useLoginMutation} = authApi;
