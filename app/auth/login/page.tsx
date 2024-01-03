"use client"
import Logo from "@/components/icons/Logo";
import { toast } from "@/components/ui/use-toast";
import { saveToken } from "@/lib/auth";
import { useAdminLoginMutation } from "@/src/generated/graphql";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  twoFACode: string
};

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation()

  const showFailureToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      duration: 3000,
    });
  };

  const onSubmitHandler =async (form: FormData) => {
    try {
      const response = await adminLoginMutation({
        variables: {
           ...form,
        },
      })
      const responseToken = response.data?.adminLogin.access_token;
      await saveToken(responseToken!);
      router.push("/dashboard")
    } catch (error) {
      console.error(error);
      showFailureToast()
    }
  }
  
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className=" flex items-center justify-center">
            <Logo />
          </span>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className=" flex flex-col gap-y-6" 
            action="#" 
            method="POST"
            onSubmit={handleSubmit(onSubmitHandler)}
            >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Email address
              </label>
              <div className="mt-[6px]">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="cod"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  2FA Code
                </label>
              </div>
              <div className="mt-[6px]">
                <input
                  id="code"
                  type="code"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                  {...register("twoFACode")}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium hover:text-primary-greenhover text-primary-green "
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-[6px]">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center mt-3 rounded-md bg-primary-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-greenhover focus-visible:outline ${
                  loading ? "opacity-70 " : ""
                }`}
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="px-8 text-center text-sm text-gray-500 mt-5">
            <Link
              href="/auth/create-password"
              className="hover:text-primary-greenhover underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
