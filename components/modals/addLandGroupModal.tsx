"use client"
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { useCreateLandGroupMutation, useGetGeoAreasQuery } from "@/src/generated/graphql";

interface AddLandGroupModalProps {
  openAddLandGroupModal: boolean;
  setOpenLandGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
};

const AddLandGroupModal = ({
  openAddLandGroupModal,
  setOpenLandGroupModal,
}: AddLandGroupModalProps): JSX.Element => {
  const [createLandGroupMutation, { data, loading, error }] = useCreateLandGroupMutation()
  const geoAreas = useGetGeoAreasQuery()
  const geoAreaList = geoAreas.data?.getGeoAreas
  const [openGeoAreaDropDown, setOpenGeoAreaDropDown] = useState(false);
  const [geoAreaId, setGeoAreaId] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();
  const onSubmitHandler = async (form: FormData) => {
    try {
      const response = await createLandGroupMutation({
        variables: {
           geographicAreaId: geoAreaId,
           ...form
        },
      })
      setOpenLandGroupModal(false)
      client.refetchQueries({
        include: "active",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Transition.Root show={openAddLandGroupModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenLandGroupModal}>
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
                    Create Land Group
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col"  onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex h-[70px] flex-col items-start mb-3">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Land Group Name
                      </label>
                      <input
                        type="text"
                        required
                        className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        {...register("name")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                          htmlFor="First Name"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2 block"
                        >
                          {" "}
                          Geographic Area
                      </label>
                      <Popover open={openGeoAreaDropDown} onOpenChange={setOpenGeoAreaDropDown}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openGeoAreaDropDown}
                            className="flex justify-between  border border-gray-100 bg-gray-50 rounded-lg h-10 w-full text-sm focus:outline-none px-3 py-2"
                          >
                            {geoAreaId
                              ? geoAreaList?.find((item) => item?.id === geoAreaId)?.name
                              : "Select geographical area..."}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full max-h-[300px] rounded bg-white p-0 shadow-sm">
                          <Command>
                            <CommandInput placeholder="Search geographical area..." />
                            <CommandEmpty>No geographical area found.</CommandEmpty>
                            <CommandGroup>
                              {geoAreaList?.map((item) => (
                                <CommandItem
                                  key={item?.id}
                                  value={item?.id!}
                                  onSelect={(currentValue) => {
                                    setGeoAreaId(currentValue)
                                    setOpenGeoAreaDropDown(false)
                                  }}
                                >
                                  {item?.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  <div className=" flex flex-row items-center justify-end space-x-3">
                    <button
                      type="button"
                      className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setOpenLandGroupModal(false)}
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

export default AddLandGroupModal;
