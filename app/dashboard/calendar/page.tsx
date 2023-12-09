"use client";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTaskModal from "@/components/modals/addTaskModal";
import ViewTaskModal from "@/components/modals/viewTaskModal";
import DailyTasksModal from "@/components/modals/dailyTasksModal";
import { useGetActivitiesQuery } from "@/src/generated/graphql";

const meetings = [
  {
    id: 1,
    date: "June 10th, 2022",
    time: "4:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Abraham Ayegba",
    task: "Farm clearing",
    location: "Kogi west",
  },
  {
    id: 2,
    date: "June 12th, 2022",
    time: "1:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Favour Obafemi",
    task: "Fertilizer application",
    location: "Lagos",
  },
  {
    id: 3,
    date: "June 14th, 2022",
    time: "3:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Tamara",
    task: "Crop planting",
    location: "Anambra",
  },
  {
    id: 4,
    date: "June 30th, 2022",
    time: "9:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Simi sola",
    task: "Farm clearing",
    location: "Ilorin",
  },
  {
    id: 5,
    date: "June 16th, 2022",
    time: "2:00 PM",
    datetime: "2022-01-10T17:00",
    task: "Crop watering",
    name: "Farmer D",
    location: "Kogi south",
  },
  {
    id: 6,
    date: "July 10th, 2022",
    time: "3:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Farmer H",
    task: "Farm clearing",
    location: "Lagos",
  },
  {
    id: 7,
    date: "January 10th, 2022",
    time: "8:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Farmer T",
    task: "Crop planting",
    location: "Adamawa",
  },
  {
    id: 8,
    date: "February 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Abiodun bidemi",
    task: "Fertilizer application",
    location: "Ibadan",
  },
  //   {
  //     id: 8,
  //     date: "January 10th, 2022",
  //     time: "5:00 PM",
  //     datetime: "2022-01-10T17:00",
  //     name: "Leslie Alexander",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     location: "Starbucks",
  //   },
  //   {
  //     id: 9,
  //     date: "January 10th, 2022",
  //     time: "5:00 PM",
  //     datetime: "2022-01-10T17:00",
  //     name: "Leslie Alexander",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     location: "Starbucks",
  //   },
  // More meetings...
];

