import React from "react";
import DashHeader from "@/components/dash-header";
import AddEventForm from "@/components/add-event-form";

const EventsPage = () => {
  return (
    <div className="container min-h-[calc(100vh-64px)] mx-auto px-4">
      <DashHeader page="Events" />
      EventsPage
      <AddEventForm />
    </div>
  );
};

export default EventsPage;
