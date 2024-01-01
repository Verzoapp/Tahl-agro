"use client"
import AddGeoAreaModal from "@/components/modals/addGeoAreaModal";
import { useGetGeoAreasQuery, useGetLandGroupsQuery } from "@/src/generated/graphql";
import UpdateGeoAreaModal from "@/components/modals/updateGeoArea";
import DeleteGeoAreaModal from "@/components/modals/deleteGeoArea";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useState } from "react";

interface GeographicArea {
  id?: string ;
  name?: string ;
  createdAt?: any; // You might want to replace 'any' with a more specific type
}

const Cooperatives = () => {
  const [openAddGeoAreaModal, setOpenAddGeoAreaModal] = useState(false)
  const getGeoAreas = useGetGeoAreasQuery()
  const geoAreaList = getGeoAreas.data?.getGeoAreas
  const [geoAreaData, setGeoAreaData] = useState<GeographicArea | null | undefined>(null);
  const [openUpdateGeoAreaModal, setOpenUpdateGeoAreaModal] = useState(false)
  const [openDeleteGeoAreaModal, setOpenDeleteGeoAreaModal] = useState(false)
  const [geoAreaDefaultName, setGeoAreaDefaultName] = useState("") 
  const [geoAreaId, setGeoAreaId] = useState("")

  useEffect(() => {
    const handleClick = () => {
      setGeoAreaId(geoAreaData?.id!)
      setGeoAreaDefaultName(geoAreaData?.name!)
    }
    handleClick()
  }, [geoAreaData])

  console.log(geoAreaId, geoAreaData)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Geographical Area
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
            onClick={() => setOpenAddGeoAreaModal(true)}
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
                {geoAreaList?.map((item) => {
                  const geoAreaCreatedDate = item?.createdAt;
                  const options: Intl.DateTimeFormatOptions = {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  };
                  const formatter = new Intl.DateTimeFormat('en-US', options);
                  const formattedDate = formatter.format(new Date(geoAreaCreatedDate));
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
                          {formattedDate}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <button onClick={() => {setOpenUpdateGeoAreaModal(true); setGeoAreaData(item as GeographicArea | null | undefined) }} type="button" className="font-normal tracking-tight text-[#2aa249]">
                          Update
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <button onClick={() => {setOpenDeleteGeoAreaModal(true); setGeoAreaData(item as GeographicArea | null | undefined)}} type="button" className="font-normal tracking-tight text-red-700">
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
      <AddGeoAreaModal openAddGeoAreaModal={openAddGeoAreaModal} setOpenAddGeoAreaModal={setOpenAddGeoAreaModal} />
      <UpdateGeoAreaModal openUpdateGeoAreaModal={openUpdateGeoAreaModal} setOpenUpdateGeoAreaModal={setOpenUpdateGeoAreaModal} geoAreaDefaultName={geoAreaDefaultName} geoAreaId={geoAreaId}/>
      <DeleteGeoAreaModal openDeleteGeoAreaModal={openDeleteGeoAreaModal} setOpenDeleteGeoAreaModal={setOpenDeleteGeoAreaModal} geoAreaId={geoAreaId} />
    </div>
  );
};

export default Cooperatives;
