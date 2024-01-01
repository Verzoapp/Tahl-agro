"use client"
import { Fragment, useEffect, useRef, useState } from "react";
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
import { useCreateGeoCorpMutation, useGetGeoAreasQuery, useGetLandGroupsQuery } from "@/src/generated/graphql";
import { toast } from "../ui/use-toast";

interface AddCooperativeModalProps {
  openAddCooperativeModal: boolean;
  setOpenAddCooperativeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
};



const AddCooperativeModal = ({
  openAddCooperativeModal,
  setOpenAddCooperativeModal,
}: AddCooperativeModalProps): JSX.Element => {
  const [createGeoCorpMutation, { data, loading, error }] = useCreateGeoCorpMutation()
  const landGroups = useGetLandGroupsQuery()
  const geoAreas = useGetGeoAreasQuery()
  const landGroupList = landGroups.data?.getLandGroups
  const [openLandGroupDropDown, setOpenLandGroupDropDown] = useState(false)
  const [landGroupId, setLandGroupId] = useState("")
  const [geoAreaId, setGeoAreaId] = useState("");



  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();
  
  useEffect(() => {
    if (landGroupId) {
        const areaId = landGroupList?.find((item) => item?.id === landGroupId)?.geographicArea?.id || '';
        setGeoAreaId(areaId);
    }
  }, [landGroupId]);

  const showSuccessToast = () => {
    toast({
      variant: "default",
      title: "Success",
      description: "Cooperative Added",
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
      const response = createGeoCorpMutation({
        variables: {
           geographicAreaId: geoAreaId,
           landGroupId: landGroupId,
           ...form
        },
      })
      setOpenAddCooperativeModal(false)
      client.refetchQueries({
        include: "active",
      });
      showSuccessToast()
    } catch (error) {
      console.error(error);
      showFailureToast()
    }
  };
  console.log(geoAreaId)
  return (
    <Transition.Root show={openAddCooperativeModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenAddCooperativeModal}>
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
                    Create Cooperative
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col"  onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex h-[70px] flex-col items-start mb-3">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Cooperative Name
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
                          Land Group
                      </label>
                      <Popover open={openLandGroupDropDown} onOpenChange={setOpenLandGroupDropDown}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openLandGroupDropDown}
                            className="flex justify-between  border border-gray-100 bg-gray-50 rounded-lg h-10 w-full text-sm focus:outline-none px-3 py-2"
                          >
                            {landGroupId
                              ? landGroupList?.find((item) => item?.id === landGroupId)?.name
                              : "Select land group..."}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full max-h-[300px] rounded bg-white p-0 shadow-sm">
                          <Command>
                            <CommandInput placeholder="Search land group..." />
                            <CommandEmpty>No land group found.</CommandEmpty>
                            <CommandGroup>
                              {landGroupList?.map((item) => (
                                item?.cooperative === null && (
                                    <CommandItem
                                      key={item?.id}
                                      value={item?.id!}
                                      onSelect={(currentValue) => {
                                        setLandGroupId(currentValue)
                                        setOpenLandGroupDropDown(false)
                                      }}
                                    >
                                      {item?.name}
                                    </CommandItem>
                                ) 
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
                      onClick={() => setOpenAddCooperativeModal(false)}
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

export default AddCooperativeModal;
