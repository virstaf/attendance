"use client";

import { useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { loginAction, signupAction } from "../action/users";
import { getUser } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const AuthForm = ({ type }) => {
  const isLoginForm = type === "login";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchUser = async () => {
      const userObject = await getUser();

      if (userObject) {
        redirect("/home");
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (formData) => {
    startTransition(async () => {
      const email = await formData.get("email");
      const password = await formData.get("password");

      let errorMessage;
      let title;
      let description;

      if (isLoginForm) {
        errorMessage = await loginAction(email, password).errorMessage;
        title = "Login Successful";
        description = "You have been successfully logged in";
      } else {
        errorMessage = await signupAction(email, password).errorMessage;
        title = "Signup Successful";
        description = "Check your email for confirmation link";
      }

      if (!errorMessage) {
        toast.success(title, { description });
        router.replace("/home");
      } else {
        toast.error("Error", { description: errorMessage });
      }
    });
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

        <Button className="my-4">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Signup"
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
