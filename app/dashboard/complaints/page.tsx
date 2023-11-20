"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const people = [
  {
    name: "Farmer A",
    title: "Cooperative A",
    role: "Farmer",
    email: "janecoopdder@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer B",
    title: "Cooperative B",
    role: "Farmer",
    email: "janecoopgger@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer C",
    title: "Cooperative C",
    role: "Farmer",
    email: "janecodder@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer D",
    title: "Cooperative D",
    role: "Farmer",
    email: "janecoohher@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer E",
    title: "Cooperative A",
    role: "Farmer",
    email: "janecooqer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer F",
    title: "Cooperative F",
    role: "Farmer",
    email: "janecoouer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer G",
    title: "Cooperative G",
    role: "Farmer",
    email: "janecooyer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer H",
    title: "Cooperative A",
    role: "Farmer",
    email: "janecooeer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer T",
    title: "Cooperative Y",
    role: "Farmer",
    email: "janecooter@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer Y",
    title: "Cooperative T",
    role: "Farmer",
    email: "janecoorer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer N",
    title: "Cooperative T",
    role: "Farmer",
    email: "janecoorder@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Farmer A",
    title: "Cooperative T",
    role: "Farmer",
    email: "janecooressr@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Cooperative T",
    role: "Farmer",
    email: "janecooffrer@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Cooperative T",
    role: "Farmer",
    email: "janecoorerxdd@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function Complaints() {
  const [isActive, setIsActive] = useState("unresolved-complaints");
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight  mb-[-53px] text-gray-600">
          Complaints
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
        </div>
      </div>
      <Tabs
        defaultValue="unresolved-complaints"
        className=" flex flex-col items-end justify-end focus:outline-none"
      >
        <TabsList className=" px-[4px]">
          <TabsTrigger
            className={
              isActive === "unresolved-complaints"
                ? " border border-gray-100 bg-white text-gray-600 tracking-tight font-normal focus:outline-none"
                : "text-gray-600 tracking-tight opacity-80 focus:outline-none font-normal"
            }
            value="unresolved-complaints"
            onClick={() => {
              setIsActive("unresolved-complaints");
            }}
          >
            Pending complaints
          </TabsTrigger>
          <TabsTrigger
            className={
              isActive === "resolved-complaints"
                ? " border border-gray-100 bg-white text-gray-600 tracking-tight font-normal focus:outline-none"
                : "text-gray-600 tracking-tight opacity-80 focus:outline-none font-normal"
            }
            value="resolved-complaints"
            onClick={() => {
              setIsActive("resolved-complaints");
            }}
          >
            Resolved complaints
          </TabsTrigger>
        </TabsList>
        <TabsContent value="unresolved-complaints" className=" w-full pb-5">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 rounded-md bg-white shadow cursor-pointer"
              >
                <div className="flex w-full items-center justify-between p-5 pb-2">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 tracking-tight">
                        {person.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.role}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {person.title}
                    </p>
                  </div>
                </div>
                <div className="  p-5 pt-2">
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="grid">
                      <CardTitle className=" text-sm text-gray-600 tracking-tight font-medium">
                        Complaint
                      </CardTitle>
                      <CardDescription className=" text-sm text-gray-500 mt-1">
                        Farm equipment not received
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="resolved-complaints" className=" w-full pb-5">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 rounded-md bg-white shadow cursor-pointer"
              >
                <div className="flex w-full items-center justify-between p-5 pb-2">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 tracking-tight">
                        {person.name}
                      </h3>
                      <span className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                        {person.role}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {person.title}
                    </p>
                  </div>
                </div>
                <div className="  p-5 pt-2">
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="grid">
                      <div className=" flex flex-row gap-x-3 items-center">
                        <CardTitle className=" text-sm text-gray-600 tracking-tight font-medium">
                          Complaint
                        </CardTitle>
                        <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                          Resolved
                        </div>
                      </div>

                      <CardDescription className=" text-sm text-gray-500 mt-1">
                        Farm equipment not received
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
