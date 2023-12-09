"use client";

import LeftSideBar from "@/components/leftSideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LeftSideBar />
      <div className="lg:pl-[250px]">
        <main className="pt-[50px]">
          <div className="px-2 sm:px-2 lg:px-2">{children}</div>
        </main>
      </div>
    </div>
  );
}