import React from "react";

import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";
import Image from "next/image";
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

const Dashboard = () => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-0">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600">
              Dashboard
            </h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
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
                    <div className="text-2xl font-bold text-gray-600">150</div>
                    <p className="text-xs text-gray-600">
                      +20.1% from last month
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
                    <div className="text-2xl font-bold text-gray-600">100</div>
                    <p className="text-xs text-gray-600">
                      +10.1% from last month
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
                    <div className="text-2xl font-bold text-gray-600">+34</div>
                    <p className="text-xs text-muted-foreground">
                      +3% from last month
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
                    <div className="text-2xl font-bold text-gray-600">73</div>
                    <p className="text-xs text-muted-foreground">
                      +11 since last month
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
                      {/* <Switch id="necessary" defaultChecked /> */}
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
                      {/* <Switch id="functional" /> */}
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
                      {/* <Switch id="performance" /> */}
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
                      {/* <Switch id="performance" /> */}
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
                      {/* <Switch id="performance" /> */}
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
