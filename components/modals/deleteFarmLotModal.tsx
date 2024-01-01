"use client"
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { useDeleteFarmLotMutation, useDeleteGeoCorpMutation, useDeleteLandGroupMutation, useGetGeoAreasQuery } from "@/src/generated/graphql";
import { toast } from "../ui/use-toast";

interface DeleteFarmLotModalProps {
  openDeleteFarmLotModal: boolean;
  setOpenDeleteFarmLotModal: React.Dispatch<React.SetStateAction<boolean>>;
  farmLotId: string
}

type FormData = {
  name: string;
};

const DeleteFarmLotModal = ({
  openDeleteFarmLotModal,
  setOpenDeleteFarmLotModal,
  farmLotId
}: DeleteFarmLotModalProps): JSX.Element => {
  const [deleteFarmLotMutation, { data, loading, error }] = useDeleteFarmLotMutation()
  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();

  const showSuccessToast = () => {
    toast({
      variant: "default",
      title: "Success",
      description: "Cooperative deleted",
      duration: 3000,
    });
  };
  
  const showFailureToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      duration: 3000,
    });
  };
  
  const onSubmitHandler = async (form: FormData) => {
    try {
      const response = await deleteFarmLotMutation({
        variables: {
          farmLotId: farmLotId
       },
      })
      setOpenDeleteFarmLotModal(false)
      client.refetchQueries({
        include: "active",
      });
      showSuccessToast()
    } catch (error) {
      console.error(error);
      showFailureToast()
    }
  };
  return (
    <Transition.Root show={openDeleteFarmLotModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenDeleteFarmLotModal}>
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
                    Delete Farm Lot 
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col"  onSubmit={handleSubmit(onSubmitHandler)}>     
                  <div className="px-4">
                    <div className="mt-2 max-w-xl text-[14px] font-normal leading-4 text-gray-600 tracking-tight">
                      <p>Are you sure you want to delete this item?</p>
                    </div>
                  </div>
                  <div className="mt-5 self-end">
                    <button
                      type="submit"
                      className="flex w-[130px] items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-normal text-white hover:bg-red-400 focus:outline-none"
                    >
                      Delete
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

export default DeleteFarmLotModal;
