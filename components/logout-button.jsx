"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutAction } from "../action/users";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);

    const errorMessage = await logoutAction().errorMessage;

    if (errorMessage === null) {
      toast.success("Logged out", {
        description: "You've been logged out successfully",
      });
      router.push("/");
    } else {
      toast.error("Logout failed", {
        description: errorMessage.errorMessage,
      });
    }

    setLoading(false);
  };
  return (
    <Button className="w-24" disabled={loading} onClick={handleLogout}>
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
