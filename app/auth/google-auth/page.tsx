"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const GoogleAuth = () => {
    const url ="data:image/png;base64,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"
    const router = useRouter()
    const handleSubmit = () => {
        router.push('/auth/login');
    }

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
                <Image src={url} alt="image" width={300} height={300}></Image>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-greenhover focus-visible:outline"
            >
              Proceed
            </button>
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
