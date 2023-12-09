"use client"
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useAddActivityToCalendarMutation, useGetActivitiesQuery, useGetFarmLotsQuery, } from "@/src/generated/graphql";

type FormData = {
  name: string;
};


const CreateActivity = () => {
    
    const [activityId, setActivityId] = useState("")
    const [farmLotId, setFarmLotId] = useState("")
    const [activityStartDate, setActivityStartDate] = React.useState<Date>();
    const [activityEndDate, setActivityEndDate] = React.useState<Date>();
    const [openActivityStartDate, setOpenActivityStartDate] = useState(false)
    const [openActivityEndDate, setOpenActivityEndDate] = useState(false)
    const getActivities = useGetActivitiesQuery()
    const getFarmLots = useGetFarmLotsQuery()
    const activityList = getActivities.data?.getActivities
    const farmLotList = getFarmLots.data?.getFarmLots
    const [addActivityToCalendarMutation, { data, loading, error }] = useAddActivityToCalendarMutation()
    

    const {
      register,
      handleSubmit,
      getValues,
    } = useForm<FormData>();

    
    const showFailureToast = () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        duration: 3000,
      });
    };

    const showSuccessToast = () => {
      toast({
        variant: "default",
        title: "Sucess!",
        description: "Activity added to farm lot",
        duration: 3000,
      });
    };



    const onSubmitHandler = async (form: FormData) => {
      try {
        const response = await addActivityToCalendarMutation({
          variables: {
             activityId: activityId,
             farmLotId: farmLotId,
             startTime: activityStartDate,
             endTime: activityEndDate
          },
        })
        client.refetchQueries({
          include: "active",
        });
        window.location.reload();
        showSuccessToast()
      } catch (error) {
        showFailureToast()
      }
    };
  return (
    <div className="px-4 sm:px-6 lg:px-32 pb-10">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Create Activity
        </h2>
        <p className="text-sm tracking-tight pt-1 text-gray-700">Fill out the information below to create an invoice</p>
        
      </div>
      <div className="mt-16 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <form className=" flex h-auto w-[820px] flex-col" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="flex w-full justify-between mb-10">
                    <div className="flex h-[70px] w-[390px] flex-col items-start">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Activity
                      </label>
                      <Select
                        value={activityId}
                        onValueChange={(value) => setActivityId(value)}
                      >
                        <SelectTrigger className="border w-[390px] border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                          <SelectValue placeholder="Select activity" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectGroup>
                            {
                              activityList?.map((item) => (
                                <SelectItem
                                  value={item?.id!}
                                  key={item?.id}
                                  className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                >
                                  {item?.name}
                                </SelectItem>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex h-[70px] w-[390px] flex-col items-start">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Farm Lot
                      </label>
                      <Select
                        value={farmLotId}
                        onValueChange={(value) => setFarmLotId(value)}
                      >
                        <SelectTrigger className="border w-full border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                          <SelectValue placeholder="Select a crop" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectGroup>
                            {
                              farmLotList?.map((item) => (
                                <SelectItem
                                  value={item?.id!}
                                  key={item?.id}
                                  className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                >
                                  {item?.name}
                                </SelectItem>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
                <div className="w-full flex justify-between mb-16"> 
                  <div className="w-[390px]">
                    <Popover
                      open={openActivityStartDate}
                      onOpenChange={setOpenActivityStartDate}
                        
                    >
                      <PopoverTrigger asChild>
                        <button
                          className={
                            `z-[100] flex h-[45px] w-[390px] flex-row items-center rounded-md border border-gray-200 bg-white px-3 text-left font-normal focus:outline-none focus:ring-2 focus:ring-primary-verzoblue",
                            ${!activityStartDate && "text-muted-foreground"}`
                          }
                        >
                          <span className="pointer-events-none z-[10] mr-2 flex items-center bg-white px-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.6675 17.532V9.531H8.718C8.03797 9.8935 7.38074 10.2973 6.75 10.74V11.7825C7.3125 11.397 8.2035 10.8525 8.637 10.617H8.655V17.532H9.6675ZM11.4495 15.5745C11.52 16.5345 12.3405 17.6835 14.004 17.6835C15.891 17.6835 17.004 16.0845 17.004 13.377C17.004 10.476 15.8325 9.375 14.0745 9.375C12.6855 9.375 11.379 10.383 11.379 12.0885C11.379 13.8285 12.615 14.7435 13.893 14.7435C15.012 14.7435 15.738 14.1795 15.9675 13.5585H16.008C16.002 15.5325 15.3165 16.8045 14.0505 16.8045C13.0545 16.8045 12.5385 16.1295 12.4755 15.5745H11.4495ZM15.879 12.099C15.879 13.143 15.0405 13.869 14.103 13.869C13.2015 13.869 12.387 13.2945 12.387 12.069C12.387 10.8345 13.26 10.254 14.139 10.254C15.0885 10.254 15.879 10.851 15.879 12.099Z"
                                fill="#2AA249"
                              />
                              <path
                                d="M5.25 0C5.44891 0 5.63968 0.0790176 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75V1.5H18V0.75C18 0.551088 18.079 0.360322 18.2197 0.21967C18.3603 0.0790176 18.5511 0 18.75 0C18.9489 0 19.1397 0.0790176 19.2803 0.21967C19.421 0.360322 19.5 0.551088 19.5 0.75V1.5H21C21.7956 1.5 22.5587 1.81607 23.1213 2.37868C23.6839 2.94129 24 3.70435 24 4.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H4.5V0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790176 5.05109 0 5.25 0ZM1.5 6V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V6H1.5Z"
                                fill="#2AA249"
                              />
                            </svg>
                          </span>
                          {activityStartDate ? (
                            format(activityStartDate, "yyyy-MM-dd")
                          ) : (
                            <span>Pick activity start date</span>
                          )}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="z-[100] w-auto border bg-white p-0 text-gray-700 shadow-sm">
                        <Calendar
                          mode="single"
                          selected={activityStartDate}
                          onSelect={(newDate) => {
                            setActivityStartDate(newDate);
                            setOpenActivityStartDate(false);
                          }}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Popover
                      open={openActivityEndDate}
                      onOpenChange={setOpenActivityEndDate}       
                    >
                      <PopoverTrigger asChild>
                        <button
                          className={
                            `z-[100] flex h-[45px] w-[390px] flex-row items-center rounded-md border border-gray-200 bg-white px-3 text-left font-normal focus:outline-none focus:ring-2 focus:ring-primary-verzoblue",
                            ${!activityEndDate && "text-muted-foreground"}`
                          }
                        >
                          <span className="pointer-events-none z-[10] mr-2 flex items-center bg-white px-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.6675 17.532V9.531H8.718C8.03797 9.8935 7.38074 10.2973 6.75 10.74V11.7825C7.3125 11.397 8.2035 10.8525 8.637 10.617H8.655V17.532H9.6675ZM11.4495 15.5745C11.52 16.5345 12.3405 17.6835 14.004 17.6835C15.891 17.6835 17.004 16.0845 17.004 13.377C17.004 10.476 15.8325 9.375 14.0745 9.375C12.6855 9.375 11.379 10.383 11.379 12.0885C11.379 13.8285 12.615 14.7435 13.893 14.7435C15.012 14.7435 15.738 14.1795 15.9675 13.5585H16.008C16.002 15.5325 15.3165 16.8045 14.0505 16.8045C13.0545 16.8045 12.5385 16.1295 12.4755 15.5745H11.4495ZM15.879 12.099C15.879 13.143 15.0405 13.869 14.103 13.869C13.2015 13.869 12.387 13.2945 12.387 12.069C12.387 10.8345 13.26 10.254 14.139 10.254C15.0885 10.254 15.879 10.851 15.879 12.099Z"
                                fill="#2AA249"
                              />
                              <path
                                d="M5.25 0C5.44891 0 5.63968 0.0790176 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75V1.5H18V0.75C18 0.551088 18.079 0.360322 18.2197 0.21967C18.3603 0.0790176 18.5511 0 18.75 0C18.9489 0 19.1397 0.0790176 19.2803 0.21967C19.421 0.360322 19.5 0.551088 19.5 0.75V1.5H21C21.7956 1.5 22.5587 1.81607 23.1213 2.37868C23.6839 2.94129 24 3.70435 24 4.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H4.5V0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790176 5.05109 0 5.25 0ZM1.5 6V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V6H1.5Z"
                                fill="#2AA249"
                              />
                            </svg>
                          </span>
                          {activityEndDate ? (
                            format(activityEndDate, "yyyy-MM-dd")
                          ) : (
                            <span>Pick activity end date</span>
                          )}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="z-[100] w-auto border bg-white p-0 text-gray-700 shadow-sm">
                        <Calendar
                          mode="single"
                          selected={activityEndDate}
                          onSelect={(newDate) => {
                            setActivityEndDate(newDate);
                            setOpenActivityEndDate(false);
                          }}
                          disabled={(date) =>
                            activityStartDate ? date < activityStartDate : date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                      </Popover>
                  </div>
                </div>
                <div className=" flex flex-row items-center justify-end space-x-3">
                    <button
                      type="button"
                      className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex w-[130px] items-center justify-center rounded-md bg-[#2aa249] px-4 py-2 text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
                    >
                      Create
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateActivity;
