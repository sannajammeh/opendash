"use client";
import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Button, classed, Input, Spacer, Text } from "@opendash/ui";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWRMutation, { MutationFetcher } from "swr/mutation";
import { auth, Session } from "src/lib/auth";
import { TRPCClientError, TRPCClientErrorLike } from "@trpc/client";
import { AppRouter } from "src/server/root";
import { useRouter, useSearchParams } from "next/navigation";

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

type AuthMutationArg = Schema & {
  register?: boolean;
};

const fetcher = async (_: any, { arg }: { arg: AuthMutationArg }) => {
  const session = await auth[arg.register ? "signUp" : "signIn"](
    arg.email,
    arg.password
  );
  return session;
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [registerMode, setRegister] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(registerMode ? registerSchema : loginSchema),
  });

  const { data, isMutating, trigger, error } = useSWRMutation<
    Session,
    TRPCClientError<AppRouter>,
    string,
    AuthMutationArg
  >("auth.authenticate", fetcher);

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      await trigger({
        ...data,
        register: registerMode,
      });
      router.push(`/${searchParams.get("redirect") ?? ""}`);
    } catch (error: any) {}
  };

  // Depend on searchParams to preload the redirect
  useEffect(() => {
    router.prefetch(`/${searchParams.get("redirect") ?? ""}`);
  }, [searchParams, router]);

  const isLoading = isMutating;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text block as="h1" center size="title" weight="medium">
        {registerMode ? "Register at" : "Login to"} OpenDash
      </Text>
      <Spacer />

      {error && (
        <Text block as="p" center color="red" size="2" weight="medium">
          {error.message}
        </Text>
      )}
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
        {!registerMode ? "Login" : "Register"}
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
