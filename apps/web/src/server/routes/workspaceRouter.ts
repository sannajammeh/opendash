import { z } from "zod";
import { authProcedure, t } from "../trpc";

export const workspaceRouter = t.router({
  create: authProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx: { prisma, user } }) => {
      return prisma.workspace.create({
        data: {
          name: input.name,
          ownerId: user.id,
          users: {
            connect: { id: user.id },
          },
        },
      });
    }),

  getAll: authProcedure.query(({ ctx: { prisma, user } }) => {
    return prisma.workspace.findMany({
      where: {
        users: {
          some: {
            id: user.id,
          },
        },
      },
    });
  }),
});
