"use client";
import React from "react";

import { Activity, CreditCard, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RecentSales } from "@/components/recent-sales";
import { useGetActivitiesQuery, useGetCropProfilesQuery, useGetFarmLotsQuery, useGetFarmerProfilesQuery, useGetGeoCorpsQuery, useGetLandGroupsQuery } from "@/src/generated/graphql";

const Dashboard = () => {
  const getFarmerProfiles = useGetFarmerProfilesQuery();
  const getGeoCorps = useGetGeoCorpsQuery()
  const getFarmLots = useGetFarmLotsQuery()
  const getLandGroups = useGetLandGroupsQuery()
  const getActivities = useGetActivitiesQuery()
  const farmersNumber = getFarmerProfiles.data?.getFarmerProfiles.length
  const numberCorps = getGeoCorps.data?.getGeoCorps.length
  const numberOfLandGroups = getLandGroups.data?.getLandGroups.length
  const numberOfFarmersLot = getFarmLots.data?.getFarmLots.length

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-0">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600">
              Dashboard
            </h2>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
              >
                Create new
              </button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger className=" text-gray-600" value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      No of Cooperatives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-600">{numberCorps}</div>
                    <p className="text-xs text-gray-600">
                    
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Farmers
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-600">{farmersNumber}</div>
                    <p className="text-xs text-gray-600">
                     
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Land groups
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-gray-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-600">{numberOfLandGroups}</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Farm lots
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-600">{numberOfFarmersLot}</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle className=" text-gray-600">
                      Upcoming Activities
                    </CardTitle>
                    <CardDescription className=" text-gray-600">
                      Upcoming activities for the week.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center justify-between space-x-2">
                      <Label
                        htmlFor="necessary"
                        className="flex flex-col space-y-1"
                      >
                        <span className=" text-gray-600">Abraham Ayegba</span>
                        <div className=" flex flex-row">
                          <span className="font-normal leading-snug text-muted-foreground">
                            Farm clearing,
                          </span>
                          <span className="font-normal leading-snug text-muted-foreground ml-[2px]">
                            scheduled on thursday 28th, June
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label
                        htmlFor="functional"
                        className="flex flex-col space-y-1"
                      >
                        <span className=" text-gray-600">Favour Obafemi</span>
                        <div className=" flex flex-row">
                          <span className="font-normal leading-snug text-muted-foreground">
                            Crop planting,
                          </span>
                          <span className="font-normal leading-snug text-muted-foreground ml-[2px]">
                            scheduled on thursday 22th, June
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label
                        htmlFor="performance"
                        className="flex flex-col space-y-1"
                      >
                        <span className=" text-gray-600">Similoluwa</span>
                        <div className=" flex flex-row">
                          <span className="font-normal leading-snug text-muted-foreground">
                            Crop watering,
                          </span>
                          <span className="font-normal leading-snug text-muted-foreground ml-[2px]">
                            scheduled on monday 28th, June
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label
                        htmlFor="performance"
                        className="flex flex-col space-y-1"
                      >
                        <span className=" text-gray-600">Bidemi Abiodun</span>
                        <div className=" flex flex-row">
                          <span className="font-normal leading-snug text-muted-foreground">
                            Fertilizer application,
                          </span>
                          <span className="font-normal leading-snug text-muted-foreground ml-[2px]">
                            scheduled on monday 28th, June
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label
                        htmlFor="performance"
                        className="flex flex-col space-y-1"
                      >
                        <span className=" text-gray-600">Tamara</span>
                        <div className=" flex flex-row">
                          <span className="font-normal leading-snug text-muted-foreground">
                            Crop planting,
                          </span>
                          <span className="font-normal leading-snug text-muted-foreground ml-[2px]">
                            scheduled on tuesday 28th, June
                          </span>
                        </div>
                      </Label>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle className=" text-gray-600">
                      Recent Activities
                    </CardTitle>
                    <CardDescription className=" text-gray-600">
                      Activities recently completed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Dashboard;