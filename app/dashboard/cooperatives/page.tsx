"use client"
import AddCooperativeModal from "@/components/modals/addCooperativeModal";
import UpdateGeoCorpModal from "@/components/modals/updateGeoCorpModal";
import { useGetGeoCorpsQuery } from "@/src/generated/graphql";
import DeleteGeoCorpModal from "@/components/modals/deleteGeoCorp";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Cooperatives = () => {
  const [openAddCooperativeModal, setOpenCooperativeModal] = useState(false);
  const [openUpdateGeoCorpModal, setOpenUpdateGeoCorpModal] = useState(false)
  const [openDeleteGeoCorpModal, setOpenDeleteGeoCorpModal] = useState(false)
  const [landGroupDefaultId, setLandGroupDefaultId] = useState("")
  const [geoCorpId, setGeoCorpId] = useState("")
  const [landGroupDefaultName, setLandGroupDefaultName] = useState("")
  const [geoAreaDefaultId, setGeoAreaDefaultId] = useState("")
  const [geoCorpDefaultName, setGeoCorpDefaultName] = useState("")
  const [geoAreaDefaultName, setGeoAreaDefaultName] = useState("")
  const getGeoCorps = useGetGeoCorpsQuery()
  const geoCorpList = getGeoCorps.data?.getGeoCorps
  const handleUpdateClick = (item:any) => {
    setOpenUpdateGeoCorpModal(true);
    setGeoCorpId(item?.id!);
    setLandGroupDefaultId(item?.landGroup?.id!);
    setLandGroupDefaultName(item?.landGroup?.name!);
    setGeoAreaDefaultId(item?.geographicArea?.id!);
    setGeoAreaDefaultName(item?.geographicArea?.name!);
    setGeoCorpDefaultName(item?.name! || "");
  };
  
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Cooperatives
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
            onClick={() => setOpenCooperativeModal(true)}
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
                    Cooperatives
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Land Group
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Number Of Farm Lots
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Geographical Area
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {geoCorpList?.map((item) => (
                  <tr key={item?.id}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <Link href={`/dashboard/cooperatives/${item?.id}`} className="font-normal tracking-tight text-gray-600 hover:text-[#2aa249]">
                            {item?.name}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                      <div className="font-normal tracking-tight text-gray-600">
                        {item?.landGroup !== null ? item?.landGroup?.name : "No land group"}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                      <div className="font-normal tracking-tight text-gray-600">
                        {item?.farmLots?.length}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                      <div className="font-normal tracking-tight text-gray-600">
                        {item?.geographicArea?.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                      <button onClick={() => {
                        handleUpdateClick(item)
                        }} 
                        type="button"
                         className="font-normal tracking-tight text-[#2aa249]"
                      >
                        Update
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                        <button onClick={() => {setOpenDeleteGeoCorpModal(true); setGeoCorpId(item?.id!)}} type="button" className="font-normal tracking-tight text-red-700">
                          Delete
                        </button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddCooperativeModal openAddCooperativeModal={openAddCooperativeModal} setOpenAddCooperativeModal={setOpenCooperativeModal} />
      <UpdateGeoCorpModal 
        openUpdateGeoCorpModal={openUpdateGeoCorpModal} 
        setOpenUpdateGeoCorpModal={setOpenUpdateGeoCorpModal} 
        geoCorpId={geoCorpId} 
        landGroupDefaultId={landGroupDefaultId} 
        landGroupDefaultName={landGroupDefaultName}
        geoAreaDefaultId={geoAreaDefaultId}
        geoAreaDefaultName={geoAreaDefaultName}
        geoCorpDefaultName={geoCorpDefaultName}
      />
      <DeleteGeoCorpModal openDeleteGeoCorpModal={openDeleteGeoCorpModal} setOpenDeleteGeoCorpModal={setOpenDeleteGeoCorpModal} geoCorpId={geoCorpId} />
    </div>
  );
};

export default Cooperatives;
