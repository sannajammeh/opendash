import { z } from "zod";
import { authProcedure, isNextHandler, t } from "../trpc";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { createToken, verifyIdToken, createRefreshToken } from "../auth/jwt";
import { User } from "db";
import { exclude } from "src/utils/data";
import dayjs from "dayjs";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export interface AuthSession {
  refresh_token: string;
  access_token: string;
  user: Omit<User, "password">;
}

export const authRouter = t.router({
  createUser: t.procedure
    .use(isNextHandler)
    .input(registerSchema)
    .mutation(async ({ input, ctx: { prisma } }) => {
      if (input.password !== input.confirmPassword)
        throw new TRPCError({
          message: "Passwords do not match",
          code: "BAD_REQUEST",
        });

      const user = await prisma.user.create({
        data: {
          email: input.email,
          password: await bcrypt.hash(input.password, 10),
        },
      });

      const refreshToken = await createRefreshToken(user);
      await prisma.session.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
          expiresAt: dayjs().add(30, "day").toDate(),
        },
      });

      return {
        access_token: await createToken(user),
        refresh_token: refreshToken,
        user: exclude(user, "password"),
      };
    }),

  authenticate: t.procedure
    .use(isNextHandler)
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user)
        throw new TRPCError({
          message: "Invalid credentials",
          code: "UNAUTHORIZED",
        });

      const passwordMatch = await bcrypt.compare(input.password, user.password);

      if (!passwordMatch)
        throw new TRPCError({
          message: "Invalid credentials",
          code: "UNAUTHORIZED",
        });

      const refreshToken = await createRefreshToken(user);
      await ctx.prisma.session.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
          expiresAt: dayjs().add(30, "day").toDate(),
        },
      });

      return {
        access_token: await createToken(user),
        refresh_token: await createRefreshToken(user),
        user: exclude(user, "password"),
      };
    }),

  getUser: authProcedure.query(({ ctx: { session, user } }) => {
    return {
      session,
      user: exclude(user, "password"),
    };
  }),

  revokeRefreshToken: t.procedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.session.delete({
        where: {
          refreshToken: input,
        },
      });

      return true;
    }),

  // Refresh token
  refresh: t.procedure.input(z.string()).query(async ({ input, ctx }) => {
    const payload = await verifyIdToken(input);
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: parseInt(payload.sub!),
      },
    });

    if (!user)
      throw new TRPCError({
        message: "Invalid credentials",
        code: "UNAUTHORIZED",
      });

    const session = await ctx.prisma.session.findFirst({
      where: {
        userId: user.id,
        refreshToken: input,
        expiresAt: {
          gte: new Date(),
        },
      },
    });

    if (!session)
      throw new TRPCError({
        message: "Invalid credentials",
        code: "UNAUTHORIZED",
      });

    const { refresh_token, access_token } = await createTokens(user);

    // Delete old refresh token
    await ctx.prisma.session.delete({
      where: {
        id: session.id,
      },
    });

    return {
      access_token: access_token,
      refresh_token: refresh_token,
      user: exclude(user, "password"),
    };
  }),
});

const createTokens = async (user: Omit<User, "password">) => {
  return {
    access_token: await createToken(user),
    refresh_token: await createRefreshToken(user),
  };
};
