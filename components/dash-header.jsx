import React from "react";
import SearchComponent from "./SearchComponent";

const DashHeader = ({ page, description, className }) => {
  return (
    <div
      className={`max-w-3xl mx-auto flex justify-between flex-wrap-reverse items-center gap-3 my-4 ${className}`}
    >
      <div className="flex flex-col">
        <h3 className="text-3xl tracking-tight font-semibold">{page}</h3>
        <p className="text-sm">{description && description}</p>
      </div>
      <SearchComponent />
    </div>
  );
};

export default DashHeader;
