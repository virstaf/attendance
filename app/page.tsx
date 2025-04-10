import { getUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const userObject = await getUser();

  if (!userObject) {
    redirect("/login");
  }
  redirect("/home");

  return (
    <div className="min-h-[calc(100vh-64px)] items-center justify-center">
      {/* <Dashboard /> */}
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
        <h3 className="py-6">Welcome to Attendance Landing Page... </h3>
        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/home">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
