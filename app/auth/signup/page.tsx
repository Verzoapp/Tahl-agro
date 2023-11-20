import Link from "next/link";
import React from "react";

const Signup = () => {
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
            Create an account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Full name
              </label>
              <div className="mt-[6px]">
                <input
                  id="fullname"
                  name="fullname"
                  type="fullname"
                  autoComplete="fullname"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>
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
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
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
              </div>
              <div className="mt-[6px]">
                <input
                  id="password"
                  name="password"
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
                className="flex w-full justify-center rounded-md bg-primary-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-greenhover focus-visible:outline"
              >
                Sign up
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

export default Signup;
