"use client";
import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Button, classed, Input, Spacer, Text } from "ui";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { auth } from "src/lib/auth";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Schema = z.infer<typeof registerSchema> | z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [registerMode, setRegister] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(registerMode ? registerSchema : loginSchema),
  });

  const {
    data,
    isMutating: registerLoading,
    trigger: triggerRegister,
  } = useSWRMutation<unknown, unknown, string, z.infer<typeof registerSchema>>(
    "auth.register",
    async (_, { arg }) => {
      const session = await auth.signUp(arg.email, arg.password);

      return session;
    }
  );

  const {
    data: loginData,
    isMutating: loginLoading,
    trigger: triggerLogin,
  } = useSWRMutation<unknown, unknown, string, z.infer<typeof loginSchema>>(
    "auth.login",
    async (_, { arg }) => {
      const session = await auth.signIn(arg.email, arg.password);

      return session;
    }
  );

  console.log({
    loginData,
    registerData: data,
  });

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    if (registerMode) {
      return triggerRegister(data as z.infer<typeof registerSchema>);
    }

    triggerLogin(data as z.infer<typeof loginSchema>);
  };

  const isLoading = registerLoading || loginLoading;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text block as="h1" center size="title" weight="medium">
        {registerMode ? "Register at" : "Login to"} OpenDash
      </Text>
      <Spacer />

      <Label htmlFor="email">
        <span className="min-w-[30%]">Email</span>
        <Input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
      </Label>
      <Spacer />
      <Label htmlFor="password">
        <span className="min-w-[30%]">Password</span>
        <Input
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
      </Label>
      <Spacer />
      {registerMode && (
        <>
          <Label htmlFor="confirmPassword">
            <span className="min-w-[30%]">Confirm password</span>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate(value, formValues) {
                  return value === formValues.password;
                },
              })}
            />
          </Label>
          <Spacer />
        </>
      )}
      <Button
        icon={<FiLogIn />}
        space="center"
        className="w-full"
        color="secondary"
        size="2"
        variant="flat"
        loading={isLoading}
      >
        Login
      </Button>
      <div className="text-radix-slate11 text-xs mt-2">
        {registerMode ? "Already have an account?" : "Not a user?"}{" "}
        <button
          type="button"
          onClick={() => setRegister(!registerMode)}
          className="w-max !inline-flex text-radix-blue11 hover:underline"
        >
          {registerMode ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

const Label = classed("label", Text, {
  base: "flex flex-col md:flex-row md:items-center gap-1 md:gap-6",
  defaultVariants: {
    size: 2,
    weight: "medium",
  },
});
