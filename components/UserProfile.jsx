"use client";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/supabase/server";
import LogoutButton from "./logout-button"
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [userOpen, setUserOpen] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const userObject = await getUser();

      if (!userObject) {
        redirect("/home");
      }
      setUser(userObject.user_metadata);
    };
    fetchUser();
  }, []);

  const toggleOpen = ()=>{
    setUserOpen((prev)=>!prev)
  }

  return (
    <div className="flex gap-3 h-full items-center justify-center">
      {user ? (
        <>
          <div onClick={toggleOpen} className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full border-3 border-primary cursor-pointer hover:bg-primary/10 transition-all">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-2xl font-bold">
              {user.email[0].toUpperCase()}
            </div>
            {userOpen && <div className="absolute top-12 right-0">
              <LogoutButton /></div>}
          </div>
        </>
      ) : (
        <>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
