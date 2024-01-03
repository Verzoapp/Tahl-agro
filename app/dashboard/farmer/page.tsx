"use client"
import { useGetFarmerProfilesQuery } from "@/src/generated/graphql";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";

const FarmersProfile = () => {
  const getFarmersProfiles = useGetFarmerProfilesQuery()
  const farmersProfileList = getFarmersProfiles.data?.getFarmerProfiles
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Farmers
        </h2>
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
                    Farmer
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Cooperative
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Farm Lots
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {farmersProfileList?.map((item) => {
                   return (
                        <tr key={item?.id}>
                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-normal tracking-tight text-gray-600">
                                    {item?.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                              <div className="font-normal tracking-tight text-gray-600">
                                {item?.coorperative?.name}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                              <div className="font-normal tracking-tight text-gray-600">
                                {item?.farmLots?.length}
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
    </div>
  );
};

export default FarmersProfile;
