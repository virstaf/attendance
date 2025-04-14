import React from "react";
import { attendanceSummary } from "../lib/data";
import DashCard from "./DashCard";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="container h-full mx-auto py-8 flex flex-col justify-center items-center ">
        <div className="heading text-2xl mb-6 font-bold">
          <h2>Attendance Summary</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {attendanceSummary.map((item, index) => (
            <DashCard
              key={index}
              title={item.title}
              description={item.description}
              value={parseInt(item.value).toLocaleString()}
            ></DashCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
