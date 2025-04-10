// "use server";

import { getUser } from "@/auth/server";
import LogoutButton from "./logout-button";
import { Button } from "./ui/button";
import Link from "next/link";

const UserProfile = () => {
  const user = getUser();
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
