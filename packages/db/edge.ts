if (process.env.PRISMA_DATAPROXY_URL) {
  process.env["DATABASE_URL"] = process.env.PRISMA_DATAPROXY_URL;
} else {
  throw new Error("PRISMA_DATAPROXY_URL is not set");
}
import { PrismaClient } from "@prisma/client/edge";

export const prismaEdge = new PrismaClient({
  datasources: {
    db: {
      url: process.env.PRISMA_DATAPROXY_URL,
    },
  },
});
