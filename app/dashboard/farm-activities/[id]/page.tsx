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
import { useRouter } from "next/router";
import { useParams, useSearchParams } from "next/navigation";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ArrowBackIcon from "@/components/icons/ArrowBack";


const CreateActivity = () => {
  const getActivities = useGetActivitiesQuery()
  const activitiesList = getActivities.data?.getActivities
  const {id} = useParams()
  console.log(id)
  const getActivityById = activitiesList?.find(item => item?.id === id);
  const activityCreatedDate = getActivityById?.updatedAt;

// Ensure activityCreatedDate is a valid string before attempting to create a Date object
const dateObject = activityCreatedDate ? new Date(activityCreatedDate) : null;

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const formatter = new Intl.DateTimeFormat('en-US', options);

// Check if dateObject is valid before formatting
const formattedDate = dateObject ? formatter.format(dateObject) : 'Invalid Date';
  
    
  return (
    <div className="px-4 sm:px-6 lg:px-32 pb-10">
      <Link 
          href={`/dashboard/farm-activities`}
          className="flex text-sm text-gray-700 items-center gap-x-2">
          <ArrowBackIcon />
          Back to Activity
      </Link>
      <div className="flex items-center justify-between space-y-2 mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Farm Activity
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <Link
            href={`/dashboard/farm-activities/${id}/add-activity`}
            className="mt-8 block text-center rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-5 py-2 text-sm font-medium text-white"
          >
            Add activity to farm lot
          </Link>
        </div>
      </div>
        <div className="mt-20 flex justify-between">
          <div className="leading-4 text-sm text-gray-600">
            <h6 className="font-normal">Activity Name</h6>
            <p className="text-black mt-2 font-medium">{getActivityById?.name}</p>
          </div>
          <div className="leading-4 text-sm text-gray-600">
            <h6 className="font-normal">Crop Name</h6>
            <p className="text-black mt-2 font-medium">{getActivityById?.cropProfile?.cropName}</p>
          </div>
          <div className="leading-4 text-mn text-gray-600">
            <h6 className="font-normal">Cost</h6>
            <p className="text-black mt-2 font-medium">{getActivityById?.totalCost}</p>
          </div>
          <div className="leading-4 text-mn text-gray-600">
            <h6 className="font-normal">Created Date</h6>
            <p className="text-black mt-2 font-medium">{formattedDate}</p>
          </div>
        </div>
    </div>
  );
};

export default CreateActivity;
