"use client";
import SuperJSON from "superjson";
import { createSWRProxyHooks } from "trpc-swr";
import { CreateTRPCClientOptions, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "src/server/root";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import React, { useState } from "react";
import { auth } from "../auth";
import { getBaseUrl } from "./utils";

export const trpcClientSettings = {
  transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      async headers() {
        const access_token = await auth.getIdToken();
        return {
          Authorization: `Bearer ${access_token}`,
        };
      },
    }),
  ],
} satisfies CreateTRPCClientOptions<AppRouter>;

export const api = createSWRProxyHooks<AppRouter>(trpcClientSettings);

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const ApiProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [client] = useState(() => api.createClient());
  return <api.Provider client={client}>{children}</api.Provider>;
};
