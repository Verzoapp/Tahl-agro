"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const LeftSideBar = () => {
  const pathname = usePathname();
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      current: pathname === "/dashboard",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
          />
        </svg>
      ),
    },
    {
      name: "Cooperatives",
      href: "/dashboard/cooperatives",
      current: pathname === "/dashboard/cooperatives",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 1920 1792"
        >
          <path
            fill="currentColor"
            d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353q6 0 43.5 21t97.5 42.5T384 597q67 0 133-23q-5 37-5 66q0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5t62-81t85.5-53.5T602 960q10 0 43 21.5t73 48t107 48t135 21.5t135-21.5t107-48t73-48t43-21.5q61 0 111.5 20t85.5 53.5t62 81t43 97.5t26.5 108.5t14 109t3.5 103.5zM640 256q0 106-75 181t-181 75t-181-75t-75-181t75-181T384 0t181 75t75 181zm704 384q0 159-112.5 271.5T960 1024T688.5 911.5T576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128q81-117 81-256q0-29-5-66q66 23 133 23q59 0 119-21.5t97.5-42.5t43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75t-181-75t-75-181t75-181t181-75t181 75t75 181z"
          />
        </svg>
      ),
    },
    {
      name: "Calendar",
      href: "/dashboard/calendar",
      current: pathname === "/dashboard/calendar",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2Zm160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2Zm-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120Zm59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"
          />
        </svg>
      ),
    },
    {
      name: "Farmers",
      href: "/dashboard/farmer",
      current: pathname === "/dashboard/farmer",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <g fill="currentColor">
            <path d="M18.502 8.838a.269.269 0 0 1-.166-.057a2.253 2.253 0 0 0-1.5-.355a.274.274 0 1 1-.065-.544a2.721 2.721 0 0 1 1.9.467a.274.274 0 0 1-.169.489Zm-6.999.001a.274.274 0 0 1-.168-.49a2.73 2.73 0 0 1 1.9-.467a.275.275 0 0 1 .21.402a.27.27 0 0 1-.27.138a2.242 2.242 0 0 0-1.5.354a.267.267 0 0 1-.172.063Zm1.057.351c-.67 0-1.23.46-1.38 1.08c-.05.18.08.35.27.35h.44a.913.913 0 0 1 .88-1.15a.913.913 0 0 1 .88 1.15h.07c.15 0 .26-.13.23-.28c-.12-.65-.7-1.15-1.39-1.15Zm4.88 0c.67 0 1.23.46 1.38 1.08c.04.18-.09.35-.27.35h-.44a.913.913 0 0 0-.88-1.15c-.51 0-.91.41-.91.91c0 .08.01.16.03.24h-.07a.23.23 0 0 1-.23-.28c.12-.65.69-1.15 1.39-1.15Z" />
            <path d="M12.77 9.86c.29 0 .52.23.52.52c0 .08-.03.17-.06.24h-.92a.522.522 0 0 1 .011-.505a.16.16 0 1 0 .239-.212a.525.525 0 0 1 .21-.043Zm4.46 0a.527.527 0 0 0-.183.032a.16.16 0 1 1-.245.19a.52.52 0 0 0-.032.538h.92a.516.516 0 0 0-.46-.76Zm-2.55.44l-.53 1.71c-.11.35.15.7.52.7h.78c.37 0 .63-.35.52-.7l-.52-1.71a.403.403 0 0 0-.77 0Zm-1.16 3.02c.43.23.94.36 1.48.36s1.05-.13 1.48-.36c.14-.07.3.09.21.23c-.36.55-.98.92-1.69.92s-1.33-.37-1.69-.92c-.09-.14.06-.31.21-.23Z" />
            <path d="M11.604 1.798a7.549 7.549 0 0 1 9.41 2.216a5.5 5.5 0 0 1 4.936 6.053a1.52 1.52 0 0 1 1.028 1.44a1.521 1.521 0 0 1 1.4-1.517h.102a1.514 1.514 0 0 1 1.5 1.5v7.08a2.413 2.413 0 0 1-2.41 2.41h-.34v.78c0 .122-.019.243-.054.358a2.001 2.001 0 0 1 1.804 1.993v4.937A1.913 1.913 0 0 1 27.11 31h-3.3a1.69 1.69 0 0 1-.319-.03H4a1 1 0 0 1-1-1v-3.5a11.974 11.974 0 0 1 6.347-10.577a5.428 5.428 0 0 1-.352-.836a1.277 1.277 0 0 1-.093-.1A5.5 5.5 0 0 1 8.941 4.02a7.558 7.558 0 0 1 2.663-2.222Zm14.143 9.277a.494.494 0 0 0-.237-.085h-.035a.5.5 0 0 0-.495.5v4.47a1.02 1.02 0 0 1-.95 1.03h-.053a1 1 0 0 1-1-1v-1.755h-.007V11.51c0-.27-.2-.5-.47-.52h-.028a.5.5 0 0 0-.495.5v6.504l.043.036v.887a1.414 1.414 0 0 0 .827.956c.17.07.351.107.535.107h1.345v1.78a.222.222 0 0 0 .22.22h1.064a.222.222 0 0 0 .22-.22v-1.78h1.34a1.407 1.407 0 0 0 1.41-1.41v-7.081a.51.51 0 0 0-.5-.5l.007.001h-.035a.514.514 0 0 0-.47.52v4.45a1.02 1.02 0 0 1-.95 1.03h-.053a1 1 0 0 1-1-1v-4.48a.514.514 0 0 0-.232-.438l-.001.003Zm-2.411 9.905a2.41 2.41 0 0 1-1.316-.42v8.405h.548c.026-.123.07-.24.131-.347a1.239 1.239 0 0 1-.002-1.245a1.237 1.237 0 0 1 .006-1.251a1.236 1.236 0 0 1-.163-.657c.018-.648.538-1.137 1.142-1.199a.503.503 0 0 1 .128-.016h.17v-1.738a1.216 1.216 0 0 1-.26-.751v-.15a9.507 9.507 0 0 0-.384-.631Zm.574 4.27a.499.499 0 0 1-.1.01c-.162 0-.267.126-.27.232v.006a.266.266 0 0 0 .117.222a.5.5 0 0 1-.015.83a.245.245 0 0 0-.112.2c0 .09.043.157.103.195a.5.5 0 0 1 .01.844a.245.245 0 0 0-.113.201c0 .09.043.157.103.195a.5.5 0 0 1 .082.786c.045.005.09.013.133.024h3.132V25.25h-3.07ZM24.98 23v1.25h1V23h-1Zm-5.99 5.965V26.3a.517.517 0 0 0-.51-.5h-6.94c-.28 0-.5.22-.5.5v2.665h7.95Zm-10.99 0v-9.63a9.98 9.98 0 0 0-2.995 7.13v2.5H8Zm2.06-11.181v4.786c0 .23.18.41.41.41h9.07c.23 0 .41-.18.41-.41V17.8a9.94 9.94 0 0 0-.96-.482v3.752c0 .46-.51.72-.88.46l-1.971-1.384l-.55.49a.913.913 0 0 1-1.208 0l-.004-.003l-.541-.483l-1.966 1.38a.56.56 0 0 1-.88-.45v-3.761c-.319.139-.63.294-.93.465Zm9.248-3.759c.051-.17.09-.345.114-.525l.116-1.72l.432-.033a1.17 1.17 0 0 0 .156-2.311l-.434-.093l.049-.534A1.485 1.485 0 0 0 19.17 7.6h-1.637a2.31 2.31 0 0 1-1.134-.3H11.81c-.848 0-1.506.72-1.432 1.556l.001.012l.001.023l.03.47l-.467.058a1.17 1.17 0 0 0 .147 2.331h.004l.47-.002l.114 1.753A3.449 3.449 0 0 0 14.1 16.48H16a3.46 3.46 0 0 0 3.253-2.29l.001-.002a1 1 0 0 1 .054-.163ZM14.99 18.16c.598 0 1.088-.289 1.35-.693a4.475 4.475 0 0 1-.34.013h-1.9c-.16 0-.319-.009-.475-.025c.258.41.752.705 1.365.705Zm0 1c-.305 0-.6-.05-.877-.143c.087.103.18.2.281.29l.591.528l.591-.527c.1-.09.192-.186.278-.288c-.273.09-.564.14-.864.14Z" />
          </g>
        </svg>
      ),
    },
    {
      name: "Land groups",
      href: "/dashboard/landGroups",
      current: pathname === "/dashboard/landGroups",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-group"
        >
          <path d="M3 7V5c0-1.1.9-2 2-2h2" />
          <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
          <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
          <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
          <rect width="7" height="5" x="7" y="7" rx="1" />
          <rect width="7" height="5" x="10" y="12" rx="1" />
        </svg>
      ),
    },
    {
      name: "Complaints",
      href: "/dashboard/complaints",
      current: pathname === "/dashboard/complaints",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M16 4.938c-7.732 0-14 4.7-14 10.5c0 1.98.74 3.833 2.016 5.414L2 25.272l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5zm.868 16.437h-1.97v-1.89h1.97v1.89zm-.096-3.28h-1.777l-.176-8.084h2.112l-.16 8.084z"
          />
        </svg>
      ),
    },
    {
      name: "Equipment",
      href: "#",
      current: false,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m15.1 1.81l-2.83 2.84a2.01 2.01 0 0 0 0 2.82l1.41 1.42l-.68.73l1.44 1.44l.73-.73l1.39 1.39c.78.78 2.05.78 2.83 0l2.83-2.84l-7.12-7.07m2.83 8.47L13.7 6.06l1.41-1.41l4.23 4.23l-1.41 1.4m2.77 9.96l-1.41 1.41l-7.79-7.77l-1 1l2.83 2.81l-1.33 1.4C7 24 3.5 20.5 3.5 20.5S-.06 17 4.89 12l1.42-1.4l2.82 2.83l1-1l-7.78-7.75l1.42-1.42L20.7 20.24Z"
          />
        </svg>
      ),
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      height={32}
                      width={32}
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.href
                                    ? "bg-gray-50 text-green-600"
                                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span
                                  className={classNames(
                                    item.current
                                      ? "text-green-600"
                                      : "text-gray-400 group-hover:text-green-600",
                                    "h-6 w-6 shrink-0 flex items-center justify-center"
                                  )}
                                >
                                  {item.svg}
                                </span>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        >
                          <Cog6ToothIcon
                            className="h-[20px] w-[20px] shrink-0 text-gray-400 group-hover:text-green-600"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed xl:fixed xl:inset-y-0 xl:z-10 xl:flex lg:inset-y-0 lg:z-10 lg:flex lg:w-[250px] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-8 mt-[10px] shrink-0 items-center">LOGO</div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-green-700"
                            : "text-gray-600 hover:text-green-700 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal tracking-tight mb-2"
                        )}
                      >
                        <span
                          className={classNames(
                            item.current
                              ? "text-green-700"
                              : "text-gray-500 group-hover:text-green-700",
                            "h-6 w-6 shrink-0 flex items-center justify-center"
                          )}
                        >
                          {item.svg}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 items-center rounded-md p-2 text-sm font-normal leading-6 text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  <Cog6ToothIcon
                    className="h-[20px] w-[20px] shrink-0 text-gray-400 group-hover:text-green-600"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
