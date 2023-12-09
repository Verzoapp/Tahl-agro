"use client"
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PlusIcon from "@/components/icons/PlusIcon";
import { useCreateActivityMutation, useGetCropProfilesQuery, useGetEquipmentsQuery, useGetInputsQuery } from "@/src/generated/graphql";

type FormData = {
  name: string;
};

interface EquipmentItem {
  equipmentId: string;
  quantity: number;
}

interface InputItem {
  inputId: string;
  name: string;
  quantity: number;
}

const CreateActivity = () => {
    const [equipList, setEquipList] = useState<EquipmentItem[]>([]);
    const [farmInputList, setFarmInputList] = useState<InputItem[]>([]);
    const [cropProfleId, setCropProfileId] = useState("")
    const [costValue, setCostValue] = useState("")
    const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation()
    const getGeoCropProfile = useGetCropProfilesQuery()
    const getEquipment = useGetEquipmentsQuery()
    const getInputs = useGetInputsQuery()
    const equipmentList = getEquipment.data?.getEquipments
    const inputList = getInputs.data?.getInputs
    const cropProfileList = getGeoCropProfile.data?.getCropProfiles

    const {
      register,
      handleSubmit,
      getValues,
    } = useForm<FormData>();

    const handleNameChange = (index: number, newEquipId: string): void => {
      const newList: EquipmentItem[] = [...equipList];
      newList[index].equipmentId = newEquipId;
      setEquipList(newList);
    };
  
    const handleQuantityChange = (index: number, newQuantity: string): void => {
      const newList: EquipmentItem[] = [...equipList];
      newList[index].quantity = parseInt(newQuantity);
      setEquipList(newList);
    };
    
    const handleAddItem = (): void => {
      const newItem: EquipmentItem = {
        equipmentId: "",
        quantity: 0,
      };
  
      setEquipList([...equipList, newItem]);
    };

    const handleDeleteItem = (index: number): void => {
      const newList: EquipmentItem[] = [...equipList];
      newList.splice(index, 1);
      setEquipList(newList);
    };
  
    const handleInputNameChange = (index: number, newInputId: string): void => {
      const newList: InputItem[] = [...farmInputList];
      newList[index].inputId = newInputId;
      if (newInputId) {
        const matchingItem = inputList?.find((item) => item?.id === newInputId);
        if (matchingItem) {
          newList[index].name = matchingItem.name!;
        }
      }
      setFarmInputList(newList)
    };

    const handleInputQuantityChange = (index: number, newQuantity: string): void => {
      const newList: InputItem[] = [...farmInputList];
      newList[index].quantity = parseInt(newQuantity);
      setFarmInputList(newList)
    };

    const handleAddInput = (): void => {
      const newItem: InputItem = {
        inputId: "",
        quantity: 0,
        name: ""
      };
      setFarmInputList([...farmInputList, newItem])
    };

    const handleDeleteInput = (index: number): void => {
      const newList: InputItem[] = [...farmInputList];
      newList.splice(index, 1);
      setFarmInputList(newList);
    };

    const cost = parseInt(costValue)
    const showFailureToast = () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        duration: 3000,
      });
    };

    const showSuccessToast = () => {
      toast({
        variant: "default",
        title: "Sucess!",
        description: "Request sent",
        duration: 3000,
      });
    };

    const onSubmitHandler = async (form: FormData) => {
      try {
        const response = await createActivityMutation({
          variables: {
             cost:cost,
             cropProfileId: cropProfleId,
             activityEquipment: equipList,
             activityInput: farmInputList,
             ...form
          },
        })
        client.refetchQueries({
          include: "active",
        });
        window.location.reload();
        showSuccessToast()
      } catch (error) {
        showFailureToast()
      }
    };

  return (
    <div className="px-4 sm:px-6 lg:px-32 pb`-10">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Create Activity
        </h2>
        <p className="text-sm tracking-tight pt-1 text-gray-700">Fill out the information below to create an invoice</p>
        
      </div>
      <div className="mt-16 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <form className=" flex h-auto w-[820px] flex-col" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="flex h-[70px] flex-col items-start mb-10">
                  <label
                    htmlFor="First Name"
                    className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                  >
                    {" "}
                    Activity Name
                  </label>
                  <input
                    type="text"
                    required
                    className=" block h-[38px] w-full appearance-none rounded-md border border-gray-100 bg-transparent px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                    {...register("name")}
                  />
                </div>
                <div className="flex w-full justify-between mb-10">
                    <div className="flex h-[70px] flex-col items-start">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Cost
                      </label>
                      <input
                        type="text"
                        required
                        className=" block h-[38px] w-[390px] appearance-none rounded-md border border-gray-100 bg-transparent px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                        onChange={(e) => setCostValue(e.target.value)}
                      />
                    </div>
                    <div className="flex h-[70px] flex-col items-start">
                      <label
                        htmlFor="First Name"
                        className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                      >
                        {" "}
                        Crop
                      </label>
                      <Select
                        value={cropProfleId}
                        onValueChange={(value) => setCropProfileId(value)}
                      >
                        <SelectTrigger className="border w-[390px] border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                          <SelectValue placeholder="Select a crop" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectGroup>
                            {
                              cropProfileList?.map((item) => (
                                <SelectItem
                                  value={item?.id!}
                                  key={item?.id}
                                  className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                >
                                  {item?.cropName}
                                </SelectItem>
                              ))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
                <div className="w-full mb-16">
                    <div className="flex justify-between">
                        <h6>Equipments</h6>
                        <button type="button" onClick={handleAddItem} className="flex items-center gap-x-1 cursor-pointer">
                            Add Equipment
                            <span><PlusIcon /></span>
                        </button>
                    </div>
                    <div className="mt-2">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 w-[350px] pr-3 text-left text-sm font-medium tracking-tight text-gray-600"
                            >
                              Equipment Name
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 w-[350px] text-left text-sm font-medium tracking-tight text-gray-600"
                            >
                              Qty
                            </th>
                            <th
                              scope="col"
                              className="relative whitespace-nowrap py-3.5 pl-3 pr-4 text-right text-sm font-medium tracking-tight text-gray-600 sm:pr-0"
                            >
                              {""}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {equipList.map((equip, index) => (
                            <tr key={index}>
                              <td className="whitespace-nowrap py-5 text-sm sm:pl-0">
                                <div className="flex items-center mr-10">
                                <Select
                                  value={equip.equipmentId}
                                  onValueChange={(value) => handleNameChange(index, value)}
                                >
                                  <SelectTrigger className="border w-[350px] border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                                    <SelectValue placeholder="Select a crop" />
                                  </SelectTrigger>
                                  <SelectContent >
                                    <SelectGroup>
                                      {
                                        equipmentList?.map((item) => (
                                          <SelectItem
                                            value={item?.id!}
                                            key={item?.id}
                                            className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                          >
                                            {item?.name}
                                          </SelectItem>
                                        ))
                                      }
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                </div>
                              </td>
                              <td className="whitespace-nowrap py-5 text-sm text-gray-700">
                                <div className="font-normal tracking-tight text-gray-600">
                                  <input
                                    type="number"
                                    required
                                    value={equip.quantity}
                                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                                    className="block h-[38px] w-[350px] appearance-none rounded-md border border-gray-100 bg-transparent px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                                  />
                                </div>
                              </td>
                              <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-normal tracking-tight text-gray-600 sm:pr-0">
                                <button type="button" 
                                  onClick={() => handleDeleteItem(index)} 
                                  className="text-red-700 hover:text-red-400 font-normal">
                                  <span className="sr-only"></span>
                                  delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                </div>
                <div className="w-full mb-16">
                    <div className="flex justify-between w-full">
                        <h6>Farm Inputs</h6>
                        <button type="button" onClick={handleAddInput} className="flex items-center gap-x-1 cursor-pointer">
                            Add Farm Input
                            <span><PlusIcon /></span>
                        </button>
                    </div>
                    <div className="mt-2 w-full">
                      <table className="w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 w-[350px] pr-3 text-left text-sm font-medium tracking-tight text-gray-600"
                            >
                              Input Name
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 w-[350px] text-left text-sm font-medium tracking-tight text-gray-600"
                            >
                              Qty
                            </th>
                            <th
                              scope="col"
                              className="relative whitespace-nowrap py-3.5 pl-3 pr-4 text-right text-sm font-medium tracking-tight text-gray-600 sm:pr-0"
                            >
                              {""}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {farmInputList.map((input, index) => (
                            <tr key={index}>
                              <td className="whitespace-nowrap py-5 text-sm sm:pl-0">
                                <div className="flex items-center mr-10">
                                <Select
                                  value={input.inputId}
                                  onValueChange={(value) => handleInputNameChange(index, value)}
                                >
                                  <SelectTrigger className="border w-[350px] border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                                    <SelectValue placeholder="Select a crop" />
                                  </SelectTrigger>
                                  <SelectContent >
                                    <SelectGroup>
                                      {
                                        inputList?.map((item) => (
                                          <SelectItem
                                            value={item?.id!}
                                            key={item?.id}
                                            className="hover:bg-gray-100 cursor-pointer py-2 text-base"
                                          >
                                            {item?.name}
                                          </SelectItem>
                                        ))
                                      }
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                </div>
                              </td>
                              <td className="whitespace-nowrap py-5 text-sm text-gray-700">
                                <div className="font-normal tracking-tight text-gray-600">
                                  <input
                                    type="number"
                                    required
                                    value={input.quantity}
                                    onChange={(e) => handleInputQuantityChange(index, e.target.value)}
                                    className="block h-[38px] w-[350px] appearance-none rounded-md border border-gray-100 bg-transparent px-3 py-2 capitalize placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2aa249] sm:text-sm"
                                  />
                                </div>
                              </td>
                              <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-normal tracking-tight text-gray-600 sm:pr-0">
                                <button  
                                  onClick={() => handleDeleteInput(index)} 
                                  className="text-red-700 hover:text-red-400 font-normal">
                                  <span className="sr-only"></span>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                </div>
                <div className=" flex flex-row items-center justify-end space-x-3">
                    <button
                      type="button"
                      className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateActivity;
