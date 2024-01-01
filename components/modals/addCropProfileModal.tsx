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
import { useCreateCropProfileMutation, useCreateLandGroupMutation, useGetGeoAreasQuery } from "@/src/generated/graphql";
import { toast } from "../ui/use-toast";

interface AddLandGroupModalProps {
  openAddCropProfileModal: boolean;
  setOpenCropProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  cropName: string;
};

const lifeCycleList = [
 "Annual",
 "Biennial",
 "Perennial"
]

const AddCropProfileModal = ({
  openAddCropProfileModal,
  setOpenCropProfileModal,
}: AddLandGroupModalProps): JSX.Element => {
  const [createCropProfileMutation, { data, loading, error }] = useCreateCropProfileMutation()
  const geoAreas = useGetGeoAreasQuery();
  const [openLifeCycleDropDown, setOpenLifeCycleDropDown] = useState(false)
  const [lifeCycle, setLifeCycle] = useState("")

  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();

  const showSuccessToast = () => {
    toast({
      variant: "default",
      title: "Success",
      description: "Corp Profile Added",
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
      const response = await createCropProfileMutation({
        variables: {
           lifeCycle: lifeCycle,
           ...form
        },
      })
      setOpenCropProfileModal(false)
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
    <Transition.Root show={openAddCropProfileModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenCropProfileModal}>
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
                        Crop Name
                      </label>
                      <input
                        type="text"
                        required
                        className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        {...register("cropName")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                          htmlFor="First Name"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2 block"
                        >
                          {" "}
                          Crop Life Cycle
                      </label>
                      <Popover open={openLifeCycleDropDown} onOpenChange={setOpenLifeCycleDropDown}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openLifeCycleDropDown}
                            className="flex justify-between  border border-gray-100 bg-gray-50 rounded-lg h-10 w-full text-sm focus:outline-none px-3 py-2"
                          >
                            {lifeCycle
                              ? lifeCycle
                              : "Select crop life cycle..."}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full max-h-[300px] rounded bg-white p-0 shadow-sm">
                          <Command>
                            <CommandInput placeholder="Search geographical area..." />
                            <CommandEmpty>No crop profile found.</CommandEmpty>
                            <CommandGroup>
                              {lifeCycleList?.map((item, index) => (
                                <CommandItem
                                  key={index}
                                  value={item}
                                  onSelect={(currentValue) => {
                                    setLifeCycle(currentValue)
                                    setOpenLifeCycleDropDown(false)
                                  }}
                                >
                                  {item}
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
                      onClick={() => setOpenCropProfileModal(false)}
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

export default AddCropProfileModal;
