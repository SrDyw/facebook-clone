"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const loginData = await signIn("credentials", {
      username: values.username,
      password: values.password,
    });

    if (loginData?.error) {
      console.log(loginData.error);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-white"
            >
              Username:
            </label>
            <div className="mt-2">
              <input
                id="username"
                {...register("username")}
                type="text"
                required
                autoComplete="username"
                placeholder="johndoe123"
                className="block w-full rounded-md bg-[#1c2433] px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white"
              >
                Password
              </label>
              {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password")}
                type="password"
                required
                autoComplete="current-password"
                placeholder="***************"
                className="block w-full rounded-md bg-[#1c2433] px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
