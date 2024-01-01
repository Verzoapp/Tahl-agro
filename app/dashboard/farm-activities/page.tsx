"use client"
import AddFarmLotsModal from "@/components/modals/addFarmLotsModal";
import { useGetActivitiesQuery, useGetFarmLotsQuery } from "@/src/generated/graphql";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { useState } from "react";

const FarmActivities = () => {
  const [openAddFarmLotModal, setOpenAddFarmLotModal] = useState(false);
  const useGetFarmLots = useGetFarmLotsQuery()
  const getActivities = useGetActivitiesQuery()
  const activityList = getActivities.data?.getActivities
  const farmLotsList = useGetFarmLots.data?.getFarmLots

  const pathname = usePathname()
  const searchParams = useSearchParams()!
 

 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Farm Activities
        </h2>
        <div className="flex items-center space-x-2">
          <Link
            href="/dashboard/farm-activities/create-activity"
            className="mt-8 block text-center rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-5 py-2 text-sm font-medium text-white"
          >
            Create activity
          </Link>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Farm Activity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Crop
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Date Created
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {activityList?.map((item) => {
                    const activityCreatedDate = item?.updatedAt;
                    const options: Intl.DateTimeFormatOptions = {
                       weekday: 'long',
                       day: 'numeric',
                       month: 'long',
                       year: 'numeric',
                     };
                   
                   const formatter = new Intl.DateTimeFormat('en-US', options);
                   const formattedDate = formatter.format(new Date(activityCreatedDate));
                    return (
                        <tr key={item?.id}>
                          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <Link href={`/dashboard/farm-activities/${item?.id}`} className="font-normal tracking-tight text-gray-600 hover:text-[#2aa249]">
                                  {item?.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                            <div className="font-normal tracking-tight text-gray-600">
                              {item?.cropProfile?.cropName === null ? "-" : item?.cropProfile?.cropName}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                            <div className="font-normal tracking-tight text-gray-600">
                              {formattedDate}
                            </div>
                          </td>
                        </tr>
                      )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddFarmLotsModal openAddFarmLotModal={openAddFarmLotModal} setOpenAddFarmLotModal={setOpenAddFarmLotModal} />
    </div>
  );
};

export default FarmActivities;
