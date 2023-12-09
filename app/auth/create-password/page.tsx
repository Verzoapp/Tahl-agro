"use client";
import Logo from "@/components/icons/Logo";
import { toast } from "@/components/ui/use-toast";
import { saveToken } from "@/lib/auth";
import {
  useAdminSignUpAfterInviteMutation,
  useGenerateQrCodeDataUrlMutation,
} from "@/src/generated/graphql";
import Link from "next/link";
import { useRouter } from "next/navigation";


import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  password: string;
};

export const QRCODE = "Tahl agro admin";

const CreatePassword = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const inviteId = "b7b70f71-1aaf-4523-9ea4-d9287a163dcb";

  const [adminSignUpAfterInviteMutation, { data, loading, error }] =
    useAdminSignUpAfterInviteMutation();
  const [generateQrCodeDataUrlMutation, { loading: generateloading }] =
    useGenerateQrCodeDataUrlMutation();

  const password = watch("password");

  const showFailureToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      duration: 3000,
    });
  };

  const onSubmitHandler = async (form: FormData) => {
    try {
      const response = await adminSignUpAfterInviteMutation({
        variables: {
          adminInviteId: inviteId,
          ...form,
        },
      });
      const responseToken = response.data?.adminSignUpAfterInvite?.access_token;
      await saveToken(responseToken!);
      const generate = await generateQrCodeDataUrlMutation({
        onCompleted(data) {
          generateQrCodeDataUrlMutation({
            onCompleted(code) {
              localStorage.setItem(QRCODE, code.generateQrCodeDataURL!);
            },
          });
        },
      });
      router.push("/auth/google-auth");
    } catch (error) {
      console.error(error);
      showFailureToast();
    }
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className=" flex items-center justify-center">
            <Logo />
          </span>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Create your password
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Password
                </label>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-[6px]">
                <input
                  id="confirmpassword"
                  name="confirm-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-primary-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-greenhover focus-visible:outline ${
                  loading ? "opacity-70 " : ""
                }`}
              >
                Create password
              </button>
            </div>
          </form>
          <p className="px-8 text-center text-sm text-gray-500 mt-5">
            <Link
              href="/auth/login"
              className="hover:text-primary-greenhover underline underline-offset-4"
            >
              Already have an account? Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;