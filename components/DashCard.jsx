import React from "react";

const DashCard = ({ title, description, value }) => {
  return (
    <div className="p-6 rounded-md shadow border hover:scale-105">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="text-4xl font-bold">{value}</div>
    </div>
  );
};

export default DashCard;
