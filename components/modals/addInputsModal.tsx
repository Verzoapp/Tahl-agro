"use client"
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { useCreateInputMutation, useGetInputCategoriesQuery, useGetInputsQuery, useGetUnitsQuery } from "@/src/generated/graphql";

interface AddTaskModalProps {
  openAddInputModal: boolean;
  setOpenAddInputModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
};

const AddInputModal = ({
  openAddInputModal,
  setOpenAddInputModal,
}: AddTaskModalProps): JSX.Element => {

  const [costValue, setCostValue] = useState("");
  // const [inputcategoryId, setInputCategoryId] = useState("");
  // const [inputUnitId, setInputUnitId] = useState("")
  const [createInputMutation, { data, loading, error }] = useCreateInputMutation();
  const inputsUnit = useGetUnitsQuery()
  const inputsCategories = useGetInputCategoriesQuery()
  const inputsUnitList = inputsUnit?.data?.getUnits
  const inputsCategoryList = inputsCategories.data?.getInputCategories
  const [inputCategory, setInputCategory] = useState(inputsCategoryList?.[0]!)
  const [inputUnit, setInputUnit] = useState(inputsUnitList?.[0]!)



  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<FormData>();
  const cost = parseInt(costValue)
  const onSubmitHandler = async (form: FormData) => {
    try {
      const response = await createInputMutation({
        variables: {
         inputUnitId: inputUnit.id!,
         inputCategoryId: inputCategory.id!,
         cost: cost,
          ...form,
        },
      });
      setOpenAddInputModal(false)
      client.refetchQueries({
        include: "active",
      });
    } catch (error) {
      console.error(error);
      console.log(error)
    }
  };
  return (
    <Transition.Root show={openAddInputModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenAddInputModal}>
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
                    Create Input
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col"  onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex h-[70px] flex-col items-start mb-3">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Input Name
                      </label>
                      <input
                        type="text"
                        required
                        className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        {...register("name")}
                      />
                    </div>
                    <div className="flex h-[70px] flex-col items-start mb-4">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Cost Of Input
                      </label>
                      <input
                        type="number"
                        value={costValue}
                        required
                        className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        onChange={(e) => setCostValue(e.target.value)}
                      />
                    </div>
                    {/* <div className="flex h-[70px] flex-col items-start mb-4">
                      <label
                          htmlFor="First Name"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                        >
                          {" "}
                          Input Category
                      </label>
                      <Select
                        value={inputcategoryId}
                        onValueChange={(value) =>
                          setInputCategoryId(value)
                        }
                       >
                         <SelectTrigger className="border border-gray-100 bg-gray-50 rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                           <SelectValue placeholder="Select Input Category" />
                         </SelectTrigger>
                         <SelectContent className="border border-gray-100 bg-gray-50 w-full z-[200] shadow-sm text-gray-800">
                              <SelectGroup>
                                  {
                                    inputsCategoryList?.map((inputCategory) => (
                                      <SelectItem
                                        className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                        value={inputCategory?.id || ""}
                                        key={inputCategory?.id}
                                      >
                                        {
                                          inputCategory?.name
                                        }
                                      </SelectItem>
                                    ))
                                  }
                           </SelectGroup>
                         </SelectContent>
                      </Select>
                    </div> */}
                    {/* <div className="flex h-[70px] flex-col items-start mb-4">
                      <label
                          htmlFor="First Name"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                        >
                          {" "}
                          Input Unit
                      </label>
                      <Select
                        value={inputUnitId}
                        onValueChange={(value) =>
                          setInputUnitId(value)
                        }
                       >
                         <SelectTrigger className="border border-gray-100 bg-gray-50 rounded-lg h-10 text-sm focus:outline-none px-3 py-2">
                           <SelectValue placeholder="Select Input Unit" />
                         </SelectTrigger>
                         <SelectContent className="border border-gray-100 bg-gray-50 w-full z-[200] shadow-sm text-gray-800">
                              <SelectGroup>
                                  {
                                    inputsUnitList?.map((inputUnit) => (
                                      <SelectItem
                                        className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                        value={inputUnit?.id || ""}
                                        key={inputUnit?.id}
                                      >
                                        {
                                          inputUnit?.unitName
                                        }
                                      </SelectItem>
                                    ))
                                  }
                           </SelectGroup>
                         </SelectContent>
                      </Select>
                    </div> */}
                    <div className="mb-4">
                      <label
                          htmlFor="First Name"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2 block"
                        >
                          {" "}
                          Input Category
                      </label>
                      <Listbox value={inputCategory} onChange={setInputCategory}>
                        <Listbox.Button className="relative text-left border border-gray-100 bg-gray-50 rounded-lg h-10 w-full text-sm focus:outline-none px-3 py-2">
                          <span className="block">{inputCategory?.name || "Select input category"}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        
                        <Listbox.Options className="mt-1 overflow-auto rounded-md border border-gray-100 bg-gray-50 w-full z-[200] shadow-sm text-gray-800">
                          {inputsCategoryList?.map((inputCategories) => (
                            <Listbox.Option
                              key={inputCategories?.id}
                              value={inputCategories}
                              className="hover:bg-gray-100 cursor-pointer pl-3 py-2 text-base"
                            >

                              {inputCategories?.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                    <div className="mb-4">
                    <label
                          htmlFor="inputUnit"
                          className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight block mb-2"
                        >
                          {" "}
                          Input Unit
                      </label>
                      <Listbox value={inputUnit} onChange={setInputUnit}>
                        <Listbox.Button className="relative text-left border border-gray-100 bg-gray-50 rounded-lg h-10 w-full text-sm focus:outline-none px-3 py-2">
                          <span className="block">{inputUnit?.unitName || "Select input unit"}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        
                        <Listbox.Options className="mt-1 overflow-auto rounded-md border border-gray-100 bg-gray-50 w-full z-[200] shadow-sm text-gray-800">
                          {inputsUnitList?.map((inputUnit) => (
                            <Listbox.Option
                              key={inputUnit?.id}
                              value={inputUnit}
                              className="hover:bg-gray-100 cursor-pointer pl-3 py-2 text-base"
                            >

                              {inputUnit?.unitName}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  <div className=" flex flex-row items-center justify-end space-x-3">
                    <button
                      type="button"
                      className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setOpenAddInputModal(false)}
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

export default AddInputModal;
