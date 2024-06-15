"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useLoginMutation } from "@/redux/features/auth/authApi";

type Props = { setRoute: (route: string) => void };

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
});

function Login({ setRoute }: Props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      const data = { email, password };
      await login(data);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const [login, { isLoading, isSuccess, error, data }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Login successful";
      toast.success(message);
      setRoute("");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        console.log({ errorData });
        toast.error(errorData.data?.mesage);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="lable">
          Enter Your Email
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="mohammed132@email.com"
          className={`input ${
            errors.email && touched.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}

        {/* Password */}
        <div className="mt-6">
          <label htmlFor="password" className="lable">
            Enter Your Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password#%"
            className={`input ${
              errors.password && touched.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="mt-6 inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      {/* social login */}
      <div className="mt-6">
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or Join With
        </h5>
        <div className="flex items-center justify-center gap-4 mt-3 text-3xl ">
          <FcGoogle
            onClick={() => signIn("google")}
            width={60}
            className="cursor-pointer opacity-70 hover:opacity-100 transition"
          />
          <AiFillGithub
            onClick={() => signIn("github")}
            width={40}
            className="cursor-pointer opacity-70 hover:opacity-100 transition fill-black dark:fill-white"
          />
        </div>
      </div>

      <div className="mt-6">
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Not have any account?{" "}
          <span
            className="text-blue-500 font-bold cursor-pointer"
            onClick={() => setRoute("Sing-Up")}
          >
            Sing up
          </span>
        </h5>{" "}
      </div>
    </div>
  );
}

export default Login;
