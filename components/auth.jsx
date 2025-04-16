import { getUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const AuthGuard = async ({ children }) => {
  const userObject = await getUser();

  if (!userObject) {
    redirect("/login");
  }

  return <>{children}</>;
};
