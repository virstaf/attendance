import React from "react";
import ModeToggle from "./ui/mode-toggle";
import { Button } from "./ui/button";
import LogoutButton from "./logout-button";
import Link from "next/link";
import { getUser } from "@/auth/server";

const Header = async () => {
  const user = await getUser();
  const pageHeader = "Dashboard";
  return (
    <header className="w-full sticky top-0 h-16 border border-x-0 border-t-0 backdrop-blur-2xl bg-popover">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {pageHeader}
        <div className="flex gap-3 h-full items-center justify-center">
          {user ? (
            <>
              {user.email}
              <LogoutButton />
            </>
          ) : (
            <>
              <Button asChild variant="outline" className="hidden sm:block">
                <Link href="/signup">Sign up</Link>
              </Button>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
