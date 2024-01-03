"use client"
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/src/apollo/ApolloClient";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns"
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
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@/components/icons/ArrowBack";
import { useCreateFarmerProfileMutation, useGetGeoCorpByIdQuery } from "@/src/generated/graphql";

type FormData = {
  name: string;
  email: string
};

const CreateFamerProfile = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch
  } = useForm<FormData>();
  const {id} = useParams()
  const [newFarmLotList, setNewFarmLotList] = useState<string[]>([])
  const [createFarmerProfileMutation, { data: createData, loading: createLoading, error: createError }] = useCreateFarmerProfileMutation();

  const handleNameChange = (index: number, newLotId: string): void => {
    const newList: string[] = [...newFarmLotList];
    newList[index] = newLotId;
    setNewFarmLotList(newList);
  };
  
  const handleAddItem = (): void => {
    const newItem: string = ""
    setNewFarmLotList([...newFarmLotList, newItem]);
  };

  const handleDeleteItem = (index: number): void => {
    const newList: string[] = [...newFarmLotList];
    newList.splice(index, 1);
    setNewFarmLotList(newList);
  };


  const { data, loading, error } = useGetGeoCorpByIdQuery({
    variables: {
       geoCorpId: id
    },
  });

  const farmLotList = data?.getGeoCorpById?.farmLots
  
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
      description: "Farmer's Profile Created",
      duration: 3000,
    });
  };
  
  const onSubmitHandler =async (form: FormData) => {
    try {
      const response = await createFarmerProfileMutation({
        variables: {
            coorperativeId: id,
            farmLotIds: newFarmLotList,
            ...form
         },
      })
      client.refetchQueries({
        include: "active",
      });
      window.location.reload();
      showSuccessToast()
    } catch (error) {
      console.error(error); 
      showFailureToast()
    }
  }

    
  return (
    <div className="px-4 sm:px-6 lg:px-32 pb-10">
        <Link 
            href={`/dashboard/cooperatives/${id}`}
            className="flex text-sm text-gray-700 items-center gap-x-2">
            <ArrowBackIcon />
            Back to Cooperative
        </Link>
        <div className="flex items-center justify-between space-y-2 mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600">
            Create Farmer
          </h2>
        </div>
        <div className="mt-20">
        <form className=" flex flex-col gap-y-6" 
            action="#" 
            method="POST"
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Farmer Name
              </label>
              <div className="mt-[6px]">
                <input
                  id="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-1/2 h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                  {...register("name")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Email address
              </label>
              <div className="mt-[6px]">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-1/2 h-[36px] focus:ring-2 focus:ring-primary-green rounded-md border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="w-1/2 mt-8 mb-16">
                <div className="flex justify-between w-full">
                    <h6>Farm Lots</h6>
                    <button type="button" onClick={handleAddItem} className="flex items-center gap-x-1 cursor-pointer">
                        Add Farm Lot
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
                            Farm Lot
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
                        {newFarmLotList.map((equip, index) => (
                          <tr key={index}>
                            <td className="whitespace-nowrap py-5 text-sm sm:pl-0">
                              <div className="flex items-center mr-10">
                              <Select
                                value={equip}
                                onValueChange={(value) => handleNameChange(index, value)}
                              >
                                <SelectTrigger className="border w-[350px] border-gray-100 bg-transparent rounded-lg h-10 text-sm  focus:outline-none px-3 py-2">
                                  <SelectValue placeholder="Select a crop" />
                                </SelectTrigger>
                                <SelectContent >
                                  <SelectGroup>
                                    {
                                      farmLotList?.map((item) => (
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
            <div className="text-end w-1/2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
                  onClick={() => {}}
                >
                  Create Farmer
                </button>
            </div>
          </form>
        </div>
        
    </div>
  );
};

export default CreateFamerProfile;
