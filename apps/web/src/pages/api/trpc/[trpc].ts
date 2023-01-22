import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "src/server/root";
import { createTRPCNextContext } from "src/server/trpc";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCNextContext,
});

export const config = {
  runtime: "nodejs",
};
