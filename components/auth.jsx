import { getUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const mockUser = {
  user_metadata: { email: "tunique@gmail.com", username: "unique" },
};

export const AuthGuard = async ({ children }) => {
  const userObject = (await getUser()) || mockUser;

  if (!userObject) {
    redirect("/login");
  }

  // console.log("auth user:::", userObject.user_metadata);

  return <>{children}</>;
};
