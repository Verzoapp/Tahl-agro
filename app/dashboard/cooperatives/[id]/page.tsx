"use client"
import React, { useEffect, useState } from "react";
import { useGetFarmLotsQuery, useGetGeoCorpByIdQuery } from "@/src/generated/graphql";
import { useParams, useSearchParams } from "next/navigation";
import AddFarmLotsModal from "@/components/modals/addFarmLotsModal";
import UpdateFarmLotsModal from "@/components/modals/updateFarmLotModal";
import DeleteFarmLotModal from "@/components/modals/deleteFarmLotModal";
import Link from "next/link";
import ArrowBackIcon from "@/components/icons/ArrowBack";

interface FarmLot {
  id: string;
  name: string;
  landGroup: {
    name: string;
    id: string
  };
  coorperative: {
    name: string;
    id: string
  };
  geographicArea: {
    name: string;
    id: string
  };
  archived: boolean;
}


const Cooperative = () => {
  const [openAddFarmLotModal, setOpenAddFarmLotModal] = useState(false);
  const [openUpdateFarmLotModal, setOpenUpdateFarmLotModal] = useState(false);
  const [openDeleteFarmLotModal, setOpenDeleteFarmLotModal] = useState(false)
  const [farmLotData, setFarmLotData] = useState<FarmLot | null | undefined>(null);
  const [corpId, setCorpId] = useState("");
  const [landGroupId, setLandGroupId] = useState("")
  const [geoAreaId, setGeoAreaId] = useState("")
  const [farmLotId, setFarmLotId] = useState("")
  const [farmLotDefaultName, setFarmLotDefaultName] = useState("")
  const useGetFarmLots = useGetFarmLotsQuery();
  const farmLotsList = useGetFarmLots.data?.getFarmLots;
  const {id} = useParams()
  console.log(farmLotsList)
  const { data, loading, error } = useGetGeoCorpByIdQuery({
    variables: {
       geoCorpId: id
    },
  });
  const corpCreatedDate = data?.getGeoCorpById?.createdAt

  const handleClick = () => {
    setOpenAddFarmLotModal(true)
    setCorpId(data?.getGeoCorpById?.id!);
    setLandGroupId(data?.getGeoCorpById?.landGroup?.id!)
    setGeoAreaId(data?.getGeoCorpById?.geographicArea?.id!)
  }

  useEffect(() => {
    const handleUpdateClick = () => {
      setFarmLotId(farmLotData?.id!)
      setFarmLotDefaultName(farmLotData?.name!)
    }
    handleUpdateClick()
  }, [farmLotData])

  // Ensure corpCreatedDate is a valid string before attempting to create a Date object
  const dateObject = corpCreatedDate ? new Date(corpCreatedDate) : null;

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
          href={`/dashboard/cooperatives`}
          className="flex text-sm text-gray-700 items-center gap-x-2">
          <ArrowBackIcon />
          Back to Cooperatives
      </Link>
      <div className="flex items-center justify-between space-y-2 mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Cooperative
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <Link
            href={`/dashboard/cooperatives/${id}/createFarmer`}
            className="mt-8 block text-center rounded-md bg-[#2aa249] hover:bg-[#238c3d] px-5 py-2 text-sm font-medium text-white"
          >
            Create Farmer
          </Link>
        </div>
      </div>
        <div className="mt-20 flex justify-between">
          <div className="leading-4 text-sm text-gray-600">
            <h6 className="font-normal">Cooperative Name</h6>
            <p className="text-black mt-2 font-medium">{data?.getGeoCorpById?.name}</p>
          </div>
          <div className="leading-4 text-sm text-gray-600">
            <h6 className="font-normal">Land Group Name</h6>
            <p className="text-black mt-2 font-medium">{data?.getGeoCorpById?.landGroup?.name}</p>
          </div>
          <div className="leading-4 text-mn text-gray-600">
            <h6 className="font-normal">Geographical Area Name</h6>
            <p className="text-black mt-2 font-medium">{data?.getGeoCorpById?.geographicArea?.name}</p>
          </div>
          <div className="leading-4 text-mn text-gray-600">
            <h6 className="font-normal">Created Date</h6>
            <p className="text-black mt-2 font-medium">{formattedDate}</p>
          </div>
        </div>
        <div className="mt-32 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-600">
            Farm Lots
          </h2>
            <button
              type="button"
              className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
              onClick={() => {handleClick()}}
            >
              Create Farm Lot
            </button>  
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
                      Farm Lot
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {farmLotsList?.map((lot) => (
                    lot?.coorperative?.id === id  && (
                      <tr key={lot?.id}>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="font-normal tracking-tight text-gray-600">
                                {lot?.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                          <button onClick={() => {setFarmLotData(lot as FarmLot | null | undefined); setOpenUpdateFarmLotModal(true)}} type="button" className="font-normal tracking-tight text-[#2aa249]">
                            Update
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                          <button onClick={() => {setFarmLotId(lot?.id!); setOpenDeleteFarmLotModal(true)}} type="button" className="font-normal tracking-tight text-red-700">
                            Delete
                          </button>
                        </td> 
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <AddFarmLotsModal openAddFarmLotModal={openAddFarmLotModal} setOpenAddFarmLotModal={setOpenAddFarmLotModal} corpId={corpId} landGroupId={landGroupId} geoAreaId={geoAreaId}/>
      <UpdateFarmLotsModal 
        openUpdateFarmLotModal={openUpdateFarmLotModal}
        setOpenUpdateFarmLotModal={setOpenUpdateFarmLotModal}
        farmLotDefaultName={farmLotDefaultName}
        farmLotId={farmLotId}
        landGroupDefaultId={landGroupId}
        geographicAreaDefaultId={geoAreaId}
        coorperativeDefaultId={corpId}    
      />
      <DeleteFarmLotModal openDeleteFarmLotModal={openDeleteFarmLotModal} setOpenDeleteFarmLotModal={setOpenDeleteFarmLotModal} farmLotId={farmLotId} />
    </div>
  );
};

export default Cooperative;
