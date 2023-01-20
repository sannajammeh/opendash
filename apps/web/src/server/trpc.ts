import { initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { NextApiRequest, NextApiResponse } from "next";
import SuperJSON from "superjson";

interface CreateContextOptions {
  req?: NextApiRequest;
  res?: NextApiResponse;
}

export const createTRPCContext = (opts: CreateContextOptions) => {
  return {
    req: opts.req,
    res: opts.res,
  };
};

export const createTRPCNextContext = async (opts: CreateNextContextOptions) => {
  return createTRPCContext(opts);
};

export const t = initTRPC.context<typeof createTRPCNextContext>().create({
  transformer: SuperJSON,
});
