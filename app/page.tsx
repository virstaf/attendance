import Link from "next/link";

export default function Home() {
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
