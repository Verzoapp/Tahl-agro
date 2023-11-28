"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useGenerateQrCodeDataUrlMutation } from "@/src/generated/graphql";
import { QRCODE } from "../create-password/page";

const GoogleAuth = () => {
  const url =
    "data:image/png;base64,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";
  const router = useRouter();

  const code = localStorage.getItem(QRCODE)!;
  console.log(QRCODE);

  console.log(code);

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className=" flex items-center justify-center">
            <svg
              className=" w-[47px] h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47 40"
              fill="none"
            >
              <path
                fill="#2aa249"
                d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
              />
              <defs>
                <linearGradient
                  id="%%GRADIENT_ID%%"
                  x1="33.999"
                  x2="1"
                  y1="16.181"
                  y2="16.181"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="%%GRADIENT_TO%%" />
                  <stop offset="1" stopColor="%%GRADIENT_FROM%%" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Scan the below barcode with your google authenticator app
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex w-full justify-center mb-8">
            <Image src={code} alt="image" width={300} height={300}></Image>
          </div>
          <Link href="/auth/login">
            <button className="flex w-full justify-center rounded-md bg-primary-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-greenhover focus-visible:outline">
              Proceed
            </button>
          </Link>
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

export default GoogleAuth;
