"use client"
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { useCreateEquipmentMutation, useCreateFarmLotMutation, useCreateGeoAreaMutation, useGetCropProfilesQuery, useGetGeoAreasQuery, useGetGeoCorpsQuery, useGetLandGroupsQuery } from "@/src/generated/graphql";

interface AddEquipmentModalProps {
  openAddGeoAreaModal: boolean;
  setOpenAddGeoAreaModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
};

const AddGeoAreaModal = ({
  openAddGeoAreaModal,
  setOpenAddGeoAreaModal,
}: AddEquipmentModalProps): JSX.Element => {
  const [createGeoAreaMutation, { data, loading, error }] = useCreateGeoAreaMutation()

  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();

  const onSubmitHandler = async (form: FormData) => {
    try {
      const response = createGeoAreaMutation({
        variables: {
           ...form,
        },
      })
      setOpenAddGeoAreaModal(false)
      client.refetchQueries({
        include: "active",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Transition.Root show={openAddGeoAreaModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenAddGeoAreaModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full max-w-[450px] mx-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel as="div" className="relative transform overflow-hidden rounded-lg bg-white px-8 pb-7 pt-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="mt-2 text-center mb-4">
                  <div className="text-lg font-medium leading-6 text-gray-700 tracking-tight">
                    Create Geographical Area
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col"  onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex h-[70px] flex-col items-start mb-3">
                      <label
                        htmlFor="Equipment Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Geographical Area Name
                      </label>
                      <input
                        type="text"
                        required
                        className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        {...register("name")}
                      />
                    </div>
                  <div className=" flex flex-row items-center justify-end space-x-3">
                    <button
                      type="button"
                      className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setOpenAddGeoAreaModal(false)}
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddGeoAreaModal;
