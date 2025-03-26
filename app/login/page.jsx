import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-65px)]">
      <Card className="max-w-[450px] w-full h-full">
        <CardHeader>
          <CardTitle className="text-2xl leading-0.5 text-center">
            Login
          </CardTitle>
        </CardHeader>
        <AuthForm type="login" />
      </Card>
    </div>
  );
};

export default LoginPage;
