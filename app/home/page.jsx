import React from "react";
import Dashboard from "@/components/Dashboard";
import DashHeader from "@/components/dash-header";

const page = () => {
  return (
    <div className="container min-h-[calc(100vh-64px)] mx-auto px-4">
      <DashHeader page="Overview" description="" className="w-full mx-auto" />
      <Dashboard />
    </div>
  );
};

export default page;
