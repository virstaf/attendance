import React from "react";
import DashHeader from "@/components/dash-header";
import AddMemberForm from "@/components/add-member-form";

const MembersPage = () => {
  return (
    <div className="container min-h-[calc(100vh-64px)] mx-auto px-4">
      <DashHeader page="Members" />
      <div className="w-full h-full">
        <AddMemberForm />
      </div>
    </div>
  );
};

export default MembersPage;