interface Activity {
  id: string;
  name: string ;
  updatedAt: any;
  adminId: string;
  cropProfile:{
    cropName: String
  };
  admin: {
    __typename?: 'Admin';
    fullname?: string;
    // Add more properties if needed
  }
}

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isActive, setIsActive] = useState("Upcoming-tasks");
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const [openViewTaskModal, setOpenViewTaskModal] = useState(false);
  const [openDailyTasksModal, setOpenDailyTasksModal] = useState(false);
  const getActivity = useGetActivitiesQuery()
  const activityList = getActivity.data?.getActivities
  const [matchingData, setMatchingData] = useState<Activity[]>([]); 
  const handleSelect = () => {
    const selectedDate = date?.toDateString();
    const filteredData: any = activityList?.filter(
      item => new Date(item?.updatedAt).toDateString() === selectedDate
    ); 
    setMatchingData(filteredData);
    setOpenDailyTasksModal(true)
    date ? console.log(selectedDate) : console.log("date is undefined")
    
  };
  console.log(matchingData)
  return (
    <div>
      <div className="flex items-center justify-between space-y-2 lg:px-[40px] xl:px-[40px]">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 mb-[-42px] pl-[6px]">
          Calendar
        </h2>
      </div>
      <div className=" flex-1 lg:px-[48px] xl:px-[48px]">
        <Tabs
          defaultValue="Upcoming-tasks"
          className=" flex flex-col items-end justify-end focus:outline-none"
        >
          <TabsList className=" px-[4px]">
            <TabsTrigger
              className={
                isActive === "Upcoming-tasks"
                  ? " border border-gray-100 bg-white text-gray-600 tracking-tight font-normal focus:outline-none"
                  : "text-gray-600 tracking-tight opacity-80 focus:outline-none font-normal"
              }
              value="Upcoming-tasks"
              onClick={() => {
                setIsActive("Upcoming-tasks");
              }}
            >
              Upcoming tasks
            </TabsTrigger>
            <TabsTrigger
              className={
                isActive === "Completed-tasks"
                  ? " border border-gray-100 bg-white text-gray-600 tracking-tight font-normal focus:outline-none"
                  : "text-gray-600 tracking-tight opacity-80 focus:outline-none font-normal"
              }
              value="Completed-tasks"
              onClick={() => {
                setIsActive("Completed-tasks");
              }}
            >
              Completed tasks
            </TabsTrigger>
            <TabsTrigger
              className={
                isActive === "Overdue-tasks"
                  ? " border border-gray-100 bg-white text-gray-600 tracking-tight font-normal focus:outline-none"
                  : "text-gray-600 tracking-tight opacity-80 focus:outline-none font-normal"
              }
              value="Overdue-tasks"
              onClick={() => {
                setIsActive("Overdue-tasks");
              }}
            >
              Overdue
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Upcoming-tasks" className=" w-full">
            <div className=" flex flex-row w-full h-auto mt-6">
              <div className=" w-2/5 flex items-start justify-start flex-col">
                <p className=" text-sm font-medium text-gray-600 tracking-tight mb-2">
                  Select a date to view tasks
                </p>
                <div className=" w-full h-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  onDayClick={handleSelect}
                  className="rounded-md border flex justify-center w-10/12"
                />
                  <Link
                    href="/dashboard/calendar/create-activity"
                   
                    className="mt-8 w-10/12 block text-center rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-3 py-2 text-sm font-medium text-white"
                  >
                    Create activity
                  </Link>
                  <div>
                    <Link
                      href="/dashboard/calendar/activity-to-farm-lot"

                      className="mt-8 w-10/12 block text-center rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-3 py-2 text-sm font-medium text-white"
                    >
                      Add activity to farm lot
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-3/5 flex flex-col pr-4">
                <p className=" pl-7 border-b border-b-gray-100 text-sm font-medium text-gray-600 tracking-tight pb-2">
                  Upcoming Tasks this month
                </p>
                <section className="mt-12 md:mt-0 w-full">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 h-[550px] overflow-y-auto"
                  >
                    {meetings.map((meeting) => (
                      <li
                        key={meeting.id}
                        onClick={() => setOpenViewTaskModal(true)}
                        className="relative py-5 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                            <div className="flex gap-x-4">
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-medium leading-6 text-gray-600 tracking-tight">
                                  <a className=" flex items-center gap-x-3">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {meeting.name}
                                    <span className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20 ">
                                      farmer
                                    </span>
                                  </a>
                                </p>
                                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                  <a className="relative truncate hover:underline">
                                    {meeting.location}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-600 tracking-tight">
                                  {meeting.task}
                                </p>
                                <div className="flex space-x-3 items-center text-gray-500 tracking-tight text-[13px] mt-1">
                                  <dt className="mt-0.5">
                                    <span className="sr-only">Date</span>
                                    <CalendarIcon
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </dt>
                                  <dd>
                                    <time dateTime={meeting.datetime}>
                                      {meeting.date} at {meeting.time}
                                    </time>
                                  </dd>
                                </div>
                              </div>
                              <ChevronRightIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Completed-tasks" className=" w-full">
            <div className=" flex flex-row w-full h-auto mt-6">
              <div className=" w-2/5 flex items-start justify-start flex-col">
                <p className=" text-sm font-medium text-gray-600 tracking-tight mb-2">
                  Select a date to view tasks
                </p>
                <div className=" w-full h-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={() => {
                    // Assuming your data array is stored in a variable named 'dataArray'
                    setDate;
                    const matchingData = activityList?.filter(item => {
                      // Assuming 'updatedAt' is the property representing the date in your data
                      const itemDate = new Date(item?.updatedAt).toDateString();
                      const selectedDate = date?.toDateString();
                      return itemDate === selectedDate;
                    });
                  
                    console.log('Matching Data:', matchingData);
                  
                    // Other actions you want to perform
                     // Assuming this is your setter function
                  }}
                  className="rounded-md border flex justify-center w-10/12"
                />
                  <button
                    type="button"
                    onClick={() => setOpenAddTaskModal(true)}
                    className="mt-8 w-10/12 rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-3 py-2 text-sm font-medium text-white"
                  >
                    Add task
                  </button>
                </div>
              </div>
              <div className=" w-3/5 flex flex-col pr-4">
                <p className=" pl-7 border-b border-b-gray-100 text-sm font-medium text-gray-600 tracking-tight pb-2">
                  Completed Tasks this month
                </p>
                <section className="mt-12 md:mt-0 w-full">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 h-[550px] overflow-y-auto"
                  >
                    {meetings.map((meeting) => (
                      <li
                        key={meeting.id}
                        className="relative py-5 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                            <div className="flex gap-x-4">
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-medium leading-6 text-gray-600 tracking-tight">
                                  <a className=" flex items-center gap-x-3">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {meeting.name}
                                    <span className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                                      farmer
                                    </span>
                                  </a>
                                </p>
                                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                  <a className="relative truncate hover:underline">
                                    {meeting.location}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <div className=" flex flex-row space-x-3">
                                  <p className="text-sm leading-6 text-gray-600 tracking-tight">
                                    {meeting.task}
                                  </p>
                                  <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                                    Completed
                                  </div>
                                </div>
                                <div className="flex space-x-3 items-center text-gray-500 tracking-tight text-[13px] mt-1">
                                  <dt className="mt-0.5">
                                    <span className="sr-only">Date</span>
                                    <CalendarIcon
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </dt>
                                  <dd>
                                    <time dateTime={meeting.datetime}>
                                      {meeting.date} at {meeting.time}
                                    </time>
                                  </dd>
                                </div>
                              </div>
                              <ChevronRightIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Overdue-tasks" className=" w-full">
            <div className=" flex flex-row w-full h-auto mt-6">
              <div className=" w-2/5 flex items-start justify-start flex-col">
                <p className=" text-sm font-medium text-gray-600 tracking-tight mb-2">
                  Select a date to view tasks
                </p>
                <div className=" w-full h-auto">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border flex justify-center w-10/12"
                  />
                  <button
                    type="button"
                    onClick={() => setOpenAddTaskModal(true)}
                    className="mt-8 w-10/12 rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-3 py-2 text-sm font-medium text-white"
                  >
                    Add task
                  </button>
                </div>
              </div>
              <div className=" w-3/5 flex flex-col pr-4">
                <p className=" pl-7 border-b border-b-gray-100 text-sm font-medium text-gray-600 tracking-tight pb-2">
                  Overdue Tasks this month
                </p>
                <section className="mt-12 md:mt-0 w-full">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 h-[550px] overflow-y-auto"
                  >
                    {meetings.map((meeting) => (
                      <li
                        key={meeting.id}
                        className="relative py-5 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                            <div className="flex gap-x-4">
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-medium leading-6 text-gray-600 tracking-tight">
                                  <a className=" flex items-center gap-x-3">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {meeting.name}
                                    <span className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                                      farmer
                                    </span>
                                  </a>
                                </p>
                                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                  <a className="relative truncate hover:underline">
                                    {meeting.location}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <div className=" flex flex-row space-x-3">
                                  <p className="text-sm leading-6 text-gray-600 tracking-tight">
                                    {meeting.task}
                                  </p>
                                  <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">
                                    Overdue
                                  </div>
                                </div>
                                <div className="flex space-x-3 items-center text-gray-500 tracking-tight text-[13px] mt-1">
                                  <dt className="mt-0.5">
                                    <span className="sr-only">Date</span>
                                    <CalendarIcon
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </dt>
                                  <dd>
                                    <time dateTime={meeting.datetime}>
                                      {meeting.date} at {meeting.time}
                                    </time>
                                  </dd>
                                </div>
                              </div>
                              <ChevronRightIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <AddTaskModal
        openAddTaskModal={openAddTaskModal}
        setOpenAddTaskModal={setOpenAddTaskModal}
      />
      <ViewTaskModal
        openViewTaskModal={openViewTaskModal}
        setOpenViewTaskModal={setOpenViewTaskModal}
      />
      <DailyTasksModal
        activity={matchingData}
        openDailyTasksModal={openDailyTasksModal}
        setOpenDailyTasksModal={setOpenDailyTasksModal}
      />
    </div>
  );
};

export default CalendarPage;
