"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const AuthForm = ({ type }) => {
  const isLoginForm = type === "login";
  const router = useRouter();
  const { isPending, startTransition } = useTransition();

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full gap-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            disabled={isPending}
          />
        </div>

        <Button>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Register"
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground mt-4">
        <p>
          {isLoginForm
            ? `Don't have an account? `
            : `Already have an account? `}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 underline ${
              isPending ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {isLoginForm ? "Sign up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
