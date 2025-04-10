"use client";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

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

  return (
    <div className="flex gap-3 h-full items-center justify-center">
      {user ? (
        <>
          {user.email}
          <LogoutButton />
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
