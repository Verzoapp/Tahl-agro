"use client"
import AddLandGroupModal from "@/components/modals/addLandGroupModal";
import DeleteLandGroupModal from "@/components/modals/deleteLandGroupModal";
import UpdateLandGroupModal from "@/components/modals/updateLandGroupModal";
import { useGetLandGroupsQuery } from "@/src/generated/graphql";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";

const Cooperatives = () => {
  const [openAddLandGroupModal, setOpenAddLandGroupModal] = useState(false)
  const [openDeleteLandGroupModal, setOpenDeleteLandGroupModal] = useState(false)
  const [openUpdateGroupModal, setOpenUpdateLandGroupModal] = useState(false)
  const [geoAreaDefaultId, setGeoAreaDefaultId] = useState("")
  const [geoAreaDefaultName, setGeoAreaDefaultName] = useState("")
  const [landGroupDefaultName, setLandGroupDefaultName] = useState("")
  const [landGroupId, setLandGroupId] = useState("")
  const getLandGroups = useGetLandGroupsQuery()
  const landList = getLandGroups.data?.getLandGroups
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Land Groups
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
            onClick={() => setOpenAddLandGroupModal(true)}
          >
            Create new
          </button>
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
                    Land Group
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Geographical Area
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
                {landList?.map((item) => {
                  const landCreatedDate = item?.createdAt;
                  const options: Intl.DateTimeFormatOptions = {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  };
                  const formatter = new Intl.DateTimeFormat('en-US', options);
                  const formattedDate = formatter.format(new Date(landCreatedDate));
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
                          {item?.geographicArea?.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <div className="font-normal tracking-tight text-gray-600">
                          {formattedDate}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <button onClick={() => {setOpenUpdateLandGroupModal(true); setLandGroupId(item?.id!); setLandGroupDefaultName(item?.name!); setGeoAreaDefaultId(item?.geographicArea?.id!), setGeoAreaDefaultName(item?.geographicArea?.name!)}} type="button" className="font-normal tracking-tight text-[#2aa249]">
                          Update
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <button onClick={() => {setOpenDeleteLandGroupModal(true); setLandGroupId(item?.id!)}} type="button" className="font-normal tracking-tight text-red-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddLandGroupModal openAddLandGroupModal={openAddLandGroupModal} setOpenLandGroupModal={setOpenAddLandGroupModal} />
      <UpdateLandGroupModal openUpdateLandGroupModal={openUpdateGroupModal} setOpenUpdateLandGroupModal={setOpenUpdateLandGroupModal} landGroupDefaultId={landGroupId} landGroupDefaultName={landGroupDefaultName} geoAreaDefaultId={geoAreaDefaultId} geoAreaDefaultName={geoAreaDefaultName} />
      <DeleteLandGroupModal openDeleteLandGroupModal={openDeleteLandGroupModal} setOpenDeleteLandGroupModal={setOpenDeleteLandGroupModal} landGroupId={landGroupId}/>
    </div>
  );
};

export default Cooperatives;
