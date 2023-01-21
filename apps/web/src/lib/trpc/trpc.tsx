"use client";
import SuperJSON from "superjson";
import { createSWRProxyHooks } from "trpc-swr";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "src/server/root";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import React, { useState } from "react";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const api = createSWRProxyHooks<AppRouter>({
  transformer: SuperJSON,
  links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const ApiProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [client] = useState(() => api.createClient());
  return <api.Provider client={client}>{children}</api.Provider>;
};
