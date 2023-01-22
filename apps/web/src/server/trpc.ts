import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { NextApiRequest, NextApiResponse } from "next";
import SuperJSON from "superjson";
import { prisma, User } from "db";
import { verifyIdToken } from "./auth/jwt";
import { JWTPayload } from "jose";

export type Bearer = `Bearer ${string}`;

interface CreateContextOptions {
  req?: NextApiRequest;
  res?: NextApiResponse;
  /**
   * Authorization header
   * @type Bearer
   */
  Authorization?: Bearer;
}

export const createTRPCContext = async (opts: CreateContextOptions) => {
  let user: User | null = null;
  let session: JWTPayload | null = null;
  if (opts.Authorization) {
    const token = opts.Authorization.split(" ")[1];
    if (token) {
      const payload = await verifyIdToken(token);
      session = payload;
      user = await prisma.user.findUnique({
        where: {
          id: parseInt(payload.sub!),
        },
      });
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    prisma,
    user,
    session,
  };
};

export const createTRPCNextContext = async (opts: CreateNextContextOptions) => {
  return createTRPCContext({
    ...opts,
    Authorization: opts.req.headers.authorization as Bearer,
  });
};

export const t = initTRPC.context<typeof createTRPCNextContext>().create({
  transformer: SuperJSON,
});

const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  if (!ctx.user || !ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.user,
      session: ctx.session,
    },
  });
});

export const isNextHandler = t.middleware(async ({ ctx, next }) => {
  if (!ctx.req) {
    throw new TRPCError({
      message: "Must be hit via next server handler",
      code: "BAD_REQUEST",
    });
  }
  return next({
    ctx: {
      req: ctx.req,
      res: ctx.res!,
    },
  });
});

export const authProcedure = t.procedure.use(isAuthenticated);
