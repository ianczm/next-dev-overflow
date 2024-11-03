"use client";

import React from "react";

import AuthForm from "@/components/forms/auth/AuthForm";
import { SignInSchema } from "@/lib/validators/auth-form";

const SignInPage = () => {
  return (
    <div>
      <AuthForm
        formType="sign-in"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignInPage;
