import React from "react";
import ModeToggle from "./ui/mode-toggle";
import UserProfile from "./UserProfile";

const Header = async () => {
  const pageHeader = "Dashboard";
  return (
    <header className="w-full sticky top-0 h-16 border border-x-0 border-t-0 backdrop-blur-2xl bg-popover">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {pageHeader}
        <div className="flex gap-3 h-full items-center justify-center">
          <ModeToggle />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
