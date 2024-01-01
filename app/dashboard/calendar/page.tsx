"use client";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTaskModal from "@/components/modals/addTaskModal";
import ViewTaskModal from "@/components/modals/viewTaskModal";
import DailyTasksModal from "@/components/modals/dailyTasksModal";
import { useGetActivitiesQuery, useGetCalendarByCooperativeQuery, useGetGeoCorpsQuery, useGetUpcomingActivitiesByCooperativeQuery } from "@/src/generated/graphql";

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

interface CalendarActivity {
  farmLotname: string;
  calendarActivity: {
    activity: {
      name: string;
    };
    startTime: any;
    endTime: any;
  };
}
interface ActivityDetails {
  farmLotname: string;
  calendarActivity: {
    activity: {
      name: string;
    };
    startTime: string;
    endTime: string;
  };
}



const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isActive, setIsActive] = useState("Upcoming-tasks");
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const [openViewTaskModal, setOpenViewTaskModal] = useState(false);
  const [openDailyTasksModal, setOpenDailyTasksModal] = useState(false);
  const getGeoCorps = useGetGeoCorpsQuery()
  const geoCorpList = getGeoCorps.data?.getGeoCorps
  const [matchingData, setMatchingData] = useState<CalendarActivity[]>([]); 
  const [showActivity, setShowActivity] = useState<ActivityDetails>();
  const [coorperativeId, setCooperativeId] = useState("")
  const getCalenderByCooperative = useGetCalendarByCooperativeQuery({
    variables: {
       cooperativeId: coorperativeId
    },
  })

  const getUpcomingActivitiesByCorp = useGetUpcomingActivitiesByCooperativeQuery({
    variables: {
       cooperativeId: coorperativeId
    },
  })

  const upcomingActivitiesList = getUpcomingActivitiesByCorp.data?.getUpcomingActivitiesByCooperative
  const activitiesByCorpList = getCalenderByCooperative.data?.getCalendarByCooperative

  useEffect(() => {
    const handleSelect = () => {
      const selectedDate = date?.toDateString();
      // Map through activitiesByCorpList and extract activitiesForDay for each selected date
      const filteredData: any = activitiesByCorpList?.map(
        item => item?.activitiesForDay?.filter(
          activity => new Date(activity?.calendarActivity?.startTime).toDateString() === selectedDate
        )
      );
      const flattenedData = filteredData?.flat();
      setMatchingData(flattenedData);
    };

    // Call the handleSelect function when the date changes
    handleSelect();
  }, [date, activitiesByCorpList]);

  const handleClick = (activity:any) => {
      setShowActivity(activity)
  }

  const getAllUpcomingActivities = upcomingActivitiesList?.map(item => item?.activitiesForDay?.map(item => item))
  const getCorpName = geoCorpList?.find(item => item?.id === coorperativeId)?.name
  
  return (
    <div>
      <div className="flex justify-between space-y-2 lg:px-[40px] xl:px-[40px] pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 mb-[-42px] pl-[6px]">
          Calendar for {getCorpName}
        </h2>
        <div className="flex h-[70px] flex-col items-start mb-4">
          <label
              htmlFor="First Name"
              className=" text-2xl font-bold leading-4 text-gray-600 tracking-tight mb-4"
            >
              {" "}
              Select Cooperative
          </label>
          <Select
            value={coorperativeId}
            onValueChange={(value) =>
              setCooperativeId(value)
            }
           >
             <SelectTrigger className="border border-gray-100 bg-gray-50 w-[400px] rounded-lg h-10 text-sm focus:outline-none px-3 py-2">
               <SelectValue placeholder="Select Input Unit" />
             </SelectTrigger>
             <SelectContent className="border border-gray-100 bg-gray-50 w-full z-[200] shadow-sm text-gray-800">
                  <SelectGroup>
                      {
                        geoCorpList?.map((item) => (
                          <SelectItem
                            className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                            value={item?.id || ""}
                            key={item?.id}
                          >
                            {
                              item?.name
                            }
                          </SelectItem>
                        ))
                      }
               </SelectGroup>
             </SelectContent>
          </Select>
        </div>
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
                  onSelect={(newDate) => {
                    setDate(newDate);
                    setOpenDailyTasksModal(true)  
                  }}
                  className="rounded-md border flex justify-center w-10/12"
                />
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
                    {getAllUpcomingActivities?.flat().map((activity, index) => {
                      const activityCreatedDate = activity?.calendarActivity?.startTime;
                      const options: Intl.DateTimeFormatOptions = {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      };

                      const formatter = new Intl.DateTimeFormat('en-US', options);
                      const formattedDate = formatter.format(new Date(activityCreatedDate));
                      return (
                        <li
                          key={index}
                          onClick={() => {setOpenViewTaskModal(true); handleClick(activity)}}
                          className="relative py-5 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                              <div className="flex gap-x-4">
                                <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-medium leading-6 text-gray-600 tracking-tight">
                                    <a className=" flex items-center gap-x-3">
                                      <span className="absolute inset-x-0 -top-px bottom-0" />
                                      {getCorpName}
                                      <span className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20 ">
                                        cooperative
                                      </span>
                                    </a>
                                  </p>
                                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                    <a className="relative truncate hover:underline">
                                      {activity?.farmLotname}
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-x-4">
                                <div className="hidden sm:flex sm:flex-col sm:items-end">
                                  <p className="text-sm leading-6 text-gray-600 tracking-tight">
                                    {activity?.calendarActivity?.activity?.name}
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
                                      <time dateTime={activity?.calendarActivity?.startTime}>
                                        {formattedDate}
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
                      )
                    })}
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
        activityDetails={showActivity}
        cooperative={getCorpName!}
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
