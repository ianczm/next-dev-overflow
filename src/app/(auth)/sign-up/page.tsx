"use client";

import React from "react";

import AuthForm from "@/components/forms/auth/AuthForm";
import { SignUpSchema } from "@/lib/validators/auth-form";

const SignUpPage = () => {
  return (
    <div>
      <AuthForm
        formType="sign-up"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUpPage;
